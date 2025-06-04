<template>
  <component :is="is ?? 'div'" :id="id" class="gauge" :class="className" v-bind="$attrs"></component>
</template>

<script setup lang="ts">
type JustGagePropsType = {
  is?: string
  id: string
  options?: any
  className?: string
}

const props = defineProps<JustGagePropsType>()

onMounted(() => {
  const justgage = new (window as any)['JustGage']({
    id: props.id,
    ...props.options
  })
})
</script>
