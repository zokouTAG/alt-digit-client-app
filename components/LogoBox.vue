<template>
  <NuxtLink to="/" class="logo">
    <span> <img :src="logoSm" alt="logo-small" class="logo-sm" />{{ ' ' }} </span>
    <!-- <span class="">
      <img :src="logoLight" alt="logo-large" class="logo-lg logo-light" />
      <img :src="logoDark" alt="logo-large" class="logo-lg logo-dark" />
    </span> -->
  </NuxtLink>
</template>
<script setup lang="ts">
import logoSm from '~/assets/images/alt-digit-logo.png';
</script>
