<template>
  <div id="heatmap-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { heatmapChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('heatmap-charts')
  tuiChart.registerTheme('myTheme', heatmapChartConfig.theme)
  heatmapChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    heatmapChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.heatmapChart(chartEle, heatmapChartConfig.data, heatmapChartConfig.options)

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
