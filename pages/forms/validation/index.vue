<template>
  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Vue Bootstrap">
        <VBForm />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Validation Tooltips">
        <ValidationTooltipsForm />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row>
    <b-col md="6" lg="6">
      <UIComponentCard title="Vuelidate Form">
        <VuelidateForm />
      </UIComponentCard>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import VBForm from '~/pages/forms/validation/components/VBForm.vue'
import VuelidateForm from '~/pages/forms/validation/components/VuelidateForm.vue'
import ValidationTooltipsForm from '~/pages/forms/validation/components/ValidationTooltipsForm.vue'

definePageMeta({
  layout: 'default',
  title: 'Validation'
})
</script>
