<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>

<template>
  <section class="py-16 md:py-32 bg-surface-lowest" id="services">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="max-w-3xl space-y-4 mb-20 text-left">
        <span 
          class="eyebrow block"
          v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
        >
          {{ $t('services.eyebrow') }}
        </span>
        <HeadingRenderPass 
          as="h2" 
          :text="$t('services.title')"
          class="text-on-surface"
          :delay="0.3"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 30 Min -->
        <div v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 400, duration: 1000 } } }">
          <div class="bg-surface-container p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm h-full flex flex-col">

            <div class="relative z-10 flex-grow">
              <h3 class="text-on-surface mb-2">{{ $t('services.m30.title') }}</h3>
              <div class="text-sm! text-accent mb-6">{{ $t('services.m30.price') }}</div>
              <p class="text-on-surface-variant mb-8">
                {{ $t('services.m30.description_short') }}
              </p>
            </div>
            <div class="relative z-10 mt-auto pt-6 flex flex-wrap gap-4 items-center border-t border-on-surface/5">
              <a 
                href="https://betal.vipps.no/fxi9fh" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors"
              >
                {{ $t('services.book_now') }}
              </a>
              <NuxtLink 
                :to="localePath('/shop/30-min-massage')" 
                class="text-sm font-medium text-on-surface/60 hover:text-accent transition-colors"
              >
                {{ $t('services.see_more') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- 40 Min -->
        <div v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 600, duration: 1000 } } }">
          <div class="bg-surface-container p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm h-full flex flex-col">

            <div class="relative z-10 flex-grow">
              <h3 class="text-on-surface mb-2">{{ $t('services.m40.title') }}</h3>
              <div class="text-sm! text-accent mb-6">{{ $t('services.m40.price') }}</div>
              <p class="text-on-surface-variant mb-8">
                {{ $t('services.m40.description_short') }}
              </p>
            </div>
            <div class="relative z-10 mt-auto pt-6 flex flex-wrap gap-4 items-center border-t border-on-surface/5">
              <a 
                href="https://betal.vipps.no/hih29f" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors"
              >
                {{ $t('services.book_now') }}
              </a>
              <NuxtLink 
                :to="localePath('/shop/40-min-massage')" 
                class="text-sm font-medium text-on-surface/60 hover:text-accent transition-colors"
              >
                {{ $t('services.see_more') }}
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- 50 Min -->
        <div v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 800, duration: 1000 } } }">
          <div class="bg-surface-container p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm h-full flex flex-col">

            <div class="relative z-10 flex-grow">
              <h3 class="text-on-surface mb-2">{{ $t('services.m50.title') }}</h3>
              <div class="text-sm! text-accent mb-6">{{ $t('services.m50.price') }}</div>
              <p class="text-on-surface-variant mb-8">
                {{ $t('services.m50.description_short') }}
              </p>
            </div>
            <div class="relative z-10 mt-auto pt-6 flex flex-wrap gap-4 items-center border-t border-on-surface/5">
              <a 
                href="https://betal.vipps.no/nlna1k" 
                target="_blank" 
                rel="noopener noreferrer"
                class="px-5 py-2 rounded-lg bg-accent text-white text-sm font-medium hover:bg-accent-dim transition-colors"
              >
                {{ $t('services.book_now') }}
              </a>
              <NuxtLink 
                :to="localePath('/shop/50-min-massage')" 
                class="text-sm font-medium text-on-surface/60 hover:text-accent transition-colors"
              >
                {{ $t('services.see_more') }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
