<template>
  <b-row class="justify-content-center">
    <StatWidgets />
  </b-row>
  <b-row class="justify-content-center">
    <MonthlyAvgIncome />
  </b-row>
  <b-row class="justify-content-center">
    <TopSelling />
    <CategoriesData />
    <Customers />
  </b-row>
  <!-- <b-row class="justify-content-center">
    <TopSelling />
    <CategoriesData />
    <RecentsOrder />
  </b-row> -->
</template>
<script setup lang="ts">
import StatWidgets from '~/pages/dashboards/analytics/components/StatWidgets.vue'
import CategoriesData from '~/pages/dashboards/ecommerce/components/CategoriesData.vue'
import Customers from '~/pages/dashboards/ecommerce/components/Customers.vue'
import MonthlyAvgIncome from '~/pages/dashboards/ecommerce/components/MonthlyAvgIncome.vue'
import TopSelling from '~/pages/dashboards/ecommerce/components/TopSelling.vue'

definePageMeta({
  layout: 'default',
  title: 'Ecommerce'
})
</script>
