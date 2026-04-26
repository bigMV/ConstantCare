<script setup>
const { isTransitioning } = usePageTransition()
</script>

<template>
  <Transition
    enter-active-class="transition duration-500 ease-[cubic-bezier(0.85, 0, 0.15, 1)]"
    enter-from-class="translate-y-full"
    enter-to-class="translate-y-0"
    leave-active-class="transition duration-500 ease-[cubic-bezier(0.85, 0, 0.15, 1)]"
    leave-from-class="translate-y-0"
    leave-to-class="-translate-y-full"
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
        <div v-if="isTransitioning" class="relative w-24 h-24 md:w-32 md:h-32 flex flex-col items-center gap-6">
          <NuxtImg 
            src="/favicon.png" 
            alt="ConstantCare" 
            class="w-full h-full object-contain"
          />
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
