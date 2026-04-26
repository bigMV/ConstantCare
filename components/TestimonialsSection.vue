<script setup>
import { useScroll, useElementHover, useRafFn } from '@vueuse/core'
import { ref, computed } from 'vue'

const { tm, rt } = useI18n()
const testimonialItems = computed(() => tm('testimonials'))

const scrollContainer = ref(null)
const isHovered = useElementHover(scrollContainer)
const { x, isScrolling } = useScroll(scrollContainer)

// Drag-to-scroll logic
const isDragging = ref(false)
const isTouched = ref(false)
const startX = ref(0)
const scrollLeftStart = ref(0)

const onMouseDown = (e) => {
  isDragging.value = true
  startX.value = e.pageX - scrollContainer.value.offsetLeft
  scrollLeftStart.value = scrollContainer.value.scrollLeft
}

const onTouchStart = () => {
  isTouched.value = true
}

const onTouchEnd = () => {
  isTouched.value = false
}

const onMouseLeave = () => {
  isDragging.value = false
}

const onMouseUp = () => {
  isDragging.value = false
}

const onMouseMove = (e) => {
  if (!isDragging.value) return
  const xPos = e.pageX - scrollContainer.value.offsetLeft
  const walk = (xPos - startX.value) * 2 // Scroll speed multiplier
  scrollContainer.value.scrollLeft = scrollLeftStart.value - walk
}

// Auto-scroll logic
const speed = 0.5
const { pause, resume } = useRafFn(() => {
  if (!scrollContainer.value || isHovered.value || isScrolling.value || isDragging.value || isTouched.value) return
  
  scrollContainer.value.scrollLeft += speed
  
  const maxScroll = scrollContainer.value.scrollWidth / 2
  if (scrollContainer.value.scrollLeft >= maxScroll) {
    scrollContainer.value.scrollLeft = 0
  }
}, { immediate: true })

</script>

<template>
  <section class="py-16 md:py-32 bg-surface-lowest relative overflow-hidden" id="testimonials">
    <!-- Section Header -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
      <div class="max-w-3xl space-y-4 text-left">
        <span 
          class="eyebrow block"
          v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
        >
          {{ $t('nav.testimonials') }}
        </span>
        <HeadingRenderPass 
          as="h2" 
          text="What our community says"
          class="text-on-surface"
          :delay="0.3"
        />
      </div>
    </div>

    <!-- Marquee Container -->
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div 
        class="relative group"
        v-motion="{ initial: { opacity: 0, scale: 0.98 }, visibleOnce: { opacity: 1, scale: 1, transition: { delay: 600, duration: 1200 } } }"
      >
        <!-- Gradient Fades -->
        <div class="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-surface-lowest to-transparent z-20 pointer-events-none"></div>
        <div class="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-surface-lowest to-transparent z-20 pointer-events-none"></div>

        <!-- Scroll Container -->
        <div 
          ref="scrollContainer"
          class="flex overflow-x-auto no-scrollbar gap-8 py-8 touch-auto cursor-grab active:cursor-grabbing select-none"
          @mousedown="onMouseDown"
          @mouseleave="onMouseLeave"
          @mouseup="onMouseUp"
          @mousemove="onMouseMove"
          @touchstart="onTouchStart"
          @touchend="onTouchEnd"
        >
          <!-- Double the items for seamless looping -->
          <div 
            v-for="(item, index) in [...testimonialItems, ...testimonialItems]" 
            :key="index"
            class="shrink-0 w-75 md:w-112.5 bg-surface-low p-10 rounded-4xl flex flex-col justify-between transition-transform duration-500 hover:scale-[1.02] shadow-sm"
          >
            <div class="space-y-6">
              <span class="material-symbols-outlined text-3xl text-accent opacity-30">format_quote</span>
              <h3 class="text-on-surface leading-relaxed italic text-lg lg:text-xl">
                "{{ rt(item.quote) }}"
              </h3>
            </div>
            <p class="text-accent mt-8 font-medium">— {{ rt(item.author) }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
