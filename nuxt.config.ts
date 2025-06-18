// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@bootstrap-vue-next/nuxt', '@pinia/nuxt', '@vueuse/nuxt'],
  router: {
    options: {
      linkActiveClass: 'active'
    }
  },
  // nitro: {
  //   storage: {
  //     redis: {
  //       driver: 'redis',
  //       // Connexion Redis pour SSR cache
  //     }
  //   }
  // },
  routeRules: {
    '/': { redirect: '/dashboards/analytics' }
  },
  app: {
    baseURL: '/rizz_nuxt/'
  },
  ignore: ['pages/**/**/**/components/*'],
})
