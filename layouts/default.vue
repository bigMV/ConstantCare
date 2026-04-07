<script setup>
import { ref, onMounted } from 'vue'
const isMounted = ref(false)
onMounted(() => {
  isMounted.value = true
})

const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale.value
  },
  link: [
    { rel: 'icon', type: 'image/png', href: '/favicon.png' }
  ]
})
</script>

<template>
  <div class="antialiased font-sans text-on-surface bg-surface selection:bg-primary/20 selection:text-primary min-h-screen">
    <AppHeader />
    
    <main>
      <slot />
    </main>

    <AppFooter />

    <!-- Simple Page Reveal Animation Overlay -->
    <div 
      class="fixed inset-0 bg-accent-dark z-[100] pointer-events-none transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      :class="isMounted ? '-translate-y-full' : 'translate-y-0'"
    ></div>
  </div>
</template>

<style>
/* Page Transitions and Global Scroll Behavior */
html {
  scroll-behavior: smooth;
  scroll-padding-top: 100px;
}

body {
  overflow-x: hidden;
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--color-surface);
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-primary-dim);
}

/* Selection */
::selection {
  background: var(--color-primary);
  color: white;
}

/* Nuxt Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
