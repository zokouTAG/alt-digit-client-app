<template>
  <div id="radial-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { radialChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('radial-charts')
  tuiChart.registerTheme('myTheme', radialChartConfig.theme)
  radialChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    radialChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.radialChart(chartEle, radialChartConfig.data, radialChartConfig.options)

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
