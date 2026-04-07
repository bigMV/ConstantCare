<script setup>
const { t } = useI18n()

// Simplified SEO Metadata
useSeoMeta({
  title: 'Sustainability Report | Ankarenhold',
  description: 'Our commitment to environmentally friendly cleaning practices.',
  ogTitle: 'Sustainability Report | Ankarenhold',
  ogDescription: 'Safe and sustainable cleaning for our planet.',
})
</script>

<template>
  <div class="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
    <header class="mb-20">
      <span class="label-md text-primary mb-4 block uppercase tracking-widest">Environment</span>
      <h1 class="text-4xl md:text-6xl font-bold mb-8">Sustainability</h1>
      <p class="text-xl text-on-surface/60 leading-relaxed">
        We ensure our cleaning services are safe for the planet. We use eco-friendly products and sustainable business practices.
      </p>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 text-center">
      <div class="bg-surface-low p-8 rounded-2xl">
        <span class="text-4xl font-bold block mb-2">100%</span>
        <span class="label-md opacity-40">Plant-Based</span>
      </div>
      <div class="bg-surface-low p-8 rounded-2xl">
        <span class="text-4xl font-bold block mb-2">0%</span>
        <span class="label-md opacity-40">Microplastics</span>
      </div>
      <div class="bg-surface-low p-8 rounded-2xl">
        <span class="text-4xl font-bold block mb-2">Electric</span>
        <span class="label-md opacity-40">Logistics</span>
      </div>
    </div>

    <div class="prose prose-xl prose-stone max-w-none prose-headings:font-bold">
      <section class="mb-16">
        <h2 class="text-2xl mb-6">Eco-Friendly Products</h2>
        <p class="mb-4">
          All our cleaning agents are non-toxic and biodegradable. We use refillable containers to minimize plastic waste across all our operations.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl mb-6">Fair Labor Standards</h2>
        <p class="mb-4">
          Sustainability also means taking care of our team. All our staff receive fair wages and full benefits, ensuring a positive impact on the community.
        </p>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
