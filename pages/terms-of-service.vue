<script setup>
const { t } = useI18n()

// Simplified SEO Metadata
useSeoMeta({
  title: 'Terms of Service | Ankarenhold',
  description: 'Our agreement for professional cleaning services.',
  ogTitle: 'Terms of Service | Ankarenhold',
  ogDescription: 'Standard terms for our cleaning services.',
})
</script>

<template>
  <div class="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
    <header class="mb-20">
      <span class="label-md text-primary mb-4 block uppercase tracking-widest">Agreement</span>
      <h1 class="text-4xl md:text-6xl font-bold mb-8">Terms of Service</h1>
      <p class="text-xl text-on-surface/60 leading-relaxed">
        Our service agreement ensures a clear understanding of our cleaning standards and customer responsibilities.
      </p>
    </header>

    <div class="prose prose-xl prose-stone max-w-none prose-headings:font-bold">
      <section class="mb-16">
        <h2 class="text-2xl mb-6">1. Scope of Service</h2>
        <p class="mb-4">
          Ankarenhold provides professional cleaning services as described in your chosen cleaning plan. We aim to deliver high-quality results for every client.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl mb-6">2. Cancellations and Access</h2>
        <p class="mb-4">
          Cancellations must be made at least 48 hours in advance. If we are unable to access the property for a scheduled cleaning, a cancellation fee may apply.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl mb-6">3. Quality Guarantee</h2>
        <p>
          If you are not satisfied with our service, please contact us within 24 hours. We will retrain our team to fix any issues at no extra cost.
        </p>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
