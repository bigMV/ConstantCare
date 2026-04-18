<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#f4f3f0]" id="services">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="text-center max-w-2xl mx-auto mb-20">
        <span class="font-sans text-xs uppercase tracking-widest text-[#455846] mb-4 block">{{ $t('services.eyebrow') }}</span>
        <h2 class="font-sans text-3xl md:text-4xl font-light tracking-tight text-[#1b1c1a]">{{ $t('services.title') }}</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- 30 Min -->
        <NuxtLink to="/shop/30-min-massage" class="bg-[#ffffff] p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm cursor-pointer block">
          <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-6xl text-[#455846]">schedule</span>
          </div>
          <div class="relative z-10">
            <h3 class="font-sans text-2xl font-medium text-[#1b1c1a] mb-2">{{ $t('services.m30.title') }}</h3>
            <div class="font-sans text-sm tracking-wider text-[#455846] mb-6">{{ $t('services.m30.price') }}</div>
            <p class="font-sans text-sm text-[#444841] leading-relaxed mb-8">
              {{ $t('services.m30.description_short') }}
            </p>
            <div class="inline-flex items-center text-[#455846] font-sans text-xs uppercase tracking-widest group-hover:text-[#5d705d] transition-colors">
              {{ $t('services.select') }} <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </div>
          </div>
        </NuxtLink>
        <!-- 40 Min -->
        <NuxtLink to="/shop/40-min-massage" class="bg-[#ffffff] p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm cursor-pointer block">
          <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-6xl text-[#455846]">schedule</span>
          </div>
          <div class="relative z-10">
            <h3 class="font-sans text-2xl font-medium text-[#1b1c1a] mb-2">{{ $t('services.m40.title') }}</h3>
            <div class="font-sans text-sm tracking-wider text-[#455846] mb-6">{{ $t('services.m40.price') }}</div>
            <p class="font-sans text-sm text-[#444841] leading-relaxed mb-8">
              {{ $t('services.m40.description_short') }}
            </p>
            <div class="inline-flex items-center text-[#455846] font-sans text-xs uppercase tracking-widest group-hover:text-[#5d705d] transition-colors">
              {{ $t('services.select') }} <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </div>
          </div>
        </NuxtLink>
        <!-- 50 Min -->
        <NuxtLink to="/shop/50-min-massage" class="bg-[#ffffff] p-10 rounded-xl transition-transform duration-500 hover:-translate-y-2 relative group overflow-hidden shadow-sm cursor-pointer block">
          <div class="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
            <span class="material-symbols-outlined text-6xl text-[#455846]">schedule</span>
          </div>
          <div class="relative z-10">
            <h3 class="font-sans text-2xl font-medium text-[#1b1c1a] mb-2">{{ $t('services.m50.title') }}</h3>
            <div class="font-sans text-sm tracking-wider text-[#455846] mb-6">{{ $t('services.m50.price') }}</div>
            <p class="font-sans text-sm text-[#444841] leading-relaxed mb-8">
              {{ $t('services.m50.description_short') }}
            </p>
            <div class="inline-flex items-center text-[#455846] font-sans text-xs uppercase tracking-widest group-hover:text-[#5d705d] transition-colors">
              {{ $t('services.select') }} <span class="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
