<script setup>
import { Leaf as LucideLeaf, Droplets as LucideDroplets, Zap as LucideZap, ShieldCheck as LucideShieldCheck } from 'lucide-vue-next'
const { t } = useI18n()

useSeoMeta({
  title: 'Sustainability Report | Ankarenhold',
  description: 'Our commitment to environmentally friendly cleaning practices.',
})
</script>

<template>
  <div class="pt-40 pb-32 container-content max-w-4xl mx-auto">
    <header class="mb-20">
      <div class="eyebrow mb-6">
        <div class="eyebrow-line"></div>
        <span class="eyebrow-label">Environment</span>
      </div>
      <HeadingRenderPass as="h1"  text="Sustainability" />
      <h2 class="text-lg text-on-surface/60">
        We ensure our cleaning services are safe for the planet. We use eco-friendly products and sustainable business practices.
      </h2>
    </header>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-24 overflow-hidden">
      <div class="bg-surface-low p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-surface-mid transition-colors">
        <LucideLeaf class="text-primary opacity-20 group-hover:opacity-100 transition-all mb-4" :size="32" />
        <span class="text-2xl font-bold block mb-2 break-words">100%</span>
        <span class="eyebrow-label opacity-40">Plant-Based</span>
      </div>
      <div class="bg-surface-low p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-surface-mid transition-colors">
        <LucideDroplets class="text-primary opacity-20 group-hover:opacity-100 transition-all mb-4" :size="32" />
        <span class="text-2xl font-bold block mb-2 break-words">0%</span>
        <span class="eyebrow-label opacity-40">Microplastics</span>
      </div>
      <div class="bg-surface-low p-6 md:p-8 rounded-[2rem] flex flex-col items-center text-center group hover:bg-surface-mid transition-colors">
        <LucideZap class="text-primary opacity-20 group-hover:opacity-100 transition-all mb-4" :size="32" />
        <span class="text-2xl font-bold block mb-2 break-words">Electric</span>
        <span class="eyebrow-label opacity-40">Logistics</span>
      </div>
    </div>

    <div class="flex flex-col gap-16">
      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideLeaf class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h3 class="font-serif">Eco-Friendly Products</h3>
        </div>  
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            All our cleaning agents are non-toxic and biodegradable. We use refillable containers to minimize plastic waste across all our operations.
          </p>
        </div>
      </section>

      <section class="group">
        <div class="flex items-center gap-4 mb-6">
          <LucideShieldCheck class="text-primary opacity-40 group-hover:opacity-100 transition-opacity" :size="24" />
          <h3 class="font-serif">Fair Labor Standards</h3>
        </div>
        <div class="pl-10 border-l border-on-surface/5 text-on-surface/80">
          <p>
            Sustainability also means taking care of our team. All our staff receive fair wages and full benefits, ensuring a positive impact on the community.
          </p>
        </div>
      </section>
      
      <NuxtLink to="/" class="btn btn-primary !self-start mt-12">
        Return to Home
      </NuxtLink>
    </div>
  </div>
</template>
