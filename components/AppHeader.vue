<script setup>
import { useWindowScroll, useWindowSize } from '@vueuse/core'
import { computed, ref, onMounted } from 'vue'

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
  { name: t('nav.services'), href: '#services' },
  { name: t('nav.philosophy'), href: '#about' },
  { name: t('nav.testimonials'), href: '#testimonials' },
  { name: t('nav.faq'), href: '#faq' },
  { name: t('nav.cta'), href: '#contact' },
])
</script>

<template>
  <div class="nav-container">
    <!-- Header -->
    <header 
      class="fixed top-0 left-0 w-full z-[110] transition-all duration-500"
      :class="[
        isStuck ? 'bg-[#faf9f6]/90 backdrop-blur-xl py-3 shadow-sm' : 'bg-transparent py-6',
        isNavOpen ? 'bg-transparent shadow-none' : ''
      ]"
    >
      <div class="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-row items-center justify-between">
        <NuxtLink to="/" class="relative flex flex-row items-center justify-center group" @click="closeNav">
          <NuxtImg src="/LogoConstantCare.png" class="h-8 md:h-10 transition-transform duration-500 group-hover:scale-105" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-10">
          <div v-for="(item, index) in translatedNavigation" :key="item.href"
            v-motion
            :initial="{ opacity: 0, y: -20 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          >
            <NuxtLink :to="item.href"
              class="relative text-sm font-sans uppercase tracking-[0.2em] text-[#444841] hover:text-[#455846] transition duration-500 block group cursor-pointer"
              @click="closeNav">
              {{ item.name }}
              <span class="absolute left-0 bottom-[-4px] w-full h-[1px] bg-[#455846] transition-transform duration-500 origin-left"
                :class="[ activeHash === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100' ]"></span>
            </NuxtLink>
          </div>
        </nav>

        <div class="flex items-center gap-6">
          <div class="hidden md:block">
            <LangSwitcher class="text-[#444841]" />
          </div>
          
          <!-- Book Button (Desktop only) -->
          <NuxtLink 
            to="#contact" 
            class="hidden md:inline-flex items-center justify-center bg-[#455846] text-white font-sans text-xs uppercase tracking-widest px-6 py-3 rounded-md hover:bg-[#5d705d] transition-colors duration-300"
          >
            {{ $t('hero.cta') }}
          </NuxtLink>

          <!-- Mobile Toggle + Lang Switcher -->
          <div class="md:hidden flex items-center gap-4">
            <LangSwitcher class="text-[#444841]" />
            <button @click="toggleNav" class="flex flex-col justify-center items-center w-10 h-10 gap-2 z-[120] relative">
              <div class="w-6 h-[2px] transition-all duration-300" :class="[ isNavOpen ? 'rotate-45 translate-y-[5px] bg-black' : 'bg-[#455846]' ]"></div>
              <div class="w-6 h-[2px] transition-all duration-300" :class="[ isNavOpen ? '-rotate-45 -translate-y-[5px] bg-black' : 'bg-[#455846]' ]"></div>
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
      <div v-if="isNavOpen" class="fixed inset-0 z-[105] bg-[#faf9f6] h-dvh w-screen flex flex-col justify-center items-start px-12 touch-none">
        <nav class="flex flex-col items-start gap-4 w-full max-w-sm">
          <div v-for="(item, index) in translatedNavigation" :key="item.href"
            v-motion
            :initial="{ opacity: 0, x: -30 }"
            :enter="{ opacity: 1, x: 0, transition: { delay: 100 + (index * 80) } }"
          >
            <NuxtLink :to="item.href"
              class="text-4xl font-light hover:text-[#455846] transition-colors uppercase tracking-tight text-left py-1 block cursor-pointer"
              :class="[ activeHash === item.href ? 'text-[#455846]' : 'text-[#1b1c1a]' ]"
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
              to="#contact" 
              class="inline-flex items-center justify-center bg-[#455846] text-white font-sans text-sm uppercase tracking-[0.2em] px-10 py-5 rounded-md shadow-xl w-full"
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
