<template>
  <b-row>
    <b-col md="6" lg="4" v-for="(item, idx) in teamsData" :key="idx">
      <TeamCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { teamsData } from '~/pages/apps/projects/team/components/data'
import TeamCard from '~/pages/apps/projects/team/components/TeamCard.vue'

definePageMeta({
  layout: 'default',
  title: 'Team'
})
</script>
