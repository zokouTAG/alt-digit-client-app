<template>
  <b-row class="justify-content-center">
    <ProfileInfo />
  </b-row>

  <b-row class="justify-content-center">
    <PersonalInformation />
    <ProfileTabs />
  </b-row>
</template>
<script setup lang="ts">
import ProfileInfo from '~/pages/pages/profile/components/ProfileInfo.vue'
import PersonalInformation from '~/pages/pages/profile/components/PersonalInformation.vue'
import ProfileTabs from '~/pages/pages/profile/components/ProfileTabs.vue'

definePageMeta({
  layout: 'default',
  title: 'Profile'
})
</script>
