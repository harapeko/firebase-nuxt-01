export default {
  // server: {
  //   port: 8080, // default: 3000
  //   host: '0.0.0.0', // default: localhost,
  //   timing: false,
  // },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'firebase-nuxt-01',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [{ src: '~/plugins/firebase', ssr: true }],

  env: {
    FIREBASE_API_KEY: 'AIzaSyALy833eEMLi5Ho9Bc8u9NUsqUKmp2Olh8',
    FIREBASE_AUTH_DOMAIN: 'fir-nuxt-01-c11e0.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://firebase-nuxt-01.firebaseio.com',
    FIREBASE_PROJECT_ID: 'firebase-nuxt-01',
    FIREBASE_STORAGE_BUCKET: 'firebase-nuxt-01.appspot.com',
    FIREBASE_MESSAGING_SENDER_ID: '660587646928',
    FIREBASE_APP_ID: '1:660587646928:web:a510bdae63b48c79b033d5',
    FIREBASE_MEASUREMENT_ID: 'G-754RPVVMWN',
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {},
}
