<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#faf9f6]" id="about">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 items-center">
        <div class="order-2 md:order-1 relative rounded-xl overflow-hidden aspect-square md:aspect-[4/5] bg-[#f4f3f0] shadow-[0_12px_32px_rgba(27,28,26,0.04)]">
          <NuxtImg src="/images/studio_interior.png" alt="Studio Interior" class="w-full h-full object-cover" />
        </div>
        <div class="order-1 md:order-2 space-y-8">
          <span class="font-sans text-xs uppercase tracking-widest text-[#455846]">{{ $t('intro.eyebrow') }}</span>
          <h2 class="font-sans text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-[#1b1c1a] leading-[1.2]">
            {{ $t('intro.title') }}
          </h2>
          <div class="space-y-6 font-sans text-base text-[#444841] leading-relaxed">
            <p>
              {{ $t('intro.text1') }}
            </p>
            <p>
              {{ $t('intro.text2') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
