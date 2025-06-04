<template>
  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Bar Chart">
        <BarChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Column Chart">
        <ColumnChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Line chart">
        <LineChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Area chart">
        <AreaChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Bubble chart">
        <BubbleChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Scatter chart">
        <ScatterChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Pie chart">
        <PieChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Donut pie chart">
        <DonutChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Heatmap chart">
        <HeatmapChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Treemap chart">
        <TreemapChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Bullet chart">
        <BulletChart />
      </UIComponentCard>
    </b-col>
    <b-col md="6" lg="6">
      <UIComponentCard title="Radial chart">
        <RadialChart />
      </UIComponentCard>
    </b-col>
  </b-row>

  <b-row class="justify-content-center">
    <b-col md="6" lg="6">
      <UIComponentCard title="Boxplot chart">
        <BoxplotChart />
      </UIComponentCard>
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import BarChart from '~/pages/charts/toast/components/BarChart.vue'
import ColumnChart from '~/pages/charts/toast/components/ColumnChart.vue'
import LineChart from '~/pages/charts/toast/components/LineChart.vue'
import AreaChart from '~/pages/charts/toast/components/AreaChart.vue'
import BubbleChart from '~/pages/charts/toast/components/BubbleChart.vue'
import ScatterChart from '~/pages/charts/toast/components/ScatterChart.vue'
import PieChart from '~/pages/charts/toast/components/PieChart.vue'
import DonutChart from '~/pages/charts/toast/components/DonutChart.vue'
import HeatmapChart from '~/pages/charts/toast/components/HeatmapChart.vue'
import TreemapChart from '~/pages/charts/toast/components/TreemapChart.vue'
import BoxplotChart from '~/pages/charts/toast/components/BoxplotChart.vue'
import BulletChart from '~/pages/charts/toast/components/BulletChart.vue'
import RadialChart from '~/pages/charts/toast/components/RadialChart.vue'

definePageMeta({
  layout: 'default',
  title: 'Toast Charts'
})
</script>
