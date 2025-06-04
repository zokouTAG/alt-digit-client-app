<script setup lang="ts">
import ActionWrapper from '~/components/ActionTypes/ActionWrapper.vue'
import StepHeader from '~/components/StepHeader.vue'
import type { ApiResponse } from '~/types/action'

// Interfaces
interface Question {
  id: string
  type: string
  order: number
  variable: string
  question: string
  isRequired: boolean
  description: string
  placeholder?: string | null
  validation?: Record<string, any>
  default?: any
  options?: Array<{
    text: string
    value: string | null
  }>
}

interface ActionConfig {
  title: string
  questions: Question[]
}

interface Action {
  id: string
  step_id: string
  type: string
  config: ActionConfig
  order: number
  is_required: boolean
}

interface Step {
  id: string
  workflow_id: string
  name: string
  description: string
  order: number
  isCompleted?: boolean
  completedActions?: string[]
  requiredActions?: Action[]
}

// State
const starter = ref<ApiResponse>({
  steps: [],
  action: {
    id: '',
    step_id: '',
    type: 'QUESTIONNAIRE',
    config: {
      title: '',
      questions: []
    },
    order: 0,
    is_required: false
  }
})

const currentStep = ref(0)
const error = ref<string | null>(null)
const isLoading = ref(false)
const route = useRoute()
const currentContractId = ref<string | null>(null)
const router = useRouter()
const isCurrentActionValid = ref(true)
const formDataToRestore = ref<Record<string, any> | null>(null)

// API Functions
const fetchStepData = async () => {
  isLoading.value = true
  error.value = null

  try {
    const response = await fetch(`http://localhost:3333/api/init-contract/${route.params.id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || `Erreur HTTP: ${response.status}`)
    }

    starter.value = data

    if (data.steps.length > 0) {
      currentStep.value = 0
    }

  } catch (err) {
    console.error('Erreur:', err)
    if (err instanceof TypeError && err.message.includes('Failed to fetch')) {
      error.value = 'Le serveur est inaccessible. Veuillez vérifier que le serveur est démarré et rafraîchir la page.'
    } else {
      error.value = err instanceof Error ? err.message : 'Une erreur inattendue est survenue'
    }
  } finally {
    isLoading.value = false
  }
}

// Computed
const isLastStep = computed(() => {
  return currentStep.value === starter.value.steps.length - 1
})

const isLastAction = computed(() => {
  const currentStepData = starter.value.steps[currentStep.value]
  if (!currentStepData?.requiredActions) return true
  
  const lastRequiredAction = currentStepData.requiredActions[currentStepData.requiredActions.length - 1]
  return lastRequiredAction?.id === starter.value.action.id
})

const currentStepProgress = computed(() => {
  if (!starter.value.steps[currentStep.value]) return 0

  const step = starter.value.steps[currentStep.value]
  if (!step.requiredActions?.length) return 100

  return ((step.completedActions?.length || 0) / step.requiredActions.length) * 100
})

// Action Functions
const handleActionSubmit = async (actionData: any) => {
  try {
    isLoading.value = true
    const response = await fetch('http://localhost:3333/api/submit-step', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        stepId: starter.value.steps[currentStep.value].id,
        workflowId: route.params.id,
        formData: actionData,
        contractId: currentContractId.value,
        actionId: starter.value.action.id,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      throw new Error(data.message || `Erreur HTTP: ${response.status}`)
    }

    currentContractId.value = data.contract.id

    if (data.isComplete) {
      await router.push({
        path: '/dashboards/contracts',
        query: { success: 'true', contractId: data.contract.id }
      })
      return
    }

    if (data.message === 'Action requise non complétée') {
      starter.value.action = data.nextAction
      error.value = 'Veuillez compléter toutes les actions requises de cette étape'
      return
    }

    if (data.nextAction) {
      starter.value.action = data.nextAction
      return
    }

    if (data.nextStep && data.nextStepAction) {
      starter.value.steps[currentStep.value].isCompleted = true
      starter.value.steps[currentStep.value + 1] = data.nextStep
      starter.value.action = data.nextStepAction
      currentStep.value++
    }

  } catch (err) {
    console.error('Erreur:', err)
    error.value = err instanceof Error ? err.message : 'Une erreur est survenue'
  } finally {
    isLoading.value = false
  }
}

const handleValidationChange = (isValid: boolean) => {
  isCurrentActionValid.value = isValid
}

// Navigation Functions
const previousStep = async () => {
  if (currentStep.value > 0 && currentContractId.value) {
    isLoading.value = true
    error.value = null

    try {
      const response = await fetch(`http://localhost:3333/api/previous-step`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          contractId: currentContractId.value,
          currentStepId: starter.value.steps[currentStep.value].id,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || `Erreur HTTP: ${response.status}`)
      }

      // Mettre à jour les données de l'étape précédente
      currentStep.value--
      starter.value.action = data.previousAction
      formDataToRestore.value = data.formData

    } catch (err) {
      console.error('Erreur:', err)
      error.value = err instanceof Error ? err.message : 'Une erreur est survenue lors de la récupération des données précédentes'
    } finally {
      isLoading.value = false
    }
  }
}

