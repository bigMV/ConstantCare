<script setup>
const { locale, setLocale } = useI18n()

const toggleLocale = () => {
  const next = locale.value === 'en' ? 'no' : 'en'
  // Clear hash to prevent browser auto-scroll on locale change
  if (window.location.hash) {
    window.history.replaceState(null, '', window.location.pathname)
  }
  setLocale(next)
}
</script>

<template>
  <button 
    type="button"
    @click.stop="toggleLocale" 
    class="font-sans text-xs uppercase tracking-widest px-3 py-2 rounded-md border border-[#c4c8bf]/30 hover:bg-[#f4f3f0] transition-colors duration-300 cursor-pointer"
    :class="[ $attrs.class ]"
  >
    {{ locale === 'en' ? 'NO' : 'EN' }}
  </button>
</template>
