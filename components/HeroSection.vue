<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="min-h-screen relative flex items-center pt-20 overflow-hidden bg-surface-lowest" id="home">
    <div class="absolute inset-0 z-0">
      <NuxtImg src="/images/hero_background.png" alt="Hero Background"
        class="w-full h-full object-cover object-center opacity-40 mix-blend-multiply" />
      <div class="absolute inset-0 bg-surface-lowest/30"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 lg:px-12 w-full relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-12">
          <div class="space-y-4">
            <span 
              class="eyebrow block"
              v-motion="{ initial: { opacity: 0, x: -20 }, enter: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
            >
              {{ $t('hero.subtitle') }}
            </span>
            <HeadingRenderPass 
              as="h1" 
              :text="$t('hero.title')"
              class="max-w-xl text-on-surface"
              :delay="0.3"
            />
          </div>

          <div class="flex flex-col sm:flex-row gap-6">
            <div v-motion="{ initial: { opacity: 0, y: 20 }, enter: { opacity: 1, y: 0, transition: { delay: 900, duration: 1000 } } }">
              <NuxtLink :to="localePath('/shop')"
                class="group relative overflow-hidden px-10 py-5 rounded-2xl transition-all duration-500 transform hover:scale-[1.02] active:scale-[0.98] block">
                <div class="absolute inset-0 bg-linear-to-br from-accent to-accent-dim"></div>
                <div class="relative flex items-center gap-3 text-white">
                  <span>{{ $t('hero.cta') }}</span>
                  <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </div>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
