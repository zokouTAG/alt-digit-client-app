import * as Huebee from 'huebee'

declare global {
  interface Window {
    Huebee?: any
  }
}

window.Huebee = Huebee

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Huebee)
})
