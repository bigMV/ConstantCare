<script setup>
import { Leaf as LucideLeaf, Shield as LucideShield, Target as LucideFocus } from 'lucide-vue-next'
const { t } = useI18n()
const pillars = computed(() => [
  {
    key: 'sustainable',
    icon: LucideLeaf,
    title: t('pillars.sustainable.title'),
    text: t('pillars.sustainable.text')
  },
  {
    key: 'ethical',
    icon: LucideShield,
    title: t('pillars.ethical.title'),
    text: t('pillars.ethical.text')
  },
  {
    key: 'detail',
    icon: LucideFocus,
    title: t('pillars.detail.title'),
    text: t('pillars.detail.text')
  }
])
</script>

<template>
  <section id="philosophy" class="section-padding bg-surface">
    <div class="container-content">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24">
        <div 
          v-for="(pillar, index) in pillars" 
          :key="pillar.key"
          class="flex flex-col gap-8 group"
          :class="index % 2 !== 0 ? 'md:mt-24' : ''"
        >
          <div class="w-16 h-16 rounded-2xl bg-surface-low border border-on-surface/5 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-sm">
            <component :is="pillar.icon" :size="32" stroke-width="1.5" />
          </div>
          
          <div>
            <HeadingRenderPass
              as="h2"
              class="mb-4 text-2xl tracking-tight"
              :text="pillar.title"
              :uid="`pillar-${pillar.key}`"
            />
            <p class="text-on-surface/60 leading-relaxed max-w-[35ch] text-base text-sm md:text-base">
              {{ pillar.text }}
            </p>
          </div>

          <!-- Decorative Line -->
          <div class="w-12 h-px bg-on-surface/10 group-hover:w-24 group-hover:bg-primary transition-all duration-700"></div>
        </div>
      </div>
    </div>
  </section>
</template>
