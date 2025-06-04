<template>
  <div id="bar-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { barChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const barChartEle = document.getElementById('bar-charts')
  tuiChart.registerTheme('myTheme', barChartConfig.theme)
  barChartConfig.options.theme = 'myTheme'

  if (barChartEle) {
    let barChartWidth = barChartEle.offsetWidth
    barChartConfig.options.chart.width = barChartWidth

    const barChart = new tuiChart.barChart(barChartEle, barChartConfig.data, barChartConfig.options)

    window.addEventListener('resize', function () {
      barChartWidth = barChartEle.offsetWidth
      barChart.resize({
        width: barChartWidth,
        height: 350
      })
    })
  }
})
</script>
