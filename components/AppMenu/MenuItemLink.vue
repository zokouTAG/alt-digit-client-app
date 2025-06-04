<template>
  <NuxtLink :class="className" :to="item.url">
    <i class="menu-icon" :class="item.icon" v-if="item.icon" />
    <span> {{ item.label }} </span>
    <b-badge :variant="null" class="rounded text-success bg-success-subtle ms-1" v-if="item.badge">{{ item.badge.text }}</b-badge>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { SubMenus } from '~/types/menu'

defineProps<SubMenus>()
</script>
