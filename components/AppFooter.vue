<script setup>
</script>

<template>
  <footer class="section-padding !pb-8 bg-surface-lowest border-t border-on-surface/5">
    <div class="container-content">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
        <!-- Brand -->
        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-3">
            <div class="w-[clamp(2.5rem,3vw,5rem)] h-[clamp(2.5rem,3vw,5rem)] rounded-full overflow-hidden bg-primary flex items-center justify-center p-2 transition-all duration-700 ">
              <NuxtImg src="/logo.png" alt="Logo" class="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span class="font-serif italic fluid-h3 lg:!text-[clamp(2rem,3vw,4rem)] font-bold tracking-wide text-on-surface">
              Ankarenhold
            </span>
          </div>
          <p class="fluid-p text-sm md:text-base opacity-50 max-w-[30ch] leading-relaxed">
            Professional cleaning services in Oslo. Focused on quality, reliability, and attention to detail.
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col gap-6">
          <span class="label-md opacity-30 tracking-[0.2em]">{{ $t('footer.company') }}</span>
          <NuxtLink to="/#services" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/#philosophy" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('nav.philosophy') }}</NuxtLink>
          <NuxtLink to="/#faq" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{ $t('nav.faq') }}
          </NuxtLink>
        </div>

        <!-- Compliance / Details -->
        <div class="flex flex-col gap-6">
          <span class="label-md opacity-30 tracking-[0.2em]">{{ $t('footer.details') }}</span>
          <NuxtLink to="/privacy-policy" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.terms') }}</NuxtLink>
          <NuxtLink to="/sustainability-report" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.sustainability') }}</NuxtLink>
        </div>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-on-surface/5">
        <span class="label-md opacity-30 tracking-widest">{{ $t('footer.rights') }}</span>
        <div class="flex items-center gap-8">
          <a href="https://mariusv.dev" target="_blank" class="group/dev relative py-2">
            <span
              class="label-md opacity-30 group-hover/dev:opacity-100 transition-opacity duration-500 tracking-[0.2em]">
              {{ $t('footer.developed_by') }}
            </span>
            <div
              class="absolute bottom-0 left-0 w-0 h-[1px] bg-primary group-hover/dev:w-full transition-all duration-700 ease-out">
            </div>
            <div
              class="absolute -top-1 -right-1 w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover/dev:opacity-100 transition-all duration-500 delay-300 shadow-[0_0_10px_#4C6455] scale-0 group-hover/dev:scale-100">
            </div>
          </a>
          <div class="w-px h-12 bg-on-surface/10"></div>
          <span class="label-md opacity-30 tracking-[0.3em]"> {{ $t('footer.oslo') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
