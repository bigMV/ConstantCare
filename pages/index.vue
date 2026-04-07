<script setup>
const { t } = useI18n()

// SEO Metadata for Homepage
useSeoMeta({
  title: t('hero.title') + ' — ' + t('hero.eyebrow'),
  ogTitle: t('hero.title') + ' | ' + t('hero.eyebrow'),
  description: t('hero.description'),
  ogDescription: t('hero.description'),
  ogImage: '/images/hero.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div>
    <HeroSection />
    <FeaturesSection />
    <ServicesSection />
    <TestimonialsSection />
    <FaqSection />
    <ContactSection />
  </div>
</template>
