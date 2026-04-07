<script setup>
import { Form, Field, ErrorMessage, defineRule, configure } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'

const { t } = useI18n()

// Define rules
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// Spam Protection State
const submissionTimer = ref(0)
const honeypot = ref('')
const isSubmitting = ref(false)
const isSuccess = ref(false)

onMounted(() => {
  submissionTimer.value = Date.now()
})

const onSubmit = async (values, { resetForm }) => {
  // Honeypot check
  if (honeypot.value) return

  // Basic bot/fast-submit check (less than 2 seconds)
  if (Date.now() - submissionTimer.value < 2000) {
    alert('Submission too fast. Please take your time.')
    return
  }

  isSubmitting.value = true
  
  // Send form payload to webhook
  try {
    await $fetch('YOUR_WEBHOOK_URL_HERE', {
      method: 'POST',
      body: values,
    })
  } catch (error) {
    console.error('Webhook error:', error)
  }
  
  console.log('Form submitted:', values)
  isSubmitting.value = false
  isSuccess.value = true
  resetForm()
  
  setTimeout(() => {
    isSuccess.value = false
  }, 5000)
}
</script>

<template>
  <section id="contact" class="section-padding bg-surface-low overflow-hidden relative">
    <!-- Decorative Watermark (Asymmetrical) -->
    <div class="absolute top-[20%] right-[-10%] opacity-5 text-on-surface/10 select-none pointer-events-none">
      <span class="text-[clamp(10rem,30vw,40rem)] font-serif font-black leading-none">OSLO</span>
    </div>

    <div class="container-content relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-24 md:gap-32 items-center">
        <!-- Contact Content -->
        <div class="max-w-[40vw] min-w-[300px]">
          <span class="label-md mb-8 block opacity-40 uppercase">{{ $t('nav.cta') }}</span>
          <h2 v-reveal class="mb-12 fluid-h1">
            {{ $t('contact.title') }}
          </h2>

          <div class="flex flex-col gap-12">
            <div class="flex flex-col gap-2 group">
              <span class="label-md !opacity-100 font-black text-primary">ADDRESS</span>
              <p
                class="fluid-h3 font-serif mb-0 transition-transform duration-500 group-hover:translate-x-4">
                {{ $t('contact.address') }}
              </p>
            </div>

            <div class="flex flex-col gap-2 group" v-if="false">
              <span class="label-md !opacity-100 font-black text-primary">PHONE</span>
              <a :href="`tel:${t('contact.phone')}`"
                class="fluid-h3 font-serif mb-0 transition-transform duration-500 group-hover:translate-x-4 hover:translate-x-6 inline-block">
                {{ $t('contact.phone') }}
              </a>
            </div>

            <div class="flex flex-col gap-2 group">
              <span class="label-md !opacity-100 font-black text-primary">EMAIL</span>
              <a :href="`mailto:${t('contact.email')}`"
                class="fluid-h3 font-serif mb-0 transition-all duration-500 hover:text-primary group-hover:translate-x-4">
                {{ $t('contact.email') }}
              </a>
            </div>
          </div>

          <!-- Socials -->
          <div class="mt-24 md:mt-32" v-if="false">
            <span class="label-md mb-8 block opacity-40 uppercase">{{ $t('contact.social_title') }}</span>
            <div class="flex flex-wrap gap-8">
              <a href="#"
                class="label-md hover:text-primary transition-colors border-b border-on-surface/10 pb-2">INSTAGRAM</a>
              <a href="#"
                class="label-md hover:text-primary transition-colors border-b border-on-surface/10 pb-2">PINTEREST</a>
              <a href="#"
                class="label-md hover:text-primary transition-colors border-b border-on-surface/10 pb-2">LINKEDIN</a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-surface-lowest p-12 md:p-16 rounded-[4rem] shadow-xl transition-all duration-1000">
          <h3 v-reveal="{ delay: 200 }" class="mb-12 font-serif italic fluid-h2">{{ $t('contact.form_title', 'Ready for a reset?') }}</h3>
          
          <Form @submit="onSubmit" v-slot="{ errors }" class="flex flex-col gap-10">
            <!-- Honeypot (Hidden) -->
            <input v-model="honeypot" type="text" class="hidden" aria-hidden="true" />

            <div class="group/field relative">
              <Field
                name="name"
                rules="required|min:2"
                placeholder="Your Name"
                class="w-full bg-transparent border-b-2 py-6 text-xl focus:outline-none transition-all placeholder:opacity-30"
                :class="errors.name ? 'border-primary/50 text-primary' : 'border-on-surface/10 focus:border-primary'"
              />
              <ErrorMessage name="name" class="absolute -bottom-6 left-0 text-xs text-primary uppercase font-black" />
              <div
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/field:w-full transition-all duration-700">
              </div>
            </div>

            <div class="group/field relative">
              <Field
                name="email"
                rules="required|email"
                type="email"
                placeholder="Email Address"
                class="w-full bg-transparent border-b-2 py-6 text-xl focus:outline-none transition-all placeholder:opacity-30"
                :class="errors.email ? 'border-primary/50 text-primary' : 'border-on-surface/10 focus:border-primary'"
              />
              <ErrorMessage name="email" class="absolute -bottom-6 left-0 text-xs text-primary uppercase font-black" />
              <div
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/field:w-full transition-all duration-700">
              </div>
            </div>

            <div class="group/field relative">
              <Field
                as="textarea"
                name="message"
                rules="required|min:10"
                placeholder="Tell us about your space..."
                class="w-full bg-transparent border-b-2 py-6 text-xl focus:outline-none transition-all placeholder:opacity-30 min-h-[120px]"
                :class="errors.message ? 'border-primary/50 text-primary' : 'border-on-surface/10 focus:border-primary'"
              />
              <ErrorMessage name="message" class="absolute -bottom-6 left-0 text-xs text-primary uppercase font-black" />
              <div
                class="absolute bottom-0 left-0 w-0 h-[2px] bg-primary group-focus-within/field:w-full transition-all duration-700">
              </div>
            </div>

            <button 
              type="submit" 
              :disabled="isSubmitting"
              class="btn btn-primary !w-full !rounded-2xl !py-6 !text-lg !font-serif !font-normal disabled:opacity-50 disabled:cursor-not-allowed group relative overflow-hidden"
            >
              <span v-if="!isSubmitting && !isSuccess">Send Request</span>
              <span v-else-if="isSubmitting">Sending...</span>
              <span v-else-if="isSuccess">Sent Successfully</span>
              
              <div v-if="isSubmitting" class="absolute inset-0 bg-primary-dim origin-left animate-pulse"></div>
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>
