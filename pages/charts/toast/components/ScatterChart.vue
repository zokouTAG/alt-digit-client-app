<template>
  <div id="scatter-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { scatteChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('scatter-charts')
  tuiChart.registerTheme('myTheme', scatteChartConfig.theme)
  scatteChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    scatteChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.bubbleChart(chartEle, scatteChartConfig.data, scatteChartConfig.options)

    window.addEventListener('resize', function () {
      chartWidth = chartEle.offsetWidth
      chart.resize({
        width: chartWidth,
        height: 350
      })
    })
  }
})
</script>
