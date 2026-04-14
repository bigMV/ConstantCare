<script setup>
import { Shield as LucideShield, Eye as LucideEye, Lock as LucideLock } from 'lucide-vue-next'
const { t } = useI18n()

useSeoMeta({
  title: 'Privacy Policy | Ankarenhold',
  description: 'How we handle and protect your personal information.',
})
</script>

<template>
  <div class="pt-40 pb-32 container-content max-w-4xl mx-auto">
    <header class="mb-20">
      <div class="eyebrow mb-6">
        <div class="eyebrow-line"></div>
        <span class="eyebrow-label">Legal</span>
      </div>
      <HeadingRenderPass as="h1" class="text-4xl md:text-6xl mb-8" text="Privacy Policy" />
      <p class="text-xl text-on-surface/60 leading-relaxed">
        We are committed to protecting your privacy. This policy explains how we collect and manage your personal data to provide our cleaning services.
      </p>
    </header>

    <div class="flex flex-col gap-16">
      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideEye class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">1. Information Collection</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 flex flex-col gap-4 text-on-surface/80">
          <p>
            We only collect information necessary to provide our services, such as your name, contact details, and cleaning instructions for your property.
          </p>
          <p>
            We do not sell or share your personal information with third parties for marketing purposes.
          </p>
        </div>
      </section>

      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideLock class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">2. Data Security</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            Your information is stored securely on encrypted servers. Our team follows strict security protocols regarding key access and scheduling.
          </p>
        </div>
      </section>

      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideShield class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">3. Your Rights</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            You have the right to access, correct, or request the deletion of your personal data at any time by contacting us directly.
          </p>
        </div>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary !self-start mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
