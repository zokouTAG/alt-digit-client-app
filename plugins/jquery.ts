import $ from 'jquery'

const jQuery = $
// @ts-ignore
window.jQuery = window.$ = $

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(jQuery)
})
