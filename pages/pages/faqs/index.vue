<template>
  <b-row class="justify-content-center">
    <AskedQuestions />
  </b-row>

  <b-row class="justify-content-center">
    <QuestionsWithAccordion />
    <HaveMoreQuestions />
  </b-row>
</template>
<script setup lang="ts">
import AskedQuestions from '~/pages/pages/faqs/components/AskedQuestions.vue'
import QuestionsWithAccordion from '~/pages/pages/faqs/components/QuestionsWithAccordion.vue'
import HaveMoreQuestions from '~/pages/pages/faqs/components/HaveMoreQuestions.vue'

definePageMeta({
  layout: 'default',
  title: 'FAQs'
})
</script>
