<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="pt-32 pb-16 md:py-32 bg-surface-lowest" id="about">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="max-w-3xl space-y-4 md:space-y-12">
        <div class="space-y-4">
          <span 
            class="eyebrow block"
            v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
          >
            {{ $t('intro.subtitle') }}
          </span>
          <HeadingRenderPass 
            as="h2" 
            :text="$t('intro.title')"
            class="text-on-surface"
            :delay="0.3"
          />
        </div>
        <p 
          class="text-on-surface-variant opacity-80"
          v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 0.8, y: 0, transition: { delay: 600, duration: 1000 } } }"
        >
          {{ $t('intro.description') }}
        </p>
      </div>
    </div>
  </section>
</template>
