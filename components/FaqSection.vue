<script setup>
import { Sparkles as LucideSparkles, Plus as LucidePlus } from 'lucide-vue-next'
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
      <div>
        <div class="flex items-center gap-4 mb-6">
          <div class="w-12 h-[1px] bg-primary opacity-50 shadow-[0_0_10px_rgba(76,100,85,0.4)]"></div>
          <span class="label-md text-primary tracking-[0.3em] font-black uppercase">
            {{ $t('nav.faq') }}
          </span>
        </div>
        <h2 v-reveal="{ delay: 100 }" class="mb-8 font-serif italic fluid-h2 max-w-[15ch]">
          {{ $t('faq.title') }}
        </h2>
        <p class="fluid-p text-on-surface/60 max-w-[30ch]">
          {{ $t('faq.subtitle') }}
        </p>

        <div
          class="mt-16 md:mt-24 p-12 lg:p-16 rounded-[3rem] bg-surface-low border border-on-surface/5 flex flex-col gap-8 group hover:bg-surface-high transition-colors duration-700">
          <LucideSparkles :size="48" class="text-primary group-hover:scale-110 transition-transform duration-500" />
          <h3 v-reveal="{ delay: 300 }" class="fluid-h3 leading-snug">
            Can’t find what you’re looking for?
          </h3>
          <a href="#contact" class="btn btn-primary !self-start">
            Ask a Question
          </a>
        </div>
      </div>

      <!-- FAQ Items -->
      <div class="flex flex-col gap-4">
        <div v-for="(item, index) in faqs" :key="index"
          class="group rounded-3xl transition-all duration-700 overflow-hidden"
          :class="activeIndex === index ? 'bg-surface-low' : 'bg-transparent hover:bg-surface-low/50'">
          <button @click="toggle(index)"
            class="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 group-hover:pl-12 transition-all duration-700">
            <span class="fluid-h3 font-serif tracking-tight pr-8">
              {{ rt(item.q) }}
            </span>
            <div class="w-14 h-14 rounded-full  flex items-center justify-center transition-all duration-500"
              :class="activeIndex === index ? 'rotate-45  text-primary ' : 'rotate-0 text-on-surface/50 group-hover:text-primary'">
              <LucidePlus :size="24" />
            </div>
          </button>

          <div class="transition-all duration-700 ease-in-out px-8 md:px-12 overflow-hidden"
            :class="activeIndex === index ? 'max-h-[500px] pb-10 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'">
            <p
              class="fluid-p text-on-surface/60 max-w-[60ch] mb-0 leading-relaxed border-l-2 border-primary/20 pl-6 p-4">
              {{ rt(item.a) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
