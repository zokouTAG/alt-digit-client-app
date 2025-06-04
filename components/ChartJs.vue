<template>
  <canvas :id="id" v-bind="$attrs"></canvas>
</template>

<script setup lang="ts">
import Chart, { type ChartItem } from 'chart.js/auto'

type ChartJsPropsType = {
  id: string
  config: any
}

const props = defineProps<ChartJsPropsType>()

let chart: Chart

onMounted(() => {
  const canvasTag = <ChartItem>document.getElementById(props.id)
  chart = new Chart(canvasTag, props.config)
})

onUnmounted(() => {
  chart.clear()
})
</script>
