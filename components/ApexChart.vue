<template>
  <client-only>
    <apexchart :height="chart.height" :type="chart.type" :series="chart.series" :options="chart.options" v-bind="$attrs" />
  </client-only>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { ApexChartType } from '~/types'

defineProps({
  chart: {
    type: Object as PropType<ApexChartType>,
    required: true
  }
})
</script>
