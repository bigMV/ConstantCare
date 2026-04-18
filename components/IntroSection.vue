<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#faf9f6]" id="about">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="max-w-3xl space-y-12" v-motion-fade-visible>
        <div class="space-y-4">
          <span class="eyebrow block">{{ $t('intro.subtitle') }}</span>
          <h2 class="heading-xl text-[#1b1c1a]">
            {{ $t('intro.title') }}
          </h2>
        </div>
        <p class="body-lg text-[#444841] opacity-80">
          {{ $t('intro.description') }}
        </p>
      </div>
    </div>
  </section>
</template>
