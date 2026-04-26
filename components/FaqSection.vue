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
  <section id="faq" class="py-32 bg-surface">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <!-- Left: Header Content -->
        <div class="space-y-6 lg:sticky lg:top-32">
          <div class="space-y-4">
            <span 
              class="eyebrow block"
              v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
            >
              {{ $t('nav.faq') }}
            </span>
            <HeadingRenderPass 
              as="h2" 
              :text="$t('faq.title')"
              class="text-on-surface"
              :delay="0.3"
            />
          </div>
          <p 
            class="text-on-surface-variant max-w-[35ch] leading-relaxed"
            v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 0.8, y: 0, transition: { delay: 600, duration: 1000 } } }"
          >
            Find answers to common questions about our therapeutic approach, booking process, and what to expect during your journey toward natural balance.
          </p>
        </div>

        <!-- Right: FAQ Items -->
        <div class="flex flex-col gap-4">
          <div v-for="(item, index) in faqs" :key="index"
            class="group rounded-3xl transition-all duration-700 overflow-hidden cursor-pointer"
            :class="activeIndex === index ? 'bg-surface-low' : 'bg-transparent hover:bg-surface-low/50'"
            @click="toggle(index)"
            v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 400 + (index * 100), duration: 1000 } } }"
          >
            <button
              class="w-full text-left p-8 md:p-10 flex items-center justify-between gap-8 group-hover:pl-12 transition-all duration-700 cursor-pointer">
              <span class="pr-8 text-on-surface">
                {{ rt(item.q) }}
              </span>
              <div class="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500"
                :class="activeIndex === index ? 'rotate-45 text-accent' : 'rotate-0 text-on-surface/50 group-hover:text-accent'">
                <span class="material-symbols-outlined text-2xl">add</span>
              </div>
            </button>

            <div class="transition-all duration-700 ease-in-out px-8 md:px-12 overflow-hidden"
              :class="activeIndex === index ? 'max-h-125 pb-10 opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-4'">
              <p class="text-on-surface-variant max-w-[60ch] mb-0 leading-relaxed">
                {{ rt(item.a) }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
