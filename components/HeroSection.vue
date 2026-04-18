<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="relative min-h-[921px] flex items-center justify-center pt-24 overflow-hidden bg-[#f4f3f0]" id="home">
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/images/hero_background.png" alt="Hero Background" class="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
      <div class="absolute inset-0 bg-[#faf9f6]/30"></div>
    </div>
    <div class="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-16">
      <div class="max-w-2xl">
        <h1 class="font-sans text-5xl md:text-7xl font-light tracking-tight leading-[1.1] text-[#1b1c1a] mb-8">
            {{ $t('hero.title') }}
        </h1>
        <p class="font-sans text-lg md:text-xl text-[#444841] leading-relaxed mb-12 max-w-lg">
            {{ $t('hero.description') }}
        </p>
        <NuxtLink to="/#services" class="inline-flex items-center justify-center bg-gradient-to-br from-[#455846]/90 to-[#5d705d]/90 text-white font-sans text-sm uppercase tracking-[0.1em] px-8 py-4 rounded-md hover:opacity-90 transition-opacity duration-300 shadow-[0_12px_32px_rgba(27,28,26,0.06)] scale-100 active:scale-95">
            {{ $t('hero.cta') }}
        </NuxtLink>
      </div>
      <div class="hidden md:block relative w-full max-w-md aspect-[3/4] rounded-xl overflow-hidden shadow-[0_24px_48px_rgba(27,28,26,0.08)]">
        <NuxtImg src="/images/hero_therapy_detail.png" alt="Therapy detail" class="w-full h-full object-cover" />
      </div>
    </div>
  </section>
</template>
