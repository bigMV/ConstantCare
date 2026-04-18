<script setup>
const { t } = useI18n()
</script>

<template>
  <section class="py-32 bg-[#faf9f6]" id="contact">
    <div class="max-w-7xl mx-auto px-6 md:px-12">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-20">
        <!-- Contact Info & SEO Text -->
        <div class="space-y-12">
          <div>
            <h2 class="font-sans text-3xl font-light tracking-tight text-[#1b1c1a] mb-6">{{ $t('contact.title') }}</h2>
            <p class="font-sans text-base text-[#444841] leading-relaxed mb-8">
              {{ $t('contact.description') }}
            </p>
            <div class="space-y-4 font-sans text-sm text-[#1b1c1a]">
              <div class="flex items-start space-x-4">
                <span class="material-symbols-outlined text-[#747871]">location_on</span>
                <div>
                  <p class="font-bold">ConstantCare</p>
                  <p class="text-[#444841]">{{ $t('contact.address') }}</p>
                </div>
              </div>
              <div class="flex items-center space-x-4">
                <span class="material-symbols-outlined text-[#747871]">mail</span>
                <p>{{ $t('contact.email') }}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- Minimalist Contact Form -->
        <div class="bg-[#e9e8e5] p-8 md:p-12 rounded-xl">
          <h3 class="font-sans text-xl font-medium text-[#1b1c1a] mb-8">{{ $t('contact.form_title') }}</h3>
          <form class="space-y-6">
            <div>
              <label class="sr-only" for="name">Name</label>
              <input class="w-full bg-[#e3e2df] border-0 border-b border-[#747871] text-[#1b1c1a] font-sans text-sm px-4 py-3 focus:ring-0 focus:border-[#455846] focus:bg-[#d3e8d1]/20 transition-colors" id="name" name="name" :placeholder="$t('contact.name_placeholder')" type="text"/>
            </div>
            <div>
              <label class="sr-only" for="email">Email</label>
              <input class="w-full bg-[#e3e2df] border-0 border-b border-[#747871] text-[#1b1c1a] font-sans text-sm px-4 py-3 focus:ring-0 focus:border-[#455846] focus:bg-[#d3e8d1]/20 transition-colors" id="email" name="email" :placeholder="$t('contact.email_placeholder')" type="email"/>
            </div>
            <div>
              <label class="sr-only" for="message">Message</label>
              <textarea class="w-full bg-[#e3e2df] border-0 border-b border-[#747871] text-[#1b1c1a] font-sans text-sm px-4 py-3 focus:ring-0 focus:border-[#455846] focus:bg-[#d3e8d1]/20 transition-colors resize-none" id="message" name="message" :placeholder="$t('contact.message_placeholder')" rows="4"></textarea>
            </div>
            <button class="w-full bg-[#455846] text-[#ffffff] font-sans text-sm uppercase tracking-widest py-4 rounded-md hover:bg-[#5d705d] transition-colors scale-100 active:scale-95" type="button">
              {{ $t('contact.submit') }}
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
