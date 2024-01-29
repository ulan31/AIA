// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css', '~/assets/css/reset.css'],
  // routeRules: {
  //   '/api/v1/**': {
  //     proxy: { to: "http://localhost/api/v1/**", },
  //   }
  // },
  modules: [
    'nuxt-socket-io',
  ],
  io: {
    // module options
    sockets: [{
      name: 'main',
      url: 'http://localhost'
    }]
  },
  pages: true,
  axios:{
    baseUrl: 'http://localhost/api/v1'
  },
  buildModules: ['@nuxtjs/vuex'],

})
