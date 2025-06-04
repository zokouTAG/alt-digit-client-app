export default defineNuxtRouteMiddleware((to, from) => {
  const user = useCookie('__rizz_user__')

  if (user?.value === undefined && to.path !== '/auth/login') {
    return navigateTo(`/auth/login?redirectedFrom=${from.path}`)
  }
  return
})
