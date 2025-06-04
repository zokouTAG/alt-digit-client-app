<template>
  <b-row>
    <b-col md="6" lg="4" v-for="(item, idx) in clients" :key="idx">
      <ClientCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { clients } from '~/pages/apps/projects/clients/components/data'
import ClientCard from '~/pages/apps/projects/clients/components/ClientCard.vue'

definePageMeta({
  layout: 'default',
  title: 'Clients'
})
</script>
