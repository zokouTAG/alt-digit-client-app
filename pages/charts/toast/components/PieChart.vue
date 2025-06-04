<template>
  <div id="pie-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { pieChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('pie-charts')
  tuiChart.registerTheme('myTheme', pieChartConfig.theme)
  pieChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    pieChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.pieChart(chartEle, pieChartConfig.data, pieChartConfig.options)

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
