<script setup>
const localePath = useLocalePath()
</script>

<template>
  <footer class="w-full bg-[#f4f3f0] dark:bg-[#252623] border-t border-black/5 dark:border-white/5">
    <div class="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col">
      <!-- First Row: Logo Box and Links -->
      <div class="flex flex-col lg:flex-row justify-between items-center space-y-10 lg:space-y-0 w-full">
        <NuxtLink :to="localePath('/')"
          class="bg-white/80 dark:bg-white/4c0 p-5 rounded-2xl backdrop-blur-md shadow-xs transition-all duration-500 hover:shadow-md hover:-translate-y-1">
          <NuxtImg src="/LogoConstantCare.png" alt="ConstantCare" class="h-8 md:h-10 w-auto" />
        </NuxtLink>

        <div class="flex flex-wrap justify-center lg:justify-end gap-x-10 gap-y-4">
          <NuxtLink
            class="text-sm text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] transition-colors duration-300 font-medium"
            :to="localePath('/privacy-policy')">{{ $t('footer.privacy') }}</NuxtLink>
          <NuxtLink
            class="text-sm text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] transition-colors duration-300 font-medium"
            :to="localePath('/terms-of-service')">{{ $t('footer.terms') }}</NuxtLink>
          <a class="text-sm text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] transition-colors duration-300 font-medium"
            href="#">{{ $t('footer.booking') }}</a>
          <a class="text-sm text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] transition-colors duration-300 font-medium"
            href="#">{{ $t('footer.sitemap') }}</a>
        </div>
      </div>

      <!-- Second Row: Trademark (Fine Print) -->
      <div class="mt-16 pt-8 border-t border-black/5 dark:border-white/5">
        <p
          class="text-[9px] uppercase tracking-[0.25em] opacity-40 text-[#455846] dark:text-[#bccbb1] text-left font-sans">
          {{ $t('footer.rights') }}
        </p>
      </div>
    </div>
  </footer>
</template>
