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
  colorMode: {
    classSuffix: ''
  }
  // future: {
  //   compatibilityVersion: 4,
  // }
})