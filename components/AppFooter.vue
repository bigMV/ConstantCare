<script setup>
</script>

<template>
  <footer class="w-full bg-[#f4f3f0] dark:bg-[#252623]">
    <div class="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-16 space-y-8 md:space-y-0 max-w-[1920px] mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg src="/LogoConstantCare.png" alt="ConstantCare" class="h-6 md:h-8 w-auto" />
      </NuxtLink>
      <div class="flex flex-wrap justify-center gap-6 font-sans text-xs tracking-wider opacity-80">
        <NuxtLink class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" to="/privacy-policy">{{ $t('footer.privacy') }}</NuxtLink>
        <NuxtLink class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" to="/terms-of-service">{{ $t('footer.terms') }}</NuxtLink>
        <a class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" href="#">{{ $t('footer.booking') }}</a>
        <a class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" href="#">{{ $t('footer.sitemap') }}</a>
      </div>
      <div class="font-sans text-xs tracking-wider opacity-80 text-[#455846] dark:text-[#bccbb1]">
        {{ $t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>
