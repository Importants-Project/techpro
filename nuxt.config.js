export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  generate: {
    interval: 1200,
  },
  head: {
    title: "TECHPRO DC - IT ",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      //   { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/logo.png" }],
  },

   // server: {
   //   host: '0.0.0.0',
   // },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/assets/scss/index.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "~/plugins/googlemap.client.js",
    "~/plugins/vuelidate.client.js",
    "~/plugins/pagination.client.js",
    "~/plugins/vueSuggestion.js",
  ],

  axios: {

    baseURL: "https://techprodc.com/api",
    //browserBaseURL: "https://api.techprodc.bestcreative.az/api",
  },
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/fontawesome"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/axios",
    "@nuxtjs/recaptcha",
],
recaptcha: {
    siteKey: "6LeiaV0gAAAAAOajRehwkZ3WpsVLfkqmcNs6eiyT", // Better would be from 'process.env.API_KEY' and with '.env' file
    version: 3, // Or 3
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
