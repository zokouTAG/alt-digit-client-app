<template>
  <b-row>
    <b-col lg="8">
      <Orders :id="route.params.id" />
      <BoughtDelivery />
    </b-col>
    <b-col lg="4">
      <OrderSummary />
      <OrderInformation />
    </b-col>
  </b-row>
</template>

<script setup lang="ts">
import Orders from '~/pages/apps/ecommerce/orders/components/Orders.vue'
import BoughtDelivery from '~/pages/apps/ecommerce/orders/components/BoughtDelivery.vue'
import OrderSummary from '~/pages/apps/ecommerce/orders/components/OrderSummary.vue'
import OrderInformation from '~/pages/apps/ecommerce/orders/components/OrderInformation.vue'
const route = useRoute()

definePageMeta({
  layout: 'default',
  title: 'Orders Details'
})
</script>
