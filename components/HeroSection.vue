<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="min-h-screen relative flex items-center pt-20 overflow-hidden bg-[#f4f3f0]" id="home">
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/images/hero_background.png" alt="Hero Background" class="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
      <div class="absolute inset-0 bg-[#faf9f6]/30"></div>
    </div>
    
    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-12" v-motion-slide-visible-left>
          <div class="space-y-6">
            <span class="eyebrow block">{{ $t('hero.subtitle') }}</span>
            <h1 class="display-xl max-w-xl text-[#1b1c1a]">
              {{ $t('hero.title') }}
            </h1>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-6">
            <NuxtLink to="/shop" class="group relative overflow-hidden px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98]">
              <div class="absolute inset-0 bg-gradient-to-br from-[#455846] to-[#5d705d]"></div>
              <div class="relative flex items-center gap-3 text-white button-label">
                <span>{{ $t('hero.cta') }}</span>
                <span class="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </NuxtLink>
            
            <NuxtLink to="#contact" class="group flex items-center gap-4 px-10 py-5 text-[#455846] button-label hover:opacity-70 transition-opacity">
              <span>{{ $t('hero.secondary') }}</span>
              <div class="w-12 h-[1px] bg-[#455846]/20 transition-all duration-500 group-hover:w-16"></div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
