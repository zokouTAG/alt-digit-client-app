<template>
  <div id="bubble-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { bubbleChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('bubble-charts')
  tuiChart.registerTheme('myTheme', bubbleChartConfig.theme)
  bubbleChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    bubbleChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.bubbleChart(chartEle, bubbleChartConfig.data, bubbleChartConfig.options)

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
