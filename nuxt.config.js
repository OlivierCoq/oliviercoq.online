export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OlivierCoq.Online',
    htmlAttrs: {
      lang: 'en'
    }, 
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap' },
      { rel: 'stylesheet', href: 'https://unpkg.com/vue-agile@2.0.0/dist/VueAgile.css' },
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/hamburgers/1.2.1/hamburgers.min.css' }
    ],
    script:[
      { src: 'https://kit.fontawesome.com/f76cb178ad.js' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css 
  css: [
    { src: '~/assets/scss/main.scss', lang: 'sass' }
  ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/bootstrap.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/style-resources', 
    '@nuxtjs/axios'
  ],
  styleResources: {
    scss: [
      '~assets/scss/*.scss',
    ]
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
