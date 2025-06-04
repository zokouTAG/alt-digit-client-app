<template>
  <div id="boxplot-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { boxplotChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('boxplot-charts')
  tuiChart.registerTheme('myTheme', boxplotChartConfig.theme)
  boxplotChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    boxplotChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.boxplotChart(chartEle, boxplotChartConfig.data, boxplotChartConfig.options)

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
