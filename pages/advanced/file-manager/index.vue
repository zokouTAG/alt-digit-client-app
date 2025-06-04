<template>
  <b-row class="justify-content-center">
    <StatWidgets />
  </b-row>
  <b-row class="justify-content-center">
    <Files />
  </b-row>
</template>

<script setup lang="ts">
import StatWidgets from '~/pages/advanced/file-manager/components/StatWidgets.vue'
import Files from '~/pages/advanced/file-manager/components/Files.vue'

definePageMeta({
  layout: 'default',
  title: 'File Manager'
})
</script>
