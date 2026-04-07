import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  future: {
    compatibilityVersion: 4
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  image: {
    format: [ 'avif', 'webp' ],
  },

  css: [ '~/assets/css/main.css' ],

  i18n: {
    baseUrl: 'https://ankarenhold.no',
    defaultLocale: 'en',
    strategy: 'prefix_except_default',
    langDir: 'locales',
    locales: [
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
      { code: 'no', language: 'nb-NO', name: 'Norsk', file: 'no.json' }
    ],
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Schibsted+Grotesk:ital,wght@0,400..900;1,400..900&display=swap' }
      ]
    }
  }
})