<template>
  <b-row class="justify-content-center">
    <b-col md="6" lg="4" v-for="(item, idx) in blogData" :key="idx">
      <BlogCard :item="item" />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import { blogData } from '~/pages/pages/blogs/components/data'
import BlogCard from '~/pages/pages/blogs/components/BlogCard.vue'

definePageMeta({
  layout: 'default',
  title: 'Blogs'
})
</script>
