export default defineNuxtRouteMiddleware((to, from) => {
  // DISABLE TEMPORARILY FOR DIAGNOSIS
  return
  
  // Skip on server-side or if the path hasn't changed (e.g. hash changes)
  if (import.meta.server || to.path === from.path) return

  const { triggerTransition } = usePageTransition()

  // We return a promise to Nuxt. The route will only change when we call resolve().
  // This allows the "curtain" to fully cover the screen before the new page content loads.
  return new Promise((resolve) => {
    triggerTransition(async () => {
      resolve()
    })
  })
})
