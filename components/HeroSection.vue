<script setup>
import { ArrowRight as LucideArrowRight, ChevronDown as LucideChevronDown } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section class="h-screen relative flex items-center justify-start overflow-hidden">
    <!-- Full Screen Background Image -->
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/images/hero.png" alt="Professional Cleaning in Oslo by Anca Drumea | Anka Renhold AS"
        class="w-full h-full object-cover grayscale-[0.1] contrast-[1.05]" loading="eager" fetchpriority="high" />
      <!-- Cinematic Overlay: Gradient + Progressive Blur at the bottom -->
      <div
        class="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-surface pointer-events-none opacity-90 overflow-hidden">
        <!-- The smooth blur layer -->
        <div class="absolute inset-x-0 bottom-0 h-1/2 backdrop-blur-md transition-all duration-1000 progressive-blur">
        </div>
      </div>
    </div>

    <!-- Content -->
    <div class="container-content relative z-20 pointer-events-none text-left">
      <div
        class="max-w-[800px] xl:max-w-[40vw] pointer-events-auto text-left glass p-12 md:p-16 xl:p-[4vw] rounded-[4rem] border-white/20 shadow-2xl backdrop-blur-3xl animate-in-simple">
      

        <div class="mb-10 xl:mb-[3vw] relative shrink-0">
          <HeadingRenderPass 
            as="h1" 
            uid="hero-title"
            class="text-shadow-lg text-on-surface text-left !leading-[1.1] text-4xl break-words [hyphens:auto] [word-break:break-word]"
            :delay="0.3"
          >
            <span class="block font-serif italic pr-4">{{ $t('hero.title_part1') }}</span>
            <span class="block font-serif font-bold">{{ $t('hero.title_part2') }}</span>
          </HeadingRenderPass>
        </div>
        <p class="max-w-[60ch] text-base opacity-0 animate-in-simple delay-500 text-on-surface/80 text-left">
          {{ $t('hero.description') }}
        </p>

        <div class="flex items-center gap-8 mt-12 opacity-0 animate-in-simple delay-700">
          <NuxtLink to="/#contact" class="btn btn-primary group shadow-2xl">
            {{ $t('hero.cta') }}
            <LucideArrowRight :size="20" class="ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </NuxtLink>
          <NuxtLink to="/#services"
            class="eyebrow-label border-b border-primary/20 hover:border-primary pb-1 group cursor-pointer transition-all">
            {{ $t('nav.services') }}
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="absolute bottom-8 left-12 right-12 z-20 flex items-center justify-between opacity-60 mix-blend-difference pointer-events-none">
      <!-- Scroll Indicator -->
      <div class="flex items-center gap-2 pointer-events-auto">
        <span class="eyebrow-label text-white tracking-widest">SCROLL</span>
        <LucideChevronDown :size="20" class="text-white animate-bounce-slow" />
      </div>

      <!-- Location Label -->
      <div class="flex items-center">
        <span class="eyebrow-label text-white tracking-widest uppercase">Oslo, Norway</span>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container-max {
  max-width: 1920px;
}

.text-shadow-lg {
  text-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
}

.progressive-blur {
  -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
  mask-image: linear-gradient(to bottom, transparent 0%, black 100%);
}

.animate-in-simple {
  animation: fade-in-up 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-500 {
  animation-delay: 500ms;
}

.delay-700 {
  animation-delay: 700ms;
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(30px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-bounce-slow {
  animation: bounce-slow 2s infinite;
}

@keyframes bounce-slow {
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-8px);
  }
  60% {
    transform: translateY(-4px);
  }
}
</style>
