<script setup>
const i18nHead = useLocaleHead({ addSeoAttributes: true })

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
    dir: i18nHead.value.htmlAttrs.dir || 'ltr',
  },
  link: () => i18nHead.value.link,
  meta: () => i18nHead.value.meta
})
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <GlobalTransition />
  <CookieBanner />
</template>
