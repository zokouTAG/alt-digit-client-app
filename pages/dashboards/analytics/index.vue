<script setup lang="ts">
interface Contract {
  id: string,
  name: string,
  description: string,
  step: number
}
definePageMeta({
  layout: 'default',
  title: 'Analytics'
})
const submitError = ref("")
const isSubmitting = ref(false)
const isLoading = ref(false)
const contracts = ref<Contract[]>([])

const extralargeModal = ref(false)

// Observer pour le modal, déclenche le chargement des contrats
watch(extralargeModal, (newValue) => {
  if (newValue) {
    getContracts()
  } else {
    // Réinitialiser l'état en fermant le modal
    submitError.value = ""
  }
})

async function getContracts() {
  isLoading.value = true
  submitError.value = ""

  try {
    const response = await fetch('http://localhost:3333/api/contract-all', {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    })

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`)
    }

    const data = await response.json()
    contracts.value = data
  } catch (err) {
    console.error('Erreur:', err)
    submitError.value = 'Une erreur est survenue lors du chargement des contrats'
  } finally {
    isLoading.value = false
  }
}

function handleModalClose() {
  extralargeModal.value = false
}

function handleRetry() {
  getContracts()
}
</script>

<template>
  <b-container class="text-center">
    <b-button type="button" class="px-5 py-2 mb-3" size="sm" variant="primary"
      @click="extralargeModal = !extralargeModal">
      Nouveau contrat
    </b-button>
  </b-container>

  <b-modal v-model="extralargeModal" title="Quel contrat voulez-vous créer ?" size="xl"
    header-class="bg-primary text-white" ok-only ok-variant="secondary" ok-title="Fermer" @hidden="handleModalClose">

    <!-- Affichage du chargement -->
    <div v-if="isLoading" class="text-center py-5">
      <b-spinner variant="primary" label="Chargement des contrats..."></b-spinner>
      <p class="mt-2">Chargement des contrats...</p>
    </div>

    <!-- Affichage de l'erreur -->
    <div v-else-if="submitError" class="alert alert-danger text-center py-4">
      <div class="mb-3">
        <i class="fas fa-exclamation-triangle fa-2x"></i>
      </div>
      <p>{{ submitError }}</p>
      <b-button variant="outline-primary" size="sm" @click="handleRetry" class="mt-2">
        <i class="fas fa-sync-alt me-1"></i> Réessayer
      </b-button>
    </div>

    <!-- Affichage des contrats -->
    <div v-else-if="contracts.length > 0">
      <b-row>
        <b-col lg="4" v-for="contract in contracts" :key="contract.id" class="mb-4">
          <b-card no-body class="text-secondary text-center shadow-sm h-100 hover-card">
            <b-card-header>
              <b-card-title>{{ contract.name }}</b-card-title>
            </b-card-header>
            <b-card-body class="pt-0">
              <p class="card-text text-muted">{{ contract.description }}</p>
              <p class="card-text text-muted">Étapes: {{ contract.step }}</p>
              <NuxtLink :to="`/dashboards/steps/${contract.id}`" class="btn btn-primary btn-sm">
                Choisir
              </NuxtLink>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </div>

    <!-- Aucun contrat disponible -->
    <div v-else class="text-center py-4">
      <div class="mb-3">
        <i class="fas fa-folder-open fa-2x text-muted"></i>
      </div>
      <p class="text-muted">Aucun contrat disponible</p>
    </div>

    <template #footer>
      <div class="w-100 d-flex justify-content-between">
        <b-button variant="secondary" @click="handleModalClose">Annuler</b-button>
        <div>
          <b-button variant="outline-secondary" class="me-2" @click="handleRetry" :disabled="isLoading">
            <i class="fas fa-sync-alt me-1"></i> Rafraîchir
          </b-button>
        </div>
      </div>
    </template>
  </b-modal>
</template>

<style scoped>
.hover-card {
  transition: transform 0.2s, box-shadow 0.2s;
}

.hover-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
}

/* Animation pour le spinner */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.fas.fa-sync-alt {
  display: inline-block;
}

.btn:hover .fas.fa-sync-alt {
  animation: spin 1s linear infinite;
}
</style>