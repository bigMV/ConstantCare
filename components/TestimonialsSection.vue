<script setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import { Quote as LucideQuote } from 'lucide-vue-next'

const { t, tm, rt } = useI18n()

// Fetch testimonials from translations
const testimonials = computed(() => {
  const items = tm('testimonials.items')
  return items.map(item => ({
    quote: rt(item.quote),
    author: rt(item.author),
    role: rt(item.role)
  }))
})



// Carousel configuration
const carouselSettings = {
  itemsToShow: 1,
  snapAlign: 'center',
  breakpoints: {
    768: {
      itemsToShow: 2,
      snapAlign: 'center',
    },
    1280: {
      itemsToShow: 3,
      snapAlign: 'center',
    },
  }
}
</script>

<template>
  <section id="reviews" class="py-32 bg-surface-low overflow-hidden">
    <div class="container-content">
      <div class="mb-10 md:mb-20">
        <div class="eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-label">
            {{ $t('nav.testimonials') }}
          </span>
        </div>
        <HeadingRenderPass 
          as="h2" 
          class="max-w-[40ch] text-3xl font-serif tracking-tight pr-8 mb-0"
          :text="$t('testimonials.subtitle')"
        />
      </div>

      <!-- Testimonials Carousel -->
      <div class="relative w-full">
        <ClientOnly>
          <Carousel v-bind="carouselSettings" :autoplay="6000" :wrap-around="true" :transition="1000" class="testimonials-carousel">
            <Slide v-for="(item, index) in testimonials" :key="index">
              <div class="carousel__item px-4 py-8 w-full h-full text-left">
                <div class="testimonial-card relative h-full p-10 bg-surface rounded-[2rem] flex flex-col justify-between group hover:shadow-2xl hover:translate-y-[-8px] transition-all duration-700 ease-out text-left opacity-30">
                  
                  <div class="absolute top-8 left-8 text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    <LucideQuote :size="60" class="rotate-180" />
                  </div>

                  <div class="relative z-10 pt-12 flex flex-col h-full justify-between gap-8">
                    <p class="text-base md:text-lg leading-relaxed italic text-on-surface font-medium">
                      "{{ item.quote }}"
                    </p>

                    <div class="mt-8 pt-8 border-t border-on-surface/5 flex flex-col gap-1">
                      <span class="font-bold text-on-surface tracking-wide">{{ item.author }}</span>
                      <span class="eyebrow-label opacity-40 text-[11px] uppercase tracking-[0.2em]">{{ item.role }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>

            <template #addons>
              <div class="flex flex-col items-center mt-8">
                <Pagination class="custom-pagination" />
              </div>
            </template>
          </Carousel>
        </ClientOnly>
      </div>
    </div>
  </section>
</template>

<style scoped>
.testimonials-carousel :deep(.carousel__track) {
  display: flex !important;
  align-items: stretch !important;
}

.testimonials-carousel :deep(.carousel__slide) {
  display: flex;
  height: auto !important;
  padding: 20px 0;
}

/* Active Slide Elevation Effect */
.testimonials-carousel :deep(.carousel__slide--active) .testimonial-card {
  transform: translateY(-8px);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  opacity: 1 !important;
}

/* Custom Pagination Styling */
.testimonials-carousel :deep(.carousel__pagination) {
  padding: 0;
  margin: 0;
  gap: 12px;
}

.testimonials-carousel :deep(.carousel__pagination-button) {
  width: 8px;
  height: 8px;
  border-radius: 99px;
  background-color: var(--color-on-surface);
  opacity: 0.1;
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.testimonials-carousel :deep(.carousel__pagination-button--active) {
  opacity: 0.8;
  width: 24px;
  background-color: var(--color-primary);
}
</style>
