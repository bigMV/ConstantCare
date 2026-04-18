<script setup>
const route = useRoute()
const { t, locale } = useI18n()

// Map slugs to product data
const products = {
  '30-min-massage': {
    id: 'm30',
    slug: '30-min-massage',
    title: t('services.m30.title'),
    price: t('services.m30.price'),
    short: t('services.m30.description_short'),
    long: t('services.m30.description_long'),
    image: '/images/shop/product_30min.png'
  },
  '40-min-massage': {
    id: 'm40',
    slug: '40-min-massage',
    title: t('services.m40.title'),
    price: t('services.m40.price'),
    short: t('services.m40.description_short'),
    long: t('services.m40.description_long'),
    image: '/images/shop/product_40min.png'
  },
  '50-min-massage': {
    id: 'm50',
    slug: '50-min-massage',
    title: t('services.m50.title'),
    price: t('services.m50.price'),
    short: t('services.m50.description_short'),
    long: t('services.m50.description_long'),
    image: '/images/shop/product_50min.png'
  }
}

const product = computed(() => products[route.params.slug])

const relatedProducts = computed(() => {
  return Object.values(products).filter(p => p.slug !== route.params.slug)
})

if (!product.value) {
  throw createError({ statusCode: 404, statusMessage: 'Product not found' })
}

useHead({
  title: `${product.value.title} | ConstantCare Shop`,
  meta: [
    { name: 'description', content: product.value.short }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-[#faf9f6] pt-32 selection:bg-[#455846]/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-32 items-start">
        <!-- Image Gallery - Asymmetric Placement -->
        <div class="md:col-span-6 lg:col-span-7 relative group" v-motion-fade>
          <div class="relative rounded-[2rem] overflow-hidden aspect-[4/5] bg-[#f4f3f0] transition-transform duration-1000 group-hover:scale-[1.01]">
            <NuxtImg :src="product.image" class="w-full h-full object-cover" />
            <!-- Soft Gradient Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-[#1b1c1a]/5 to-transparent"></div>
          </div>
          <!-- Decorative Tonal Block (Tactile Layering) -->
          <div class="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-[#f4f3f0] rounded-full blur-3xl opacity-50"></div>
        </div>

        <!-- Product Info - Editorial Style -->
        <div class="md:col-span-6 lg:col-span-5 space-y-12" v-motion-slide-visible-right>
          <div class="space-y-6">
            <span class="eyebrow">Therapeutic Experience</span>
            <h1 class="display-2xl text-[#1b1c1a]">
              {{ product.title }}
            </h1>
            <div class="heading-md text-[#455846]">{{ product.price }}</div>
          </div>

          <!-- Tonal Container for Description -->
          <div class="bg-[#f4f3f0] p-10 rounded-[2rem] space-y-8">
            <div class="space-y-4">
              <h2 class="button-label text-[#455846]">The Journey</h2>
              <p class="body-lg text-[#444841] opacity-90">
                {{ product.long }}
              </p>
            </div>

            <div class="space-y-5 pt-4">
              <div class="flex items-center gap-5 text-sm text-[#444841]/80">
                <span class="material-symbols-outlined text-[#455846]/60 scale-90">verified_user</span>
                <span class="tracking-wide">Holistic, organic oils used in every session</span>
              </div>
              <div class="flex items-center gap-5 text-sm text-[#444841]/80">
                <span class="material-symbols-outlined text-[#455846]/60 scale-90">eco</span>
                <span class="tracking-wide">Sustainably focused Scandinavian approach</span>
              </div>
            </div>
          </div>

          <!-- Actions - Organic Gradients & No Borders -->
          <div class="flex flex-col gap-6 pt-4">
            <button class="group relative w-full overflow-hidden py-7 rounded-2xl transition-all duration-500 transform active:scale-[0.98]">
              <div class="absolute inset-0 bg-gradient-to-br from-[#455846] to-[#5d705d] transition-transform duration-500 group-hover:scale-105"></div>
              <div class="relative flex items-center justify-center gap-4 text-white button-label">
                <span>Checkout</span>
                <span class="material-symbols-outlined text-lg">shopping_cart</span>
              </div>
            </button>
            
            <button class="group relative w-full overflow-hidden py-7 rounded-2xl bg-[#e9e8e5] transition-all duration-500 transform active:scale-[0.98] hover:bg-[#dbdad7]">
              <div class="relative flex items-center justify-center gap-4 text-[#455846] button-label">
                <span>Pay with Vipps</span>
              </div>
            </button>
          </div>

          <div class="pt-4 px-6">
            <p class="caption text-[#444841] text-left lg:text-center">
              By purchasing, you agree to our booking policy.<br/>
              Gift cards are valid for 12 months from the date of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products Section - Color Blocked -->
    <section class="related-products-section bg-[#f4f3f0]">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div class="flex flex-row items-center justify-between gap-8">
          <div class="space-y-4">
            <span class="eyebrow">Curated for you</span>
            <h2 class="heading-lg text-[#1b1c1a]">Related Experiences</h2>
          </div>
          <NuxtLink to="/shop" class="group flex items-center gap-4 button-label text-[#455846]">
            <span>View All</span>
            <span class="material-symbols-outlined transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
          </NuxtLink>
        </div>

        <div class="related-grid">
          <NuxtLink 
            v-for="item in relatedProducts" 
            :key="item.slug"
            :to="`/shop/${item.slug}`"
            class="product-card-editorial group"
            v-motion-fade
          >
            <div class="image-container">
              <NuxtImg :src="item.image" class="w-full h-full object-cover" />
              <!-- New Immersive Overlay -->
              <div class="overlay">
                <div class="space-y-1">
                  <h3 class="title">{{ item.title }}</h3>
                  <div class="price">{{ item.price }}</div>
                </div>
                <div class="view-action">
                  View
                </div>
              </div>
            </div>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
