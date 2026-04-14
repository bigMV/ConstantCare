<script setup>
import { Menu as LucideMenu, Languages as LucideLanguages, X as LucideX } from 'lucide-vue-next'
const { locale, locales, setLocale } = useI18n()
const router = useRouter()

const isScrolled = ref(false)
if (process.client) {
  window.addEventListener('scroll', () => {
    isScrolled.value = window.scrollY > 20
  })
}

const handleLocaleChange = async (code) => {
  // Clear hash to prevent auto-scrolling to current # sections
  await router.replace({ hash: '' })
  setLocale(code)
}

const route = useRoute()
const isHomePage = computed(() => route.path === '/' || route.path === '/no')

const isMenuOpen = ref(false)
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
  if (isMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const forceDarkText = computed(() => !isHomePage.value || isMenuOpen.value)
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-700"
    :class="isScrolled || isMenuOpen ? 'py-4 glass-intensive shadow-2xl' : 'py-8 bg-transparent'">
    <nav class="container-content flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-3 group">
        <div class="brand-logo">
          <NuxtImg src="/logo.png" alt="Logo" class="w-full h-full object-contain brightness-0 invert" />
        </div>
        <span
          class="brand-text transition-colors duration-500"
          :class="isScrolled || forceDarkText ? 'text-on-surface hover:text-primary' : 'text-white'"
        >  Ankarenhold
        </span>
      </NuxtLink>

      <!-- Desktop Nav -->
      <div class="hidden lg:flex items-center gap-8 xl:gap-[3vw]">
        <div class="flex items-center gap-8 transition-all duration-200"
          :class="isScrolled || forceDarkText ? 'text-on-surface' : 'text-white'">
          <NuxtLink to="/#services" class="eyebrow-label hover:text-primary transition-all hover:translate-y-[-1px]">{{
            $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/#philosophy" class="eyebrow-label hover:text-primary transition-all hover:translate-y-[-1px]">{{
            $t('nav.philosophy') }}</NuxtLink>
          <NuxtLink to="/#faq" class="eyebrow-label hover:text-primary transition-all hover:translate-y-[-1px]">{{
            $t('nav.faq') }}</NuxtLink>
        </div>

        <!-- Language Switcher -->
        <div
          class="flex items-center gap-2 p-1 rounded-full border border-on-surface/5 backdrop-blur-md transition-all duration-700"
          :class="isScrolled || forceDarkText ? 'bg-surface-low/50' : 'bg-white/10 '">
          <button v-for="loc in locales" :key="loc.code" @click="handleLocaleChange(loc.code)"
            class="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-700 group/lang relative cursor-pointer"
            :class="locale === loc.code ? 'bg-primary text-white shadow-lg' : (isScrolled || forceDarkText ? 'hover:bg-surface-high text-on-surface/40 hover:text-primary' : 'text-white/40 hover:text-white hover:bg-white/10')"
            :title="loc.name">
            <span class="text-[10px] font-black uppercase tracking-tighter relative z-10">
              {{ loc.code }}
            </span>
            <div v-if="locale === loc.code" class="absolute inset-0 rounded-full bg-primary animate-ping opacity-20">
            </div>
          </button>
        </div>

        <NuxtLink to="/#contact"
          class="btn btn-primary !py-3 !px-8 text-sm hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all duration-300">
          {{ $t('nav.cta') }}
        </NuxtLink>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="lg:hidden p-3 rounded-full backdrop-blur-md border border-on-surface/5 transition-all duration-700 relative w-12 h-12 flex justify-center items-center cursor-pointer"
        :class="isScrolled || forceDarkText ? 'bg-surface-low/50 text-on-surface hover:text-primary' : 'bg-white/10 border-white/10 text-white'">
        <LucideMenu class="absolute transition-all duration-500" :size="24" :class="isMenuOpen ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'" />
        <LucideX class="absolute transition-all duration-500" :size="24" :class="isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'" />
      </button>
    </nav>

    <!-- Mobile Menu Overlay -->
    <div 
      class="fixed top-0 left-0 w-full h-[100dvh] z-[-1] bg-surface flex flex-col px-6 md:px-12 transition-all duration-700 ease-in-out lg:hidden"
      :class="isMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-8 pointer-events-none'"
    >
      <div class="flex-1 flex flex-col justify-center gap-8 md:gap-10 text-5xl md:text-6xl font-serif text-left opacity-0 transition-opacity duration-700 delay-300" :class="isMenuOpen ? '!opacity-100' : ''" @click="toggleMenu">
        <NuxtLink to="/#services" class="hover:text-primary hover:underline hover:underline-offset-8 decoration-primary/50 transition-all cursor-pointer">{{ $t('nav.services') }}</NuxtLink>
        <NuxtLink to="/#philosophy" class="hover:text-primary hover:underline hover:underline-offset-8 decoration-primary/50 transition-all cursor-pointer">{{ $t('nav.philosophy') }}</NuxtLink>
        <NuxtLink to="/#faq" class="hover:text-primary hover:underline hover:underline-offset-8 decoration-primary/50 transition-all cursor-pointer">{{ $t('nav.faq') }}</NuxtLink>
        <NuxtLink to="/#contact" class="hover:text-primary hover:underline hover:underline-offset-8 decoration-primary/50 transition-all text-primary italic cursor-pointer">{{ $t('nav.cta') }}</NuxtLink>
      </div>

      <!-- Language Switcher Mobile -->
      <div class="pb-20 flex items-center gap-4 opacity-0 transition-opacity duration-700 delay-500" :class="isMenuOpen ? '!opacity-100' : ''">
        <button v-for="loc in locales" :key="loc.code" @click="handleLocaleChange(loc.code); toggleMenu()"
          class="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 relative bg-surface-highest text-on-surface cursor-pointer"
          :class="locale === loc.code ? 'border border-primary text-primary font-bold' : 'opacity-60 border border-transparent'"
        >
          <span class="text-xs uppercase tracking-widest">{{ loc.code }}</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.glass-intensive {
  background: rgba(248, 250, 249, 0.7);
  backdrop-filter: blur(20px) saturate(180%);

}
</style>
