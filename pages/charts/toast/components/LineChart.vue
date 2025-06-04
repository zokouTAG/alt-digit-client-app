<template>
  <div id="line-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { lineChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('line-charts')
  tuiChart.registerTheme('myTheme', lineChartConfig.theme)
  lineChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    lineChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.lineChart(chartEle, lineChartConfig.data, lineChartConfig.options)

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
