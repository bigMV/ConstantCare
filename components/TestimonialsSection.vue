<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#f4f3f0] relative overflow-hidden">
    <div class="max-w-4xl mx-auto px-6 md:px-12 relative z-10 text-center">
      <span class="material-symbols-outlined text-4xl text-[#c4c8bf] mb-8 block">format_quote</span>
      <h3 class="font-sans text-2xl md:text-3xl font-light text-[#1b1c1a] leading-relaxed mb-8">
        "{{ $t('testimonials.quote') }}"
      </h3>
      <p class="font-sans text-sm uppercase tracking-widest text-[#455846]">— {{ $t('testimonials.author') }}</p>
    </div>
  </section>
</template>
