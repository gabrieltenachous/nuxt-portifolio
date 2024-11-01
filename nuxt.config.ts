// https://nuxt.com/docs/api/configuration/nuxt-config
// npm install --save-dev @nuxtjs/color-mode
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxt/content'
  ],
  content: {
    highlight: {
      theme: {
        default: 'min-light',
        dark: 'min-dark'
      },
    }
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  colorMode: {
    classSuffix: ''
  }, 
  nitro: {
    prerender: {
      routes: ['/sitemap.xml']
    }
  }
  // future: {
  //   compatibilityVersion: 4,
  // }
})