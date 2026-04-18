<script setup>
const { t, tm, rt } = useI18n()

useHead({
  title: t('nav.services') + ' | ConstantCare Shop',
  meta: [
    { name: 'description', content: 'Explore our curated therapeutic massages and wellness experiences in Oslo.' }
  ]
})

const services = computed(() => [
  {
    id: '30-min-massage',
    title: t('services.m30.title'),
    price: t('services.m30.price'),
    description: t('services.m30.description_short'),
    image: '/images/shop/product_30min.png'
  },
  {
    id: '40-min-massage',
    title: t('services.m40.title'),
    price: t('services.m40.price'),
    description: t('services.m40.description_short'),
    image: '/images/shop/product_40min.png'
  },
  {
    id: '50-min-massage',
    title: t('services.m50.title'),
    price: t('services.m50.price'),
    description: t('services.m50.description_short'),
    image: '/images/shop/product_50min.png'
  }
])
</script>

<template>
  <div class="min-h-screen bg-[#faf9f6] pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Header -->
      <div class="mb-20 text-center max-w-3xl mx-auto">
        <span class="font-sans text-xs uppercase tracking-[0.3em] text-[#455846] mb-4 block" v-motion-fade>{{ $t('services.eyebrow') }}</span>
        <h1 class="font-sans text-4xl md:text-5xl font-light tracking-tight text-[#1b1c1a] mb-6" v-motion-slide-visible-bottom>{{ $t('services.title') }}</h1>
        <p class="font-sans text-lg text-[#444841] leading-relaxed" v-motion-fade>
          Grounded in Scandinavian tradition, our therapies are designed to reconnect you with your natural state of balance.
        </p>
      </div>

      <!-- Grid -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
        <NuxtLink 
          v-for="(product, index) in services" 
          :key="product.id"
          :to="`/shop/${product.id}`"
          class="group block cursor-pointer"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
        >
          <div class="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-[0_20px_40px_rgba(0,0,0,0.03)] transition-transform duration-700 group-hover:scale-[1.02]">
            <NuxtImg :src="product.image" class="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-700"></div>
          </div>
          <div class="space-y-2">
            <h3 class="font-sans text-xl font-medium text-[#1b1c1a] group-hover:text-[#455846] transition-colors">{{ product.title }}</h3>
            <p class="font-sans text-sm text-[#444841] line-clamp-2 leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{{ product.description }}</p>
            <div class="pt-2 font-sans text-base tracking-wide text-[#455846] font-semibold">{{ product.price }}</div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
