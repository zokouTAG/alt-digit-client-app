<template>
  <div id="area-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { areaChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('area-charts')
  tuiChart.registerTheme('myTheme', areaChartConfig.theme)
  areaChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    areaChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.areaChart(chartEle, areaChartConfig.data, areaChartConfig.options)

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
