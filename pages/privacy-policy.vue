<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('footer.privacy') + ' | ConstantCare',
  meta: [
    { name: 'description', content: 'Our commitment to protecting your privacy and personal data at ConstantCare.' }
  ]
})
</script>

<template>
  <div class="min-h-screen bg-surface-lowest pt-32 pb-24 selection:bg-accent/10">
    <div class="max-w-4xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="space-y-4 mb-16 text-left">
        <span 
          class="eyebrow block"
          v-motion="{ initial: { opacity: 0, x: -20 }, visibleOnce: { opacity: 0.6, x: 0, transition: { duration: 1000 } } }"
        >
          Legal
        </span>
        <HeadingRenderPass 
          as="h1" 
          :text="t('footer.privacy')"
          class="text-on-surface"
          :delay="0.3"
        />
        <p class="text-sm opacity-40 font-sans tracking-widest uppercase">Last Updated: April 2026</p>
      </div>

      <!-- Content -->
      <div class="prose prose-neutral max-w-none space-y-12 text-on-surface-variant leading-relaxed font-sans">
        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">1. Our Commitment</h2>
          <p>
            At ConstantCare, we take your privacy seriously. This policy describes how we collect, use, and protect your personal information when you use our website and book our therapeutic services. We are committed to ensuring that your data is handled in accordance with the General Data Protection Regulation (GDPR) and Norwegian privacy laws.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">2. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul class="list-disc pl-6 space-y-3">
            <li><strong>Personal Identification:</strong> Name, email address, and phone number when you request an inquiry or purchase a voucher.</li>
            <li><strong>Health Data:</strong> Information about physical conditions or injuries provided during consultations to ensure safe treatment (collected only with your explicit consent).</li>
            <li><strong>Payment Data:</strong> Transaction details when you purchase through Vipps (we do not store your full credit card information).</li>
            <li><strong>Usage Data:</strong> Information about how you navigate our site via cookies and similar technologies.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">3. How We Use Your Data</h2>
          <p>Your information is used to:</p>
          <ul class="list-disc pl-6 space-y-3">
            <li>Facilitate bookings and confirm appointments.</li>
            <li>Process payments for gift vouchers and services.</li>
            <li>Customize treatments based on your physical needs.</li>
            <li>Improve our website experience and customer service.</li>
            <li>Comply with legal and accounting obligations in Norway.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">4. Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements. For safety reasons, health consultation notes may be kept for a period to track your progress and ensure continuity of care.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">5. Your Rights</h2>
          <p>Under GDPR, you have the right to:</p>
          <ul class="list-disc pl-6 space-y-3">
            <li>Access the personal data we hold about you.</li>
            <li>Request correction of inaccurate data.</li>
            <li>Request deletion of your data (the "right to be forgotten").</li>
            <li>Object to or restrict the processing of your data.</li>
            <li>Withdraw consent at any time for health-related data processing.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please reach out to us at:
            <br/><br/>
            <strong>ConstantCare</strong><br/>
            Email: hey@constantcare.no<br/>
            Address: Majorstuveien 31 B, 0367 Oslo, Norway
          </p>
        </section>

        <div class="pt-12 border-t border-on-surface/5">
          <NuxtLink :to="localePath('/')" class="text-sm font-medium uppercase tracking-widest text-accent hover:text-accent-dim transition-colors group">
            Back to Home
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
  opacity: 0.9;
  letter-spacing: -0.01em;
}
p, li {
  font-size: var(--text-base);
  opacity: 0.85;
}
</style>
