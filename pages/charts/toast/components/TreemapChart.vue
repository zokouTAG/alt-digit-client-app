<template>
  <div id="treemap-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { treemapChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('treemap-charts')
  tuiChart.registerTheme('myTheme', treemapChartConfig.theme)
  treemapChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    treemapChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.treemapChart(chartEle, treemapChartConfig.data, treemapChartConfig.options)

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
