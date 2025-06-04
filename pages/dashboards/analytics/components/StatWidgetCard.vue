<script setup lang="ts">
import type { PropType } from 'vue';
import type { StatType } from '~/pages/dashboards/analytics/components/types';

defineProps({
  item: {
    type: Object as PropType<StatType>,
    required: true
  }
})
</script>

<template>
  <b-card no-body>
    <b-card-body :class="`bg-${item.variant}-subtle`">
      <b-row class="d-flex justify-content-center border-dashed-bottom pb-3">
        <b-col cols="9">
          <p class="text-dark mb-0 fw-semibold fs-14">{{ item.title }}</p>
          <h3 class="mt-2 mb-0 fw-bold">{{ item.stat }}</h3>
        </b-col>
        <b-col cols="3" class="align-self-center">
          <div class="d-flex justify-content-center align-items-center thumb-xl rounded-circle mx-auto">
            <i :class="['h1 align-self-center mb-0', `text-${item.variant}`, item.icon]" />
          </div>
        </b-col>
      </b-row>
      <p :class="['mb-0 mt-3', `bg-${item.variant}`]">
      </p>
    </b-card-body>
  </b-card>
</template>

<style>

</style>

