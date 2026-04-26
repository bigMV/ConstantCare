<script setup>
const { isTransitioning, targetLanguage } = usePageTransition()
</script>

<template>
  <Transition
    enter-active-class="transition-all duration-[600ms] ease-linear"
    enter-from-class="translate-y-full rounded-t-[100%]"
    enter-to-class="translate-y-0 rounded-t-0"
    leave-active-class="transition-all duration-[600ms] ease-linear"
    leave-from-class="translate-y-0 rounded-b-0"
    leave-to-class="-translate-y-full rounded-b-[100%]"
  >
    <div 
      v-if="isTransitioning" 
      class="fixed inset-0 z-[9999] bg-[#faf9f6] flex items-center justify-center overflow-hidden"
    >
      <Transition
        appear
        enter-active-class="transition duration-700 delay-200 ease-out"
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <div v-if="isTransitioning" class="relative flex flex-col items-center gap-8">
          <div class="w-24 h-24 md:w-32 md:h-32">
            <NuxtImg 
              src="/favicon.png" 
              alt="ConstantCare" 
              class="w-full h-full object-contain"
            />
          </div>
          
          <div 
            v-if="targetLanguage"
            class="font-sans text-xs uppercase tracking-[0.4em] text-on-surface opacity-60"
            v-motion="{ initial: { opacity: 0, y: 10 }, enter: { opacity: 0.6, y: 0, transition: { delay: 400 } } }"
          >
            {{ targetLanguage }}
          </div>
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.fixed {
  height: 100vh;
  width: 100vw;
}
</style>
