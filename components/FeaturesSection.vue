<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-surface-lowest">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="space-y-4 text-left mb-20">
        <span 
          class="eyebrow block"
          v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
        >
          {{ $t('benefits.eyebrow') }}
        </span>
        <HeadingRenderPass 
          as="h2" 
          :text="$t('benefits.title')"
          class="text-on-surface"
          :delay="0.3"
        />
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div 
          v-for="(feature, index) in ['eco', 'waves', 'nature', 'chair']"
          :key="feature"
          class="space-y-4"
          v-motion="{ 
            initial: { opacity: 0, y: 30 }, 
            visibleOnce: { opacity: 1, y: 0, transition: { delay: index * 150, duration: 1000 } }
          }"
        >
          <div class="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <span class="material-symbols-outlined material-filled">{{ feature === 'nature' ? 'nature_people' : feature }}</span>
          </div>
          <h4 class="font-sans font-medium text-on-surface">{{ $t(`benefits.${feature}.title`) }}</h4>
          <p class="font-sans text-on-surface-variant leading-relaxed">{{ $t(`benefits.${feature}.text`) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
