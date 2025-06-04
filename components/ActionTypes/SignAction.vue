<template>
  <div>
    <h3 class="mb-4 text-center">Signature électronique</h3>
    <b-card class="text-center">
      <template #header>
        <h4 class="mb-0">{{ config.title || 'Signature requise' }}</h4>
      </template>

      <div class="signature-area mb-4">
        <div v-if="previewUrl" class="mb-3">
          <b-img :src="previewUrl" fluid alt="Document à signer"></b-img>
        </div>
        
        <div v-if="!signatureUrl" ref="signaturePad" class="signature-pad border rounded p-3">
          <!-- Zone de signature sera initialisée ici -->
        </div>
        
        <div v-else class="mb-3">
          <p>Signature effectuée :</p>
          <b-img :src="signatureUrl" fluid alt="Signature" class="signature-preview"></b-img>
        </div>
      </div>

      <div class="d-flex justify-content-center gap-2">
        <b-button
          v-if="!signatureUrl"
          variant="secondary"
          @click="clearSignature"
        >
          Effacer
        </b-button>
        <b-button
          type="submit"
          variant="primary"
          :disabled="!canSubmit"
          @click="handleSubmit"
        >
          {{ isLastAction ? 'Terminer' : 'Signer et continuer' }}
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
// import SignaturePad from 'signature_pad'

const props = defineProps<{
  config: {
    title?: string
    documentUrl?: string
    requireName?: boolean
  }
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [data: { signatureUrl: string, name?: string }]
}>()

const signaturePad = ref<any>(null)
const signaturePadElement = ref<HTMLCanvasElement | null>(null)
const signatureUrl = ref('')
const previewUrl = ref(props.config.documentUrl || '')
const signerName = ref('')

const canSubmit = computed(() => {
  if (props.config.requireName && !signerName.value) return false
  return !!signatureUrl.value
})

onMounted(() => {
  signaturePadElement.value = document.querySelector('canvas')
  if (signaturePadElement.value) {
    // signaturePad.value = new SignaturePad(signaturePadElement.value)
  }
})

const clearSignature = () => {
  if (signaturePad.value) {
    signaturePad.value.clear()
  }
  signatureUrl.value = ''
}

const handleSubmit = () => {
  if (!canSubmit.value) return

  const data = {
    signatureUrl: signatureUrl.value
  }
  if (props.config.requireName) {
    Object.assign(data, { name: signerName.value })
  }
  emit('submit', data)
}

// Pour l'aperçu, ajouter un gestionnaire d'événements au pad de signature
watch(() => signaturePad.value, (pad) => {
  if (pad) {
    pad.onEnd = () => {
      signatureUrl.value = pad.toDataURL()
    }
  }
}, { immediate: true })
</script>

<style scoped>
.signature-pad {
  width: 100%;
  max-width: 500px;
  height: 200px;
  margin: 0 auto;
  background: #fff;
}

.signature-preview {
  max-width: 300px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 4px;
}
</style>
