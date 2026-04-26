<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useHead({
  title: t('footer.terms') + ' | ConstantCare',
  meta: [
    { name: 'description', content: 'Terms and conditions for using ConstantCare services and our website.' }
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
          :text="t('footer.terms')"
          class="text-on-surface"
          :delay="0.3"
        />
        <p class="text-sm opacity-40 font-sans tracking-widest uppercase">Last Updated: April 2026</p>
      </div>

      <!-- Content -->
      <div class="prose prose-neutral max-w-none space-y-12 text-on-surface-variant leading-relaxed font-sans">
        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">1. Acceptance of Terms</h2>
          <p>
            By accessing this website and booking our services, you agree to be bound by these Terms and Conditions. These terms apply to all visitors, users, and clients of ConstantCare.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">2. Services and Bookings</h2>
          <p>
            ConstantCare provides holistic massage therapy services in Oslo. All bookings are subject to availability. We reserve the right to refuse service to anyone for any reason at any time.
          </p>
          <ul class="list-disc pl-6 space-y-3">
            <li><strong>Consultation:</strong> A brief health consultation is required before your first treatment to ensure the service is safe and appropriate for you.</li>
            <li><strong>Punctuality:</strong> We recommend arriving 10 minutes before your scheduled appointment. Late arrivals may result in a shortened treatment time.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">3. Cancellation and No-Show Policy</h2>
          <p>
            Your appointment time is reserved exclusively for you. If you need to cancel or reschedule, we require at least <strong>24 hours notice</strong>. 
          </p>
          <ul class="list-disc pl-6 space-y-3">
            <li>Cancellations with less than 24 hours notice may be subject to a fee of 50% of the treatment price.</li>
            <li>No-shows without any notice will be charged the full 100% price of the scheduled service.</li>
          </ul>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">4. Vouchers and Gift Cards</h2>
          <p>
            Gift vouchers purchased through our website are valid for <strong>12 months</strong> from the date of purchase. Vouchers are non-refundable and cannot be exchanged for cash. The physical or digital voucher must be presented at the time of the appointment.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">5. Health and Safety</h2>
          <p>
            Clients must inform their therapist of any known medical conditions, allergies, or physical injuries. While our treatments are designed for wellness and relaxation, they are not a substitute for professional medical advice, diagnosis, or treatment.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">6. Limitation of Liability</h2>
          <p>
            ConstantCare shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or website. We maintain professional liability insurance in accordance with Norwegian regulations.
          </p>
        </section>

        <section class="space-y-6">
          <h2 class="text-2xl text-on-surface font-serif">7. Governing Law</h2>
          <p>
            These terms are governed by and construed in accordance with the laws of Norway. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Oslo.
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
