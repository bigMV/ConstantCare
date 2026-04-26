<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-16 md:py-32 bg-surface-lowest" id="contact">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Contact Info & SEO Text -->
        <div class="space-y-12">
          <div class="space-y-4 text-left">
            <span 
              class="eyebrow block"
              v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
            >
              {{ $t('nav.cta') }}
            </span>
            <HeadingRenderPass 
              as="h2" 
              :text="$t('contact.title')"
              class="text-on-surface"
              :delay="0.3"
            />
            <p 
              class="text-on-surface-variant leading-relaxed mb-8"
              v-motion="{ initial: { opacity: 0, y: 20 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 500, duration: 1000 } } }"
            >
              {{ $t('contact.description') }}
            </p>
            <div class="space-y-8 text-on-surface flex flex-col items-start">
              <!-- Address Item -->
              <a 
                href="https://www.google.com/maps/search/?api=1&query=Majorstuvein+31+B+0367+Oslo+Norway" 
                target="_blank" 
                class="group flex flex-col items-start hover:opacity-70 transition-opacity"
                v-motion="{ initial: { opacity: 0, x: -10 }, visibleOnce: { opacity: 1, x: 0, transition: { delay: 700, duration: 800 } } }"
              >
                <div class="flex items-center space-x-3 mb-1">
                  <span class="material-symbols-outlined text-accent">location_on</span>
                  <span class="font-bold text-sm tracking-widest uppercase">ConstantCare</span>
                </div>
                <span class="text-on-surface-variant pl-9 leading-relaxed">{{ $t('contact.address') }}</span>
              </a>

              <!-- Email Item -->
              <a 
                :href="`mailto:${$t('contact.email')}`" 
                class="group flex items-center space-x-3 hover:opacity-70 transition-opacity"
                v-motion="{ initial: { opacity: 0, x: -10 }, visibleOnce: { opacity: 1, x: 0, transition: { delay: 800, duration: 800 } } }"
              >
                <span class="material-symbols-outlined text-accent">mail</span>
                <span class="text-on-surface-variant">{{ $t('contact.email') }}</span>
              </a>
            </div>
          </div>
        </div>
        <!-- Minimalist Contact Form -->
        <div 
          class="bg-surface-low p-8 md:p-12 rounded-xl"
          v-motion="{ initial: { opacity: 0, y: 30 }, visibleOnce: { opacity: 1, y: 0, transition: { delay: 1000, duration: 1200 } } }"
        >
          <h3 class="text-on-surface mb-8">{{ $t('contact.form_title') }}</h3>
          <form class="space-y-6">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input class="w-full bg-surface-low border-0 border-b border-on-surface/20 text-on-surface font-sans text-sm px-4 py-3 focus:ring-0 focus:border-accent focus:bg-accent/5 transition-colors" id="name" name="name" :placeholder="$t('contact.name_placeholder')" type="text"/>
            </div>
            <div>
              <label class="sr-only" for="email">Email</label>
              <input class="w-full bg-surface-low border-0 border-b border-on-surface/20 text-on-surface font-sans text-sm px-4 py-3 focus:ring-0 focus:border-accent focus:bg-accent/5 transition-colors" id="email" name="email" :placeholder="$t('contact.email_placeholder')" type="email"/>
            </div>
            <div>
              <label class="sr-only" for="message">Message</label>
              <textarea class="w-full bg-surface-low border-0 border-b border-on-surface/20 text-on-surface font-sans text-sm px-4 py-3 focus:ring-0 focus:border-accent focus:bg-accent/5 transition-colors resize-none" id="message" name="message" :placeholder="$t('contact.message_placeholder')" rows="4"></textarea>
            </div>
            <button class="w-full bg-accent text-white py-4 rounded-md hover:bg-accent-dim transition-colors scale-100 active:scale-95" type="button">
              {{ $t('contact.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
