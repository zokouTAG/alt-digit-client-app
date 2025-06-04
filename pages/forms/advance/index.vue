<template>
  <b-row class="justify-content-center">
    <SelectComponents />
  </b-row>

  <b-row class="justify-content-center">
    <HuebeeColor />
    <CustomTouchSpin />
  </b-row>

  <b-row class="justify-content-center">
    <DateFlatPicker />
    <Mask />
  </b-row>
</template>
<script setup lang="ts">
import SelectComponents from '~/pages/forms/advance/components/SelectComponents.vue'
import HuebeeColor from '~/pages/forms/advance/components/HuebeeColor.vue'
import CustomTouchSpin from '~/pages/forms/advance/components/CustomTouchSpin.vue'
import DateFlatPicker from '~/pages/forms/advance/components/DateFlatPicker.vue'
import Mask from '~/pages/forms/advance/components/Mask.vue'

definePageMeta({
  layout: 'default',
  title: 'Advance Forms'
})
</script>
