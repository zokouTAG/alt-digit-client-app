// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@bootstrap-vue-next/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  router: {
    options: {
      linkActiveClass: 'active'
    }
  },
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        // Connexion Redis pour SSR cache
      }
    }
  },
  routeRules: {
    '/': { redirect: '/dashboards/analytics' }
  },
  app: {
    baseURL: '/rizz_nuxt/'
  },
  ignore: ['pages/**/**/**/components/*'],
  plugins: [
    { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/justgage', mode: 'client' },
    { src: '~/plugins/toastui', mode: 'client' },
    { src: '~/plugins/apexcharts', mode: 'client' },
    { src: '~/plugins/jquery', mode: 'client' },
    { src: '~/plugins/jsvectormap', mode: 'client' },
    { src: '~/plugins/leaflet', mode: 'client' },
    { src: '~/plugins/huebee', mode: 'client' }
  ]
})
