<template>
  <b-row>
    <TasksSummary />
    <StateWidgets />
  </b-row>
  <TaskDetails />
</template>
<script setup lang="ts">
import TasksSummary from '~/pages/apps/projects/task/components/TasksSummary.vue'
import StateWidgets from '~/pages/apps/projects/task/components/StateWidgets.vue'
import TaskDetails from '~/pages/apps/projects/task/components/TaskDetails.vue'

definePageMeta({
  layout: 'default',
  title: 'Tasks'
})
</script>
