<template>
  <client-only>
    <template #fallback>
      <Loading />
    </template>

    <TopBar />

    <LeftSideBar />

    <div class="page-wrapper">
      <div class="page-content">
        <div class="container-xxl">
          <slot />
        </div>

        <div v-if="route.path.includes('/dashboards/steps/')" ></div>
        <Footer v-else/>
      </div>
    </div>
  </client-only>
</template>

<script setup lang="ts">
import { watch } from 'vue'

import Footer from '~/layouts/components/Footer.vue'
import LeftSideBar from '~/layouts/components/LeftSideBar.vue'
import Loading from '~/layouts/components/Loading.vue'
import TopBar from '~/layouts/components/TopBar.vue'

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
