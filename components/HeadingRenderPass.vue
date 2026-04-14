<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'
import { useTypographyState } from '~/composables/useTypographyState'

const props = defineProps({
  text: { type: String, required: false, default: '' },
  as: { type: String, default: 'h2' },
  delay: { type: Number, default: 0 },
  uid: { type: String, default: '' }
})

const { hasBeenRevealed, markAsRevealed } = useTypographyState()
const target = ref<HTMLElement | null>(null)
const uniqueKey = props.uid || props.text
const isAlreadySeen = uniqueKey ? hasBeenRevealed(uniqueKey) : false
const isRevealed = ref(isAlreadySeen)

onMounted(() => {
  if (!target.value) return
  if (isAlreadySeen || !uniqueKey) {
    isRevealed.value = true
    return
  }

  const { stop } = useIntersectionObserver(
    target, 
    (entries: IntersectionObserverEntry[]) => {
      if (entries?.[0]?.isIntersecting && !isRevealed.value) {
        isRevealed.value = true
        markAsRevealed(uniqueKey)
        stop()
      }
    }, 
    { threshold: 0.1 }
  )
})
</script>

<template>
  <component :is="as" ref="target" v-bind="$attrs" :class="[
    'transition-all duration-[1500ms] ease-out',
    isRevealed ? 'opacity-100 blur-0 translate-y-0' : 'opacity-0 blur-[20px] translate-y-4'
  ]" :style="{ transitionDelay: `${delay}s` }">
    <slot>{{ text }}</slot>
  </component>
</template>