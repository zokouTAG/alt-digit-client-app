<template>
  <b-row>
    <b-col lg="8">
      <RefundRequest />
    </b-col>
    <b-col lg="4">
      <OrderSummary />
      <Amount />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import RefundRequest from '~/pages/apps/ecommerce/refunds/components/RefundRequest.vue'
import OrderSummary from '~/pages/apps/ecommerce/refunds/components/OrderSummary.vue'
import Amount from '~/pages/apps/ecommerce/refunds/components/Amount.vue'

definePageMeta({
  layout: 'default',
  title: 'Refunds'
})
</script>
