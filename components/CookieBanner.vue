<script setup>
import { ref, onMounted } from 'vue'

const isVisible = ref(false)
const hasAccepted = ref(false)

onMounted(() => {
  const consent = localStorage.getItem('cookie-consent')
  if (!consent) {
    // Show banner after a short delay
    setTimeout(() => {
      isVisible.value = true
    }, 2000)
  } else {
    hasAccepted.value = true
  }
})

const acceptCookies = () => {
  localStorage.setItem('cookie-consent', 'accepted')
  isVisible.value = false
  hasAccepted.value = true
}


</script>

<template>
  <Transition
    enter-active-class="transition duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
    enter-from-class="translate-y-20 opacity-0 scale-95"
    enter-to-class="translate-y-0 opacity-100 scale-100"
    leave-active-class="transition duration-500 ease-in"
    leave-from-class="translate-y-0 opacity-100 scale-100"
    leave-to-class="translate-y-20 opacity-0 scale-95"
  >
    <div 
      v-if="isVisible" 
      class="fixed bottom-6 left-6 right-6 md:left-auto md:right-10 z-[1000] max-w-[440px] md:max-w-[400px] mx-auto md:mx-0"
    >
      <div class="bg-surface/80 backdrop-blur-2xl border border-on-surface/5 p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col gap-6">
        <div class="space-y-3">
          <h3 class="text-lg font-serif text-on-surface leading-tight">Consent & Care</h3>
          <p class="text-sm text-on-surface-variant leading-relaxed opacity-80">
            We use essential cookies to ensure your experience at ConstantCare is seamless and tailored. By continuing, you agree to our <NuxtLink :to="useLocalePath()('/privacy-policy')" class="underline hover:text-accent transition-colors">Privacy Policy</NuxtLink>.
          </p>
        </div>
        
        <div class="flex flex-col sm:flex-row gap-3 pt-2">
          <button 
            @click="acceptCookies"
            class="flex-1 bg-accent text-white px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-accent-dim transition-all duration-300 transform active:scale-95"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  </Transition>
</template>
