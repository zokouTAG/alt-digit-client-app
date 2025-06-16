<template>
  <div>
    <h3 class="mb-4 text-center">{{ config.title }}</h3>
    <b-form @submit.prevent="onSubmit" v-if="config.questions.length > 0">
      <div v-for="question in sortedQuestions" :key="question.id" class="mb-4">
        <b-form-group :label="question.question" :label-for="question.variable" :description="question.description">
          <!-- Field Type: Text -->
          <b-form-input v-if="question.type === 'Text'" :id="question.variable"
            v-model="formData[question.variable]" type="text" :required="question.isRequired"
            :placeholder="question.placeholder || ''"></b-form-input>

          <!-- Field Type: LongText -->
          <b-form-textarea v-else-if="question.type === 'Long Text'" :id="question.variable"
            v-model="formData[question.variable]" rows="4" :required="question.isRequired"
            :placeholder="question.placeholder || ''"></b-form-textarea>

          <!-- Field Type: Number -->
          <b-form-input v-else-if="question.type === 'Number'" :id="question.variable"
            v-model="formData[question.variable]" type="number" :required="question.isRequired"
            :placeholder="question.placeholder || ''"></b-form-input>

          <!-- Field Type: Select -->
          <b-form-select v-else-if="question.type === 'Select'" :id="question.variable"
            v-model="formData[question.variable]" :options="[
              { value: null, text: 'Veuillez sélectionner une option' },
              ...question.options?.map(opt => ({
                value: opt.value,
                text: opt.text
              })) || []
            ]" :required="question.isRequired"></b-form-select>

          <!-- Field Type: MultiSelect -->
          <b-form-select v-else-if="question.type === 'Multi Select'" :id="question.variable"
            v-model="formData[question.variable]" :options="question.options?.map(opt => ({
              value: opt.value,
              text: opt.text
            })) || []" multiple :required="question.isRequired"></b-form-select>

          <!-- Field Type: Date -->
          <b-form-input v-else-if="question.type === 'Date'" :id="question.variable"
            v-model="formData[question.variable]" type="date" :required="question.isRequired"></b-form-input>
        </b-form-group>
      </div>
    </b-form>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, watch } from 'vue'

interface Option {
  value: string | number
  text: string
}

interface Question {
  id: string
  order: number
  question: string
  variable: string
  description?: string
  type: 'Text' | 'Long Text' | 'Number' | 'Select' | 'Multi Select' | 'Date'
  isRequired: boolean
  placeholder?: string
  options?: Option[]
}

interface ActionConfig {
  title: string
  questions: Question[]
}

const props = defineProps<{
  config: ActionConfig
  isLastAction: boolean
}>()

const emit = defineEmits<{
  submit: [formData: Record<string, any>]
  validationChange: [isValid: boolean]
}>()

const formData = ref<Record<string, any>>({})

const sortedQuestions = computed<Question[]>(() => {
  return [...props.config.questions].sort((a, b) => a.order - b.order)
})

const isFormValid = computed(() => {
  if (!props.config.questions.length) return true

  return props.config.questions.every(question => {
    if (!question.isRequired) return true
    const value = formData.value[question.variable]

    if (Array.isArray(value)) {
      return value.length > 0
    }

    return value !== undefined && value !== null && value !== ''
  })
})

watch(formData, () => {
  emit('validationChange', isFormValid.value)
}, { deep: true })

watch(() => props.config.questions, () => {
  emit('validationChange', isFormValid.value)
}, { immediate: true })

const onSubmit = (): void => {
  if (isFormValid.value) {
    emit('submit', formData.value)
  }
}

const restoreData = (data: Record<string, any>) => {
  Object.keys(data).forEach(key => {
    formData.value[key] = data[key]
  })
}

// Make restoreData available to parent components
defineExpose({
  restoreData
})
</script>
