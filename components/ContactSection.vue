<script setup>
import { MapPin as LucideMapPin, Mail as LucideMail } from 'lucide-vue-next'
const { t } = useI18n()
</script>

<template>
  <section id="contact" class="section-padding bg-surface-low overflow-hidden relative">
    <!-- Decorative Watermark (Asymmetrical) -->
    <div class="absolute top-[20%] right-[-10%] opacity-5 text-on-surface/10 select-none pointer-events-none">
      <span class="text-[clamp(10rem,30vw,40rem)] font-serif font-black leading-none">OSLO</span>
    </div>

    <div class="container-content relative z-10 flex flex-col items-start">
      <div class="max-w-4xl w-full text-left">
        <div class="eyebrow">
          <div class="eyebrow-line"></div>
          <span class="eyebrow-label uppercase">{{ $t('nav.cta') }}</span>
        </div>
        <HeadingRenderPass 
          as="h2" 
          class="mb-16 text-4xl max-w-[20ch]"
          :text="$t('contact.title')"
        />

        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-24">
          <div class="flex flex-col gap-4 group items-start">
            <div class="flex items-center gap-3">
              <LucideMapPin :size="18" class="text-primary" />
              <span class="eyebrow-label !opacity-100 font-black text-primary">ADDRESS</span>
            </div>
            <p
              class="text-2xl font-serif mb-0 transition-all duration-500 hover:translate-x-4">
              {{ $t('contact.address') }}
            </p>
          </div>

          <div class="flex flex-col gap-4 group items-start">
            <div class="flex items-center gap-3">
              <LucideMail :size="18" class="text-primary" />
              <span class="eyebrow-label !opacity-100 font-black text-primary">EMAIL</span>
            </div>
            <a :href="`mailto:${$t('contact.email')}`"
              class="text-2xl font-serif mb-0 transition-all duration-500 hover:text-primary hover:translate-x-4">
              {{ $t('contact.email') }}
            </a>
          </div>
        </div>

        <!-- Call to Action Button instead of form -->
        <div class="mt-8">
           <a :href="`mailto:${$t('contact.email')}`" class="btn btn-primary  shadow-2xl ">
             {{ $t('contact.form_title', 'Send us an email') }}
           </a>
        </div>
      </div>
    </div>
  </section>
</template>
