<script setup>
const route = useRoute()
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Map slugs to product data
const products = {
  '30-min-massage': {
    id: 'm30',
    slug: '30-min-massage',
    title: t('services.m30.title'),
    price: t('services.m30.price'),
    short: t('services.m30.description_short'),
    long: t('services.m30.description_long'),
    image: '/images/shop/product_30min.png',
    vipps: 'https://betal.vipps.no/fxi9fh'
  },
  '40-min-massage': {
    id: 'm40',
    slug: '40-min-massage',
    title: t('services.m40.title'),
    price: t('services.m40.price'),
    short: t('services.m40.description_short'),
    long: t('services.m40.description_long'),
    image: '/images/shop/product_40min.png',
    vipps: 'https://betal.vipps.no/hih29f'
  },
  '50-min-massage': {
    id: 'm50',
    slug: '50-min-massage',
    title: t('services.m50.title'),
    price: t('services.m50.price'),
    short: t('services.m50.description_short'),
    long: t('services.m50.description_long'),
    image: '/images/shop/product_50min.png',
    vipps: 'https://betal.vipps.no/nlna1k'
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
  <div class="min-h-screen bg-surface-lowest pt-32 selection:bg-accent/10">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 pb-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        <!-- Image Gallery - Responsive & Contained -->
        <div class="relative group order-first" v-motion-fade>
          <div class="relative rounded-4xl overflow-hidden aspect-4/5 bg-surface-lowest transition-transform duration-1000 group-hover:scale-[1.01]">
            <NuxtImg 
              :src="product.image" 
              class="w-full h-full object-cover" 
              :alt="product.title"
            />
            <!-- Soft Gradient Overlay -->
            <div class="absolute inset-0 bg-linear-to-t from-on-surface/5 to-transparent pointer-events-none"></div>
          </div>
          <!-- Decorative Tonal Block (Tactile Layering) - Hidden on mobile if needed -->
          <div class="absolute -z-10 -bottom-12 -left-12 w-48 h-48 bg-surface-low rounded-full blur-3xl opacity-50 hidden md:block"></div>
        </div>

        <!-- Product Info - Editorial Style -->
        <div 
          class="space-y-12 lg:sticky lg:top-32"
          v-motion="{ initial: { opacity: 0, x: 20 }, visibleOnce: { opacity: 1, x: 0, transition: { duration: 1000 } } }"
        >
          <div class="space-y-6">
            <div class="space-y-4">
              <span 
                class="eyebrow block"
                v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
              >
                Therapeutic Experience
              </span>
              <HeadingRenderPass 
                as="h1" 
                :text="product.title"
                class="text-on-surface text-2xl"
                :delay="0.3"
              />
            </div>
            <div class="text-lg text-accent font-sans">{{ product.price }}</div>
          </div>

          <!-- Tonal Container for Description -->
          <div class="bg-surface-low p-8 md:p-12 rounded-4xl space-y-10">
            <div class="space-y-4">
              <h2 class="text-xl text-accent">The Journey</h2>
              <p class="text-on-surface-variant opacity-90 leading-relaxed mb-0">
                {{ product.long }}
              </p>
            </div>

            <div class="space-y-6 pt-4 border-t border-on-surface/5">
              <div class="flex items-center gap-5">
                <span class="material-symbols-outlined text-accent/60 scale-90 material-filled">verified_user</span>
                <span class="text-sm text-on-surface-variant font-medium tracking-wide">Holistic, organic oils used in every session</span>
              </div>
              <div class="flex items-center gap-5">
                <span class="material-symbols-outlined text-accent/60 scale-90 material-filled">eco</span>
                <span class="text-sm text-on-surface-variant font-medium tracking-wide">Sustainably focused Scandinavian approach</span>
              </div>
            </div>
          </div>

          <!-- Actions -->
          <div class="flex flex-col sm:flex-row gap-6">
            <a 
              :href="product.vipps" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative flex-1 overflow-hidden py-6 rounded-2xl transition-all duration-500 transform active:scale-[0.98] block"
            >
              <div class="absolute inset-0 bg-linear-to-br from-accent to-accent-dim transition-transform duration-500 group-hover:scale-105"></div>
              <div class="relative flex items-center justify-center gap-3 text-white">
                <span class="font-medium">Purchase Now</span>
                <span class="material-symbols-outlined text-lg">shopping_bag</span>
              </div>
            </a>
          </div>

          <div class="px-2">
            <p class="caption text-on-surface-variant text-left leading-loose">
              By purchasing, you agree to our booking policy.<br/>
              Gift cards are valid for 12 months from the date of purchase.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Related Products Section - Color Blocked -->
    <section class="related-products-section bg-surface-lowest border-t border-on-surface/5">
      <div class="max-w-7xl mx-auto px-6 lg:px-12 space-y-16">
        <div class="flex flex-row items-center justify-between gap-8">
          <div class="space-y-4">
            <span 
              class="eyebrow block"
              v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
            >
              Curated for you
            </span>
            <HeadingRenderPass 
              as="h2" 
              text="Related Experiences"
              class="text-on-surface"
              :delay="0.3"
            />
          </div>
          <NuxtLink :to="localePath('/shop')" class="group flex items-center gap-4 text-accent">
            <span>View All</span>
            <span class="material-symbols-outlined transition-transform duration-500 group-hover:translate-x-2">arrow_forward</span>
          </NuxtLink>
        </div>

        <div class="related-grid">
          <NuxtLink 
            v-for="item in relatedProducts" 
            :key="item.slug"
            :to="localePath(`/shop/${item.slug}`)"
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
