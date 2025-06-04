<template>
  <div>
    <h3 class="mb-4 text-center">Génération de document</h3>
    <b-card>
      <template #header>
        <h4 class="mb-0">{{ config.title || 'Génération du document' }}</h4>
      </template>

      <b-card-text>
        {{ config.description || 'Le document sera généré avec les informations fournies.' }}
      </b-card-text>

      <div v-if="config.showPreview && documentUrl" class="document-preview mb-4">
        <b-embed
          type="iframe"
          aspect="4by3"
          :src="documentUrl"
        ></b-embed>
      </div>

      <div class="text-center">
        <b-button
          v-if="documentUrl"
          variant="info"
          class="mr-2"
          @click="handleDownload"
        >
          Télécharger le document
        </b-button>
        
        <b-button
          variant="primary"
          @click="handleSubmit"
          :disabled="isGenerating"
        >
          <b-spinner small v-if="isGenerating"></b-spinner>
          {{ isGenerating ? 'Génération en cours...' : buttonText }}
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  config: {
    title?: string
    description?: string
    template?: string
    showPreview?: boolean
    format?: 'pdf' | 'docx'
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [result: { documentUrl: string, format: string }]
}>()

const isGenerating = ref(false)
const documentUrl = ref('')

const buttonText = computed(() => {
  if (documentUrl.value) {
    return props.isLastAction ? 'Terminer' : 'Continuer'
  }
  return 'Générer le document'
})

const handleDownload = () => {
  if (documentUrl.value) {
    window.open(documentUrl.value, '_blank')
  }
}

const handleSubmit = async () => {
  if (!documentUrl.value) {
    isGenerating.value = true
    try {
      // Simulation de la génération
      await new Promise(resolve => setTimeout(resolve, 2000))
      documentUrl.value = 'URL_DU_DOCUMENT_GENERE'
      
      emit('submit', {
        documentUrl: documentUrl.value,
        format: props.config.format || 'pdf'
      })
    } finally {
      isGenerating.value = false
    }
  } else {
    emit('submit', {
      documentUrl: documentUrl.value,
      format: props.config.format || 'pdf'
    })
  }
}
</script>

<style scoped>
.document-preview {
  max-height: 600px;
  overflow-y: auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
