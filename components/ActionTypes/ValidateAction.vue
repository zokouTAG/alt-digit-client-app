<template>
  <div>
    <h3 class="mb-4 text-center">Validation manuelle</h3>
    <b-card class="text-center">
      <template #header>
        <h4 class="mb-0">{{ config.title || 'Validation requise' }}</h4>
      </template>

      <b-card-text>
        {{ config.description || 'Veuillez valider cette étape pour continuer.' }}
      </b-card-text>

      <b-form @submit.prevent="handleSubmit">
        <b-form-group v-if="config.requireComment" label="Commentaire" label-for="comment">
          <b-form-textarea
            id="comment"
            v-model="comment"
            :required="config.requireComment"
            rows="3"
            placeholder="Ajoutez un commentaire..."
          ></b-form-textarea>
        </b-form-group>

        <div class="d-flex justify-content-center gap-2">
          <b-button
            v-if="config.allowReject"
            variant="danger"
            @click="handleReject"
          >
            Rejeter
          </b-button>
          <b-button
            type="submit"
            variant="success"
          >
            Valider
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
    description?: string
    requireComment?: boolean
    allowReject?: boolean
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [result: { approved: boolean, comment: string }]
}>()

const comment = ref('')

const handleSubmit = () => {
  emit('submit', { approved: true, comment: comment.value })
}

const handleReject = () => {
  emit('submit', { approved: false, comment: comment.value })
}
</script>
