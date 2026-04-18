<script setup>
import { FileText as LucideFileText, XCircle as LucideXCircle, CheckCircle as LucideCheckCircle } from 'lucide-vue-next'
const { t } = useI18n()

useSeoMeta({
  title: 'Terms of Service | ConstantCare',
  description: 'Our agreement for professional cleaning services.',
})
</script>

<template>
  <div class="pt-40 pb-32 container-content max-w-4xl mx-auto">
    <header class="mb-20">
      <div class="eyebrow mb-6">
        <div class="eyebrow-line"></div>
        <span class="eyebrow-label">Agreement</span>
      </div>
      <HeadingRenderPass as="h1" class="text-4xl md:text-6xl mb-8" text="Terms of Service" />
      <p class="text-xl text-on-surface/60 leading-relaxed">
        Our service agreement ensures a clear understanding of our cleaning standards and customer responsibilities.
      </p>
    </header>

    <div class="flex flex-col gap-16">
      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideFileText class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">1. Scope of Service</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            ConstantCare provides professional cleaning services as described in your chosen cleaning plan. We aim to deliver high-quality results for every client.
          </p>
        </div>
      </section>

      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideXCircle class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">2. Cancellations and Access</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            Cancellations must be made at least 48 hours in advance. If we are unable to access the property for a scheduled cleaning, a cancellation fee may apply.
          </p>
        </div>
      </section>

      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideCheckCircle class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h2 class="text-2xl font-serif">3. Quality Guarantee</h2>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            If you are not satisfied with our service, please contact us within 24 hours. We will retrain our team to fix any issues at no extra cost.
          </p>
        </div>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary !self-start mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