// Pour restaurer les données dans le formulaire
const handleActionMounted = (actionInstance: any) => {
  if (formDataToRestore.value && actionInstance?.restoreData) {
    actionInstance.restoreData(formDataToRestore.value)
    formDataToRestore.value = null
  }
}

// Lifecycle Hooks
onMounted(() => {
  fetchStepData()
})
</script>

<template>
  <div>
    <!-- Loading state -->
    <div v-if="isLoading" class="text-center py-4">
      <b-spinner label="Loading..."></b-spinner>
      <p>Chargement des données...</p>
    </div>

    <!-- Error state -->
    <b-alert v-if="error" show variant="danger" class="mt-3 mx-3">
      <strong>Erreur :</strong> {{ error }}
    </b-alert>

    <!-- Content when data is loaded -->
    <template v-if="!isLoading && !error && starter.steps.length > 0">
      <p class="text-dark text-center fs-4">
        {{ starter.steps[currentStep]?.description }}
      </p>
      <StepHeader :currentStep="currentStep" :steps="starter.steps" />

      <b-container class="pt-2" style="height: 690px; overflow-y: auto;">
        <!-- Action dynamique -->
        <ActionWrapper 
          v-if="starter.action"
          :action="starter.action"
          :isLastAction="isLastAction"
          @submit="handleActionSubmit"
          @validationChange="handleValidationChange"
          @mounted="handleActionMounted"
        />
      </b-container>

      <!-- Navigation buttons -->
      <div class="text-center text-sm-start d-print-none">
        <div class="container-xxl">
          <b-row>
            <b-col cols="12">
              <b-card no-body class="mb-0 rounded-bottom-0 mx-5">
                <b-card-body class="mx-5">
                  <div class="d-flex justify-content-between align-items-center">
                    <b-button variant="outline-secondary" :disabled="currentStep === 0" @click="previousStep">
                      <i class="la la-angle-left"></i> Précédent
                    </b-button>
                    <b-button 
                      v-if="starter.action"
                      variant="primary" 
                      :disabled="starter.action.is_required && !isCurrentActionValid"
                      @click="handleActionSubmit"
                    >
                      {{ isLastAction && isLastStep ? 'Terminer' : 'Suivant' }}
                      <i class="la la-angle-right"></i>
                    </b-button>
                  </div>
                </b-card-body>
              </b-card>
            </b-col>
          </b-row>
        </div>
      </div>
    </template>

    <!-- No data state -->
    <b-alert v-if="!isLoading && !error && starter.steps.length === 0" show variant="info">
      Aucune donnée disponible
    </b-alert>
  </div>
</template>

<style scoped>
.input-zone {
  height: 500px !important;
}
</style>