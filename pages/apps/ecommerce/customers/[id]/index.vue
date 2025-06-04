<template>
  <b-row>
    <Profile :id="route.params.id" />
    <StatsWidgets />
  </b-row>
  <Orders />
</template>

<script setup lang="ts">
import Profile from '~/pages/apps/ecommerce/customers/components/Profile.vue'
import StatsWidgets from '~/pages/apps/ecommerce/customers/components/StatsWidgets.vue'
import Orders from '~/pages/apps/ecommerce/customers/components/Orders.vue'
const route = useRoute()

definePageMeta({
  layout: 'default',
  title: 'Customers Details'
})
</script>
