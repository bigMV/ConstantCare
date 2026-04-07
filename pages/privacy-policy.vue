<script setup>
const { t } = useI18n()

// Simplified SEO Metadata
useSeoMeta({
  title: 'Privacy Policy | Ankarenhold',
  description: 'How we handle and protect your personal information.',
  ogTitle: 'Privacy Policy | Ankarenhold',
  ogDescription: 'Transparency and trust in our professional cleaning services.',
})
</script>

<template>
  <div class="pt-40 pb-32 px-6 md:px-12 max-w-4xl mx-auto">
    <header class="mb-20">
      <span class="label-md text-primary mb-4 block uppercase tracking-widest">Legal</span>
      <h1 class="text-4xl md:text-6xl font-bold mb-8">Privacy Policy</h1>
      <p class="text-xl text-on-surface/60 leading-relaxed">
        We are committed to protecting your privacy. This policy explains how we collect and manage your personal data to provide our cleaning services.
      </p>
    </header>

    <div class="prose prose-xl prose-stone max-w-none prose-headings:font-bold">
      <section class="mb-16">
        <h2 class="text-2xl mb-6">1. Information Collection</h2>
        <p class="mb-4">
          We only collect information necessary to provide our services, such as your name, contact details, and cleaning instructions for your property.
        </p>
        <p>
          We do not sell or share your personal information with third parties for marketing purposes.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl mb-6">2. Data Security</h2>
        <p class="mb-4">
          Your information is stored securely on encrypted servers. Our team follows strict security protocols regarding key access and scheduling.
        </p>
      </section>

      <section class="mb-16">
        <h2 class="text-2xl mb-6">3. Your Rights</h2>
        <p>
          You have the right to access, correct, or request the deletion of your personal data at any time by contacting us directly.
        </p>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
