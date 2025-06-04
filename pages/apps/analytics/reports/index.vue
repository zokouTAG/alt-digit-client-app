<template>
  <b-row>
    <TopCountry />
    <Metrics />
  </b-row>

  <b-row>
    <VisitsDetails />
    <SocialMedia />
  </b-row>
</template>
<script setup lang="ts">
import TopCountry from '~/pages/apps/analytics/reports/components/TopCountry.vue'
import Metrics from '~/pages/apps/analytics/reports/components/Metrics.vue'
import VisitsDetails from '~/pages/apps/analytics/reports/components/VisitsDetails.vue'
import SocialMedia from '~/pages/apps/analytics/reports/components/SocialMedia.vue'

definePageMeta({
  layout: 'default',
  title: 'Reports'
})
</script>
