<template>
  <b-row class="row justify-content-center">
    <b-col md="4" lg="4" v-for="(item, idx) in projectData" :key="idx">
      <ProjectCard :item="item" />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import { projectData } from '~/pages/advanced/dragula/components/data'
import ProjectCard from '~/pages/advanced/dragula/components/ProjectCard.vue'

definePageMeta({
  layout: 'default',
  title: 'Dragula'
})
</script>
