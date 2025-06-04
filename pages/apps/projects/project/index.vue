<template>
  <b-row>
    <b-col md="6" lg="4" v-for="(item, idx) in projectsData" :key="idx">
      <ProjectCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { projectsData } from '~/pages/apps/projects/project/components/data'
import ProjectCard from '~/pages/apps/projects/project/components/ProjectCard.vue'

definePageMeta({
  layout: 'default',
  title: 'Projects'
})
</script>
