<template>
  <div class="container-xxl">
    <b-row class="vh-100 d-flex justify-content-center">
      <b-col cols="12" class="align-self-center">
        <b-card-body>
          <b-row>
            <slot />
          </b-row>
        </b-card-body>
      </b-col>
    </b-row>
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import { DEFAULT_PAGE_TITLE } from '~/helpers/constants'

const defaultTitle = DEFAULT_PAGE_TITLE
const route = useRoute()

watch(
  () => route.path,
  () => {
    useHead({
      title: `${route.meta.title ? route.meta.title + ' | ' + defaultTitle : defaultTitle}`
    })
  },
  { immediate: true, deep: true }
)
</script>
