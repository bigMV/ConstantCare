<script setup>
const { locale, setLocale } = useI18n()
const { triggerTransition } = usePageTransition()
const router = useRouter()

const toggleLocale = async () => {
  const next = locale.value === 'en' ? 'no' : 'en'
  const nextLabel = next === 'no' ? 'Norsk' : 'English'
  
  if (window.location.hash) {
    await router.replace({ hash: '' })
  }
  
  triggerTransition(() => setLocale(next), nextLabel)
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
