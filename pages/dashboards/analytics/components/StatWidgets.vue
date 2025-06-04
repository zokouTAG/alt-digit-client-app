<template>
  <b-col md="6" lg="4" v-for="(item, idx) in statData" :key="idx">
    <StatWidgetCard :item="item" />
  </b-col>
</template>
<script setup lang="ts">
import { statData } from '~/pages/dashboards/analytics/components/data'
import StatWidgetCard from '~/pages/dashboards/analytics/components/StatWidgetCard.vue'
</script>
