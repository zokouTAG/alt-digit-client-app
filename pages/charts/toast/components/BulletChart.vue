<template>
  <div id="bullet-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { bulletChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const chartEle = document.getElementById('bullet-charts')
  tuiChart.registerTheme('myTheme', bulletChartConfig.theme)
  bulletChartConfig.options.theme = 'myTheme'

  if (chartEle) {
    let chartWidth = chartEle.offsetWidth
    bulletChartConfig.options.chart.width = chartWidth

    const chart = new tuiChart.bulletChart(chartEle, bulletChartConfig.data, bulletChartConfig.options)

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
