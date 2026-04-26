<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

const localePath = useLocalePath()

const route = useRoute()
const activeHash = ref('')

onMounted(() => {
  activeHash.value = window.location.hash
  window.addEventListener('hashchange', () => {
    activeHash.value = window.location.hash
  })
})

const { locale, setLocale, t } = useI18n()
const { y } = useWindowScroll()
const { width } = useWindowSize()

const isNavOpen = ref(false)
const isMobile = computed(() => width.value < 768)
const isStuck = computed(() => y.value > 50)

const toggleNav = () => {
  isNavOpen.value = !isNavOpen.value
  if (isNavOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeNav = () => {
  isNavOpen.value = false
  document.body.style.overflow = ''
}

const translatedNavigation = computed(() => [
  { name: t('nav.services'), href: localePath({ path: '/', hash: '#services' }) },
  { name: t('nav.philosophy'), href: localePath({ path: '/', hash: '#about' }) },
  { name: t('nav.testimonials'), href: localePath({ path: '/', hash: '#testimonials' }) },
  { name: t('nav.faq'), href: localePath({ path: '/', hash: '#faq' }) },
  { name: t('nav.cta'), href: localePath({ path: '/', hash: '#contact' }) },
])
</script>

<template>
  <div class="nav-container">
    <!-- Header -->
    <header 
      class="fixed top-0 left-0 w-full z-110 transition-all duration-500"
      :class="[
        isStuck ? 'bg-surface/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6',
        isNavOpen ? 'bg-transparent shadow-none' : ''
      ]"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12 flex flex-row items-center justify-between">
        <NuxtLink :to="localePath('/')" class="relative flex flex-row items-center justify-center group" @click="closeNav">
          <NuxtImg src="/LogoConstantCare.png" class="h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" />
        </NuxtLink>
 
        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-10">
          <div v-for="(item, index) in translatedNavigation" :key="item.href"
            v-motion="{ 
              initial: { opacity: 0, y: -10 }, 
              enter: { opacity: 1, y: 0, transition: { delay: 100 + (index * 80), duration: 800, ease: 'easeOut' } } 
            }"
          >
            <NuxtLink :to="item.href"
              class="relative text-on-surface-variant hover:text-accent transition duration-500 block group cursor-pointer"
              @click="closeNav">
              {{ item.name }}
              <span class="absolute left-0 -bottom-1 w-full h-px bg-accent transition-transform duration-500 origin-left"
                :class="[ activeHash === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100' ]"></span>
            </NuxtLink>
          </div>
        </nav>
 
        <div class="flex items-center gap-6">
          <div class="hidden lg:block">
            <LangSwitcher class="text-on-surface-variant" />
          </div>
          
          <!-- Book Button (Desktop only) -->
          <NuxtLink 
            :to="localePath({ path: '/', hash: '#contact' })" 
            class="hidden lg:inline-flex items-center justify-center bg-accent text-white px-6 py-3 rounded-md hover:bg-accent-dim transition-colors duration-300"
          >
            {{ $t('hero.cta') }}
          </NuxtLink>
 
          <!-- Mobile Toggle + Lang Switcher -->
          <div class="lg:hidden flex items-center gap-4">
            <LangSwitcher class="text-on-surface-variant" />
            <button @click="toggleNav" class="flex flex-col justify-center items-center w-10 h-10 gap-2 z-120 relative">
              <div class="w-6 h-0.5 transition-all duration-300" :class="[ isNavOpen ? 'rotate-45 translate-y-1.25 bg-on-surface' : 'bg-accent' ]"></div>
              <div class="w-6 h-0.5 transition-all duration-300" :class="[ isNavOpen ? '-rotate-45 -translate-y-1.25 bg-on-surface' : 'bg-accent' ]"></div>
            </button>
          </div>
        </div>
      </div>
    </header>
 
    <!-- Full Screen Mobile Menu -->
    <Transition
      enter-active-class="transition duration-500 ease-out"
      enter-from-class="opacity-0 -translate-x-10"
      enter-to-class="opacity-100 translate-x-0"
      leave-active-class="transition duration-500 ease-in"
      leave-from-class="opacity-100 translate-x-0"
      leave-to-class="opacity-0 -translate-x-10"
    >
      <div v-if="isNavOpen" class="fixed inset-0 z-105 bg-surface h-dvh w-screen flex flex-col justify-center items-start px-12 touch-none">
        <nav class="flex flex-col items-start gap-4 w-full max-w-sm">
          <div v-for="(item, index) in translatedNavigation" :key="item.href"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 100 + (index * 80) } }"
          >
            <NuxtLink :to="item.href"
              class="hover:text-accent transition-colors uppercase text-left py-1 block cursor-pointer"
              :class="[ activeHash === item.href ? 'text-accent' : 'text-on-surface' ]"
              @click="closeNav"
            >
              {{ item.name }}
            </NuxtLink>
          </div>
          
          <div 
            v-motion
            :initial="{ opacity: 0, y: 20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: 500 } }"
            class="mt-12 w-full"
          >
            <NuxtLink 
              :to="localePath({ path: '/', hash: '#contact' })" 
              class="inline-flex items-center justify-center bg-accent text-white px-10 py-5 rounded-md shadow-xl w-full"
              @click="closeNav"
            >
              {{ $t('hero.cta') }}
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
  </div>
</template>
