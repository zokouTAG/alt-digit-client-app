<template>
  <div>
    <h3 class="mb-4 text-center">Envoi d'email</h3>
    <b-form @submit.prevent="handleSubmit">
      <b-form-group label="Objet" label-for="subject">
        <b-form-input
          id="subject"
          v-model="emailData.subject"
          required
          placeholder="Entrez l'objet de l'email"
        ></b-form-input>
      </b-form-group>

      <b-form-group label="Destinataires" label-for="destinataires">
        <b-form-tags
          id="destinataires"
          v-model="emailData.destinataires"
          tag-variant="primary"
          separator=" ,;"
          placeholder="Ajouter des destinataires (séparer par virgule)"
          :state="isEmailValid"
        ></b-form-tags>
      </b-form-group>

      <b-form-group label="CC" label-for="cc">
        <b-form-tags
          id="cc"
          v-model="emailData.CC"
          tag-variant="info"
          separator=" ,;"
          placeholder="Ajouter des destinataires en copie"
        ></b-form-tags>
      </b-form-group>

      <b-form-group label="BCC" label-for="bcc">
        <b-form-tags
          id="bcc"
          v-model="emailData.BCC"
          tag-variant="secondary"
          separator=" ,;"
          placeholder="Ajouter des destinataires en copie cachée"
        ></b-form-tags>
      </b-form-group>

      <b-form-group label="Message" label-for="body">
        <b-form-textarea
          id="body"
          v-model="emailData.body"
          required
          rows="6"
          placeholder="Composez votre message..."
        ></b-form-textarea>
      </b-form-group>

      <div class="text-center mt-4">
        <b-button type="submit" variant="primary">
          {{ isLastAction ? 'Terminer' : 'Envoyer et continuer' }}
        </b-button>
      </div>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  config: {
    subject?: string
    destinataires?: string[]
    CC?: string[]
    BCC?: string[]
    body?: string
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [emailData: {
    subject: string
    destinataires: string[]
    CC: string[]
    BCC: string[]
    body: string
  }]
}>()

const emailData = ref({
  subject: props.config?.subject || '',
  destinataires: props.config?.destinataires || [],
  CC: props.config?.CC || [],
  BCC: props.config?.BCC || [],
  body: props.config?.body || ''
})

const isEmailValid = computed(() => {
  if (emailData.value.destinataires.length === 0) return false
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailData.value.destinataires.every(email => emailRegex.test(email))
})

const handleSubmit = () => {
  if (isEmailValid.value) {
    emit('submit', emailData.value)
  }
}
</script>
