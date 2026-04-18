<script setup>
</script>

<template>
  <footer class="w-full bg-[#f4f3f0] dark:bg-[#252623]">
    <div class="flex flex-col lg:flex-row justify-between items-start px-6 lg:px-12 py-16 space-y-8 lg:space-y-0 max-w-7xl mx-auto">
      <NuxtLink to="/" class="flex items-center">
        <NuxtImg src="/LogoConstantCare.png" alt="ConstantCare" class="h-6 md:h-8 w-auto" />
      </NuxtLink>
      <div class="flex flex-wrap justify-start gap-6 button-label opacity-80">
        <NuxtLink class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" to="/privacy-policy">{{ $t('footer.privacy') }}</NuxtLink>
        <NuxtLink class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" to="/terms-of-service">{{ $t('footer.terms') }}</NuxtLink>
        <a class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" href="#">{{ $t('footer.booking') }}</a>
        <a class="text-[#444841] dark:text-[#c4c8bf] hover:text-[#5d705d] underline underline-offset-4 decoration-[#5d705d]/30 transition-colors duration-300" href="#">{{ $t('footer.sitemap') }}</a>
      </div>
      <div class="button-label opacity-80 text-[#455846] dark:text-[#bccbb1]">
        {{ $t('footer.rights') }}
      </div>
    </div>
  </footer>
</template>
