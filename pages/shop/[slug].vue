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
  <div class="min-h-screen bg-[#faf9f6] pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <!-- Breadcrumbs -->
      <nav class="mb-12 flex items-center gap-4 text-xs uppercase tracking-widest text-[#444841]/50 font-sans">
        <NuxtLink to="/shop" class="hover:text-[#455846] transition-colors">Shop</NuxtLink>
        <span class="material-symbols-outlined text-xs">chevron_right</span>
        <span class="text-[#455846]">{{ product.title }}</span>
      </nav>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <!-- Image Gallery (Single Image for now) -->
        <div class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-[0_30px_60px_rgba(0,0,0,0.05)] bg-white" v-motion-fade>
          <NuxtImg :src="product.image" class="w-full h-full object-cover" />
        </div>

        <!-- Product Info -->
        <div class="space-y-10" v-motion-slide-visible-right>
          <div class="space-y-4">
            <h1 class="font-sans text-4xl md:text-5xl font-light tracking-tight text-[#1b1c1a] leading-tight">{{ product.title }}</h1>
            <div class="text-3xl font-sans text-[#455846] font-light">{{ product.price }}</div>
          </div>

          <div class="h-[1px] w-full bg-[#1b1c1a]/5"></div>

          <div class="space-y-6">
            <h2 class="font-sans text-xs uppercase tracking-[0.2em] text-[#455846] font-bold">Experience Details</h2>
            <p class="font-sans text-lg text-[#444841] leading-relaxed">
              {{ product.long }}
            </p>
          </div>

          <div class="space-y-4 pt-4">
            <div class="flex items-center gap-4 text-sm text-[#444841]">
              <span class="material-symbols-outlined text-[#455846]">verified_user</span>
              <span>Holistic, organic oils used in every session</span>
            </div>
            <div class="flex items-center gap-4 text-sm text-[#444841]">
              <span class="material-symbols-outlined text-[#455846]">eco</span>
              <span>Sustainably focused Scandinavian approach</span>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col gap-4 pt-8">
            <button class="w-full bg-[#1b1c1a] text-white font-sans text-sm uppercase tracking-[0.2em] py-6 rounded-xl hover:bg-[#333531] transition-all duration-300 transform active:scale-[0.98] shadow-xl flex items-center justify-center gap-4">
              <span>Checkout</span>
              <span class="material-symbols-outlined">shopping_cart</span>
            </button>
            <button class="w-full border-2 border-[#455846] text-[#455846] font-sans text-sm uppercase tracking-[0.2em] py-6 rounded-xl hover:bg-[#455846] hover:text-white transition-all duration-300 transform active:scale-[0.98] flex items-center justify-center gap-4 group">
              <span>Pay with Vipps</span>
              <NuxtImg src="/LogoConstantCare.png" class="h-4 opacity-50 group-hover:invert transition-all" />
            </button>
          </div>

          <div class="pt-8 text-center">
            <p class="text-[10px] uppercase tracking-widest text-[#444841]/40 font-sans leading-relaxed">
              By purchasing, you agree to our booking policy.<br/>Gift cards are valid for 12 months from the date of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
