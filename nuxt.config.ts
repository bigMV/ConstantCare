import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/motion/nuxt'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ],
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  image: {
    format: ['avif', 'webp'],
  },

  css: ['~/assets/css/main.css'],

  i18n: {
    baseUrl: 'https://constantcare.no',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'no', language: 'nb-NO', name: 'Norsk', file: 'no.json' }
    ],
  },

  app: {
    pageTransition: false,
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
      ]
    }
  }
})