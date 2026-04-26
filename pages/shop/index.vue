<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

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
  <div class="min-h-screen bg-surface-lowest pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="max-w-3xl space-y-4 mb-20 text-left">
        <span 
          class="eyebrow block" 
          v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
        >
          {{ $t('services.eyebrow') }}
        </span>
        <HeadingRenderPass 
          as="h1" 
          :text="$t('services.title')"
          class="text-on-surface"
          :delay="0.3"
        />
        <p 
          class="text-on-surface-variant"
          v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 0.8, y: 0, transition: { delay: 600, duration: 1000 } } }"
        >
          Grounded in Scandinavian tradition, our therapies are designed to reconnect you with your natural state of balance.
        </p>
      </div>

      <!-- Grid -->
      <div class="related-grid">
        <NuxtLink 
          v-for="(product, index) in services" 
          :key="product.id"
          :to="localePath(`/shop/${product.id}`)"
          class="product-card-editorial group"
          v-motion="{ 
            initial: { opacity: 0, y: 40 }, 
            visibleOnce: { opacity: 1, y: 0, transition: { delay: index * 150, duration: 1000 } } 
          }"
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
