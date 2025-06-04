<template>
  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Custom File Upload">
        <CustomFileUpload />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Uppy File Upload">
        <UppyFileUpload />
      </UIComponentCard>
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import CustomFileUpload from '~/pages/forms/file-uploads/components/CustomFileUpload.vue'
import UppyFileUpload from '~/pages/forms/file-uploads/components/UppyFileUpload.vue'

definePageMeta({
  layout: 'default',
  title: 'Uploads'
})
</script>
