<template>
  <div :id="id" :style="{ width: '100%', height: height + 'px' }"></div>
</template>

<script setup lang="ts">
type VectorMapPropsType = {
  id: string
  height: number
  options: object
}
const props = defineProps<VectorMapPropsType>()

onMounted(() => {
  new (window as any)['jsVectorMap'](props.options)
})
</script>
