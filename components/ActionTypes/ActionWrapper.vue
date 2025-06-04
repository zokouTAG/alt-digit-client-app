<template>
  <component
    :is="currentActionComponent"
    ref="actionComponent"
    :config="action.config"
    :isLastAction="isLastAction"
    @submit="handleActionSubmit"
    @validationChange="handleValidationChange"
  />
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { ActionType } from '~/helpers/constants'
import EmailAction from './EmailAction.vue'
import GenerateAction from './GenerateAction.vue'
import NotifyAction from './NotifyAction.vue'
import QuestionnaireAction from './QuestionnaireAction.vue'
import SignAction from './SignAction.vue'
import ValidateAction from './ValidateAction.vue'

const props = defineProps<{
  action: {
    id: string
    type: ActionType
    config: any
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [actionData: any]
  validationChange: [isValid: boolean]
  mounted: [component: any]
}>()

const currentActionComponent = computed(() => {
  switch (props.action.type) {
    case 'QUESTIONNAIRE':
      return QuestionnaireAction
    case 'ENVOYER_MAIL':
      return EmailAction
    case 'VALIDER':
      return ValidateAction
    case 'SIGNER':
      return SignAction
    case 'GENERER':
      return GenerateAction
    case 'NOTIFIER':
      return NotifyAction
    default:
      console.error(`Type d'action non pris en charge: ${props.action.type}`)
      return null
  }
})

const actionComponent = ref(null)

onMounted(() => {
  if (actionComponent.value) {
    emit('mounted', actionComponent.value)
  }
})

const handleActionSubmit = (data: any) => {
  emit('submit', {
    actionId: props.action.id,
    type: props.action.type,
    data
  })
}

const handleValidationChange = (isValid: boolean) => {
  emit('validationChange', isValid)
}
</script>
