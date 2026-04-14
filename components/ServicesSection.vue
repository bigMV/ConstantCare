<script setup>
import { ArrowRight as LucideArrowRight } from 'lucide-vue-next'
const { t } = useI18n()
const services = computed(() => [
  {
    key: 'residential',
    title: t('services.residential.title'),
    text: t('services.residential.text'),
    image: '/images/residential.png'
  },
  {
    key: 'commercial',
    title: t('services.commercial.title'),
    text: t('services.commercial.text'),
    image: '/images/commercial.png'
  },
  {
    key: 'deep',
    title: t('services.deep.title'),
    text: t('services.deep.text'),
    image: '/images/deep.png'
  }
])
</script>

<template>
  <section id="services" class="section-padding bg-surface-low overflow-hidden">
    <div class="container-content">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-24 md:mb-32">
        <div class="max-w-[60ch] w-full mb-8 md:mb-0">
          <div class="flex items-center gap-2 mb-6">
            <div class="eyebrow-line"></div>
            <span class="eyebrow-label">
              {{ $t('nav.services') }}
            </span>
          </div>
          <HeadingRenderPass as="h2" class="text-3xl font-serif tracking-tight pr-8 mb-0" :text="$t('services.title')" />
        </div>
        <div class="hidden md:block w-32 h-px bg-on-surface/20"></div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 md:gap-16">
        <div v-for="(service, index) in services" :key="service.key"
          class="flex flex-col bg-surface-lowest rounded-[2rem] overflow-hidden group shadow-[0_20px_50px_rgba(42,52,52,0.02)] lg:hover:shadow-[0_40px_80px_rgba(42,52,52,0.06)] transition-all duration-700 lg:hover:-translate-y-4">
          <!-- Image -->
          <div class="aspect-[16/10] overflow-hidden relative">
            <NuxtPicture :src="service.image" :alt="service.title" format="avif,webp" class="w-full h-full" :img-attrs="{
              class: 'w-full h-full object-cover transition-transform duration-1000 lg:group-hover:scale-110'
            }" />
            <div class="absolute inset-0 bg-primary/0 lg:group-hover:bg-primary/5 transition-colors duration-500"></div>
          </div>

          <!-- Content -->
          <div class="p-10 md:p-12 flex flex-col justify-between flex-1">
            <div>
              <span
                class="eyebrow-label mb-6 inline-block font-black tracking-[0.2em] opacity-40 lg:group-hover:opacity-100 lg:group-hover:text-primary transition-all duration-500">
                0{{ index + 1 }}
              </span>
              <HeadingRenderPass
                as="h3"
                class="text-2xl font-serif tracking-tight pr-8 mb-6 transition-all duration-500 lg:group-hover:pl-4 border-l-0 lg:group-hover:border-l-4 lg:group-hover:border-primary break-words [hyphens:auto]"
                :text="service.title"
                :uid="`service-${service.key}`"
              />
              <p class="text-base text-on-surface/60 max-w-[45ch]">
                {{ service.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
