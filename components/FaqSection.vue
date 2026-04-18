<script setup>
import { computed, ref } from 'vue'
const { t, tm, rt } = useI18n()
const faqs = computed(() => tm('faq.items'))

const activeIndex = ref(null)
const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>

<template>
  <section id="faq" class="section-padding bg-surface">
    <div class="container-content grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32">
      <!-- Intro -->
      <div class="flex flex-col">
        <div class="eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-label">
            {{ $t('nav.faq') }}
          </span>
        </div>
        <h2 class="text-3xl md:text-4xl font-light tracking-tight text-[#1b1c1a] mb-8 font-sans">
          {{ $t('faq.title') }}
        </h2>
        <p class="text-base text-on-surface/60 max-w-[30ch]">
          {{ $t('faq.subtitle') }}
        </p>


      </div>

      <!-- FAQ Items -->
      <div class="flex flex-col gap-4">
        <div v-for="(item, index) in faqs" :key="index"
          class="group rounded-3xl transition-all duration-700 overflow-hidden cursor-pointer"
          :class="activeIndex === index ? 'bg-surface-low' : 'bg-transparent hover:bg-surface-low/50'"
          @click="toggle(index)">
          <button
            class="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 group-hover:pl-12 transition-all duration-700 cursor-pointer">
            <span class="text-xl font-sans tracking-tight pr-8 text-[#1b1c1a]">
              {{ rt(item.q) }}
            </span>
            <div class="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500"
              :class="activeIndex === index ? 'rotate-45 text-[#455846]' : 'rotate-0 text-[#1b1c1a]/50 group-hover:text-[#455846]'">
              <span class="material-symbols-outlined text-2xl">add</span>
            </div>
          </button>

          <div class="transition-all duration-700 ease-in-out px-8 md:px-12 overflow-hidden"
            :class="activeIndex === index ? 'max-h-[500px] pb-10 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'">
            <p class="text-base text-on-surface/60 max-w-[60ch] mb-0 leading-relaxed">
              {{ rt(item.a) }}
            </p>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>
