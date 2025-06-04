<template>
  <NuxtLoadingIndicator color="#35fe53" />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import 'simplebar'
import 'tui-chart/dist/tui-chart.min.css'
import 'cropperjs/dist/cropper.css'
import 'huebee/dist/huebee.min.css'
import 'sweetalert2/dist/sweetalert2.css'
import 'magic.css/dist/magic.css'
import 'tobii/dist/css/tobii.min.css'
import 'tobii/dist/js/tobii.min.js'
import 'starability/starability-css/starability-all.css'
import 'leaflet/dist/leaflet.css'
import 'simple-datatables/dist/style.css'
import 'nouislider/dist/nouislider.css'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import 'uppy/dist/uppy.min.css'
import 'flatpickr/dist/flatpickr.css'
import 'mobius1-selectr/dist/selectr.min.css'
import 'listree/dist/listree.min.css'
import '~/assets/scss/app.scss'
import '~/assets/scss/icons.scss'

import favicon from '~/assets/images/favicon.ico'

useHead({
  title: 'Rizz - Responsive Admin Dashboard Template',
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
    { name: 'author', content: 'Mannat' },
    { name: 'description', content: 'A fully responsive premium admin dashboard template.' }
  ],
  link: [{ rel: 'shortcut icon', href: favicon }]
})

useSeoMeta({
  title: 'Rizz - Responsive Admin Dashboard Template',
  description: 'A fully responsive premium admin dashboard template.'
})
</script>
