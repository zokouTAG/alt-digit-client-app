<template>
  <b-row class="justify-content-center">
    <Timeline1 />
    <Timeline2 />
  </b-row>
</template>
<script setup lang="ts">
import Timeline1 from '~/pages/pages/timeline/components/Timeline1.vue'
import Timeline2 from '~/pages/pages/timeline/components/Timeline2.vue'

definePageMeta({
  layout: 'default',
  title: 'Timeline'
})
</script>
