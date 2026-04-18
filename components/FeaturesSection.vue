<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#faf9f6]">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-full bg-[#d5e5ca] flex items-center justify-center text-[#596751]">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">eco</span>
          </div>
          <h4 class="font-sans text-lg font-medium text-[#1b1c1a]">{{ $t('benefits.eco.title') }}</h4>
          <p class="font-sans text-sm text-[#444841] leading-relaxed">{{ $t('benefits.eco.text') }}</p>
        </div>
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-full bg-[#d5e5ca] flex items-center justify-center text-[#596751]">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">waves</span>
          </div>
          <h4 class="font-sans text-lg font-medium text-[#1b1c1a]">{{ $t('benefits.waves.title') }}</h4>
          <p class="font-sans text-sm text-[#444841] leading-relaxed">{{ $t('benefits.waves.text') }}</p>
        </div>
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-full bg-[#d5e5ca] flex items-center justify-center text-[#596751]">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">nature_people</span>
          </div>
          <h4 class="font-sans text-lg font-medium text-[#1b1c1a]">{{ $t('benefits.nature.title') }}</h4>
          <p class="font-sans text-sm text-[#444841] leading-relaxed">{{ $t('benefits.nature.text') }}</p>
        </div>
        <div class="space-y-4">
          <div class="w-12 h-12 rounded-full bg-[#d5e5ca] flex items-center justify-center text-[#596751]">
            <span class="material-symbols-outlined" style="font-variation-settings: 'FILL' 1;">chair</span>
          </div>
          <h4 class="font-sans text-lg font-medium text-[#1b1c1a]">{{ $t('benefits.chair.title') }}</h4>
          <p class="font-sans text-sm text-[#444841] leading-relaxed">{{ $t('benefits.chair.text') }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
