<template>
  <div id="column-charts" dir="ltr"></div>
</template>

<script setup lang="ts">
import { columnChartConfig } from '~/pages/charts/toast/components/data'

onMounted(() => {
  const tuiChart = (window as any)['tuiChart']

  const columnChartEle = document.getElementById('column-charts')
  tuiChart.registerTheme('myTheme', columnChartConfig.theme)
  columnChartConfig.options.theme = 'myTheme'

  if (columnChartEle) {
    let columnChartWidth = columnChartEle.offsetWidth
    columnChartConfig.options.chart.width = columnChartWidth

    const columnChart = new tuiChart.columnChart(columnChartEle, columnChartConfig.data, columnChartConfig.options)

    window.addEventListener('resize', function () {
      columnChartWidth = columnChartEle.offsetWidth
      columnChart.resize({
        width: columnChartWidth,
        height: 350
      })
    })
  }
})
</script>
