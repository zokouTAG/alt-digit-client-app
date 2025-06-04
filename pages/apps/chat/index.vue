<template>
  <b-row>
    <b-col cols="12">
      <ContactList />
      <ChatBox />
    </b-col>
  </b-row>
</template>
<script setup lang="ts">
import ContactList from '~/pages/apps/chat/components/ContactList.vue'
import ChatBox from '~/pages/apps/chat/components/ChatBox.vue'

definePageMeta({
  layout: 'default',
  title: 'Chat'
})
</script>
