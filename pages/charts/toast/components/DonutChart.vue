<template>
  <div id="donut-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { donutPieChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('donut-charts')
  tuiChart.registerTheme('myTheme', donutPieChartConfig.theme)
  donutPieChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    donutPieChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.pieChart(chartEle, donutPieChartConfig.data, donutPieChartConfig.options)

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
