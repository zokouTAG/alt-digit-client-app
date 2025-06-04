<template>
  <b-row>
    <CustomersData />
    <CustomersGrowth />
  </b-row>
  <SocialStats />
  <CustomersDetails />
</template>
<script setup lang="ts">
import CustomersData from '~/pages/apps/analytics/customers/components/CustomersData.vue'
import CustomersGrowth from '~/pages/apps/analytics/customers/components/CustomersGrowth.vue'
import SocialStats from '~/pages/apps/analytics/customers/components/SocialStats.vue'
import CustomersDetails from '~/pages/apps/analytics/customers/components/CustomersDetails.vue'

definePageMeta({
  layout: 'default',
  title: 'Customers'
})
</script>
