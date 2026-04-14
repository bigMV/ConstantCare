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
      <div class="flex flex-col">
        <div class="eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-label">
            {{ $t('nav.faq') }}
          </span>
        </div>
        <HeadingRenderPass 
          as="h2" 
          class="mb-8 font-serif italic"
          :text="$t('faq.title')"
          :delay="0.1"
        />
        <p class="text-base text-on-surface/60 max-w-[30ch]">
          {{ $t('faq.subtitle') }}
        </p>

        <!-- Desktop Card -->
        <div
          class="hidden lg:flex mt-auto p-12 lg:p-16 rounded-[3rem] bg-surface-low border border-on-surface/5 flex-col gap-8 group hover:bg-surface-high transition-colors duration-700 cursor-pointer"
          @click="$router.push('/#contact')">
          <LucideSparkles :size="48" class="text-primary group-hover:scale-110 transition-transform duration-500" />
          <HeadingRenderPass 
            as="h3" 
            class="leading-snug"
            :text="$t('faq.not_found_title')"
            uid="faq-cta-desktop"
            :delay="0.3"
          />
          <a href="#contact" class="btn btn-primary !self-start">
            {{ $t('faq.ask_question') }}
          </a>
        </div>
      </div>

      <!-- FAQ Items -->
      <div class="flex flex-col gap-4">
        <div v-for="(item, index) in faqs" :key="index"
          class="group rounded-3xl transition-all duration-700 overflow-hidden cursor-pointer"
          :class="activeIndex === index ? 'bg-surface-low' : 'bg-transparent hover:bg-surface-low/50'"
          @click="toggle(index)">
          <button
            class="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 group-hover:pl-12 transition-all duration-700 cursor-pointer">
            <span class="text-xl font-serif tracking-tight pr-8">
              {{ rt(item.q) }}
            </span>
            <div class="w-14 h-14 rounded-full  flex items-center justify-center transition-all duration-500"
              :class="activeIndex === index ? 'rotate-45  text-primary ' : 'rotate-0 text-on-surface/50 group-hover:text-primary'">
              <LucidePlus :size="24" />
            </div>
          </button>

          <div class="transition-all duration-700 ease-in-out px-8 md:px-12 overflow-hidden"
            :class="activeIndex === index ? 'max-h-[500px] pb-10 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'">
            <p class="text-base text-on-surface/60 max-w-[60ch] mb-0 leading-relaxed">
              {{ rt(item.a) }}
            </p>
          </div>
        </div>

        <!-- Mobile Card -->
        <div
          class="flex lg:hidden mt-8 p-10 rounded-[2.5rem] bg-surface-low border border-on-surface/5 flex-col gap-6 group hover:bg-surface-high transition-colors duration-700 cursor-pointer"
          @click="$router.push('/#contact')">
          <LucideSparkles :size="40" class="text-primary" />
          <HeadingRenderPass 
            as="h3" 
            class="text-2xl leading-snug"
            :text="$t('faq.not_found_title')"
            uid="faq-cta-mobile"
          />
          <a href="#contact" class="btn btn-primary !self-start text-sm">
            {{ $t('faq.ask_question') }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
