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
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-20 text-left max-w-3xl">
        <span class="eyebrow mb-4 block" v-motion-fade>{{ $t('services.eyebrow') }}</span>
        <h1 class="heading-xl text-[#1b1c1a] mb-6" v-motion-slide-visible-bottom>{{ $t('services.title') }}</h1>
        <p class="body-lg text-[#444841]" v-motion-fade>
          Grounded in Scandinavian tradition, our therapies are designed to reconnect you with your natural state of balance.
        </p>
      </div>

      <!-- Grid -->
      <div class="related-grid">
        <NuxtLink 
          v-for="(product, index) in services" 
          :key="product.id"
          :to="`/shop/${product.id}`"
          class="product-card-editorial group"
          v-motion
          :initial="{ opacity: 0, y: 40 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 150 } }"
        >
          <div class="image-container">
            <NuxtImg :src="product.image" class="w-full h-full object-cover" />
            <!-- Immersive Overlay -->
            <div class="overlay">
              <div class="space-y-1">
                <h3 class="title">{{ product.title }}</h3>
                <div class="price">{{ product.price }}</div>
              </div>
              <div class="view-action">
                View
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
