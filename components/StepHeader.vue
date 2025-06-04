<script setup lang="ts">

interface Step {
  id: string,
  workflow_id: string,
  name: string,
  description: string,
  order: number
}



const props = defineProps({
  steps: {
    type: Array as PropType<Step[]>,
    required: true
  },
  currentStep: {
    type: Number,
    required: true
  }
})


</script>

<template>
  <b-row class="justify-content-center px-2">
    <b-col md="12" lg="12" class="bg-light">
      <b-list-group horizontal="md">
        <b-list-group-item v-for="step in props.steps" :key="step.id" :class="step.order - 1 === props.currentStep ? 'bg-primary' : ''">
          <i class="la la-angle-double-right text-dark me-2"></i>
          {{ step.name }}
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </b-row>
  <b-progress :value="(steps.length > 0 ? ((props.currentStep + 1) / steps.length) * 100 : 0)" class="rounded-1" />
  
</template>

<style></style>