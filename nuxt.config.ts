export default defineNuxtConfig({
  app: {
    baseURL: '/simple-piano/',
    head: {
      title: 'Nuxt Piano',
      meta: [
        {name: 'description', content: 'A simple piano built with Nuxt 3'},
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/simple-piano/favicon.svg',
        },
      ],
    },
  },
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/sound/nuxt', 'nuxt-icon'],
  sound: {
    sounds: {
      scan: true
    }
  },
  ssr: false,
})
