<script setup>
</script>

<template>
  <footer class="section-padding !pb-8 bg-surface-lowest border-t border-on-surface/5">
    <div class="container-content">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-24">
        <!-- Brand -->
        <div class="flex flex-col gap-8">
          <div class="flex items-center gap-3">
            <div class="brand-logo brand-logo--large">
              <NuxtImg src="/logo.png" alt="Logo" class="w-full h-full object-contain brightness-0 invert" />
            </div>
            <span class="brand-text text-on-surface">
              Ankarenhold
            </span>
          </div>
          <p class="text-base text-sm md:text-base opacity-50 max-w-[30ch] leading-relaxed">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Links -->
        <div class="flex flex-col gap-6">
          <span class="eyebrow-label !opacity-30">{{ $t('footer.company') }}</span>
          <NuxtLink to="/#services" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('nav.services') }}</NuxtLink>
          <NuxtLink to="/#philosophy" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('nav.philosophy') }}</NuxtLink>
          <NuxtLink to="/#faq" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{ $t('nav.faq') }}
          </NuxtLink>
        </div>

        <!-- Compliance / Details -->
        <div class="flex flex-col gap-6">
          <span class="eyebrow-label !opacity-30">{{ $t('footer.details') }}</span>
          <NuxtLink to="/privacy-policy" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.privacy') }}</NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.terms') }}</NuxtLink>
          <NuxtLink to="/sustainability-report" class="text-sm hover:text-primary transition-all hover:translate-x-1">{{
            $t('footer.sustainability') }}</NuxtLink>
        </div>
      </div>

      <!-- Copyright -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-6 pt-12 border-t border-on-surface/5">
        <span class="text-[9px] uppercase tracking-[0.3em] opacity-20">{{ $t('footer.rights') }}</span>
        
        <div class="flex items-center gap-4">
          <a href="https://mariusv.dev" target="_blank" class="group/dev flex items-center gap-2">
            <span class="text-[9px] uppercase tracking-[0.3em] opacity-20 group-hover/dev:opacity-60 transition-opacity duration-700">
               {{ $t('footer.developed_by') }}
            </span>
            <div class="w-1 h-1 rounded-full bg-primary opacity-0 group-hover/dev:opacity-40 transition-all duration-700"></div>
          </a>
          <span class="text-[9px] opacity-10 select-none">/</span>
          <span class="text-[9px] uppercase tracking-[0.3em] opacity-20"> {{ $t('footer.oslo') }}</span>
        </div>
      </div>
    </div>
  </footer>
</template>
