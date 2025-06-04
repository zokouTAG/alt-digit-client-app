<template>
  <div>
    <h3 class="mb-4 text-center">Notification</h3>
    <b-card>
      <template #header>
        <h4 class="mb-0">{{ config.title || 'Nouvelle notification' }}</h4>
      </template>

      <b-form @submit.prevent="handleSubmit">
        <b-form-group label="Destinataires" label-for="recipients">
          <b-form-tags
            id="recipients"
            v-model="notificationData.recipients"
            placeholder="Ajouter des destinataires"
          ></b-form-tags>
        </b-form-group>

        <b-form-group label="Type de notification" label-for="notificationType">
          <b-form-select
            id="notificationType"
            v-model="notificationData.type"
            :options="notificationTypes"
            required
          ></b-form-select>
        </b-form-group>

        <b-form-group label="Message" label-for="message">
          <b-form-textarea
            id="message"
            v-model="notificationData.message"
            required
            rows="3"
            placeholder="Entrez le message de la notification..."
          ></b-form-textarea>
        </b-form-group>

        <b-form-group label="Options" class="mt-3">
          <b-form-checkbox v-model="notificationData.immediate">
            Envoyer immédiatement
          </b-form-checkbox>
        </b-form-group>

        <div class="text-center mt-4">
          <b-button type="submit" variant="primary">
            {{ isLastAction ? 'Terminer' : 'Envoyer et continuer' }}
          </b-button>
        </div>
      </b-form>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  config: {
    title?: string
    recipients?: string[]
    type?: string
    message?: string
    immediate?: boolean
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [data: {
    recipients: string[]
    type: string
    message: string
    immediate: boolean
  }]
}>()

const notificationTypes = [
  { value: 'info', text: 'Information' },
  { value: 'warning', text: 'Avertissement' },
  { value: 'success', text: 'Succès' },
  { value: 'error', text: 'Erreur' }
]

const notificationData = ref({
  recipients: props.config?.recipients || [],
  type: props.config?.type || 'info',
  message: props.config?.message || '',
  immediate: props.config?.immediate ?? true
})

const handleSubmit = () => {
  emit('submit', notificationData.value)
}
</script>
