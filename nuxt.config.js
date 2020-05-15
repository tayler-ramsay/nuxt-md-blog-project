module.exports = {
  mode: 'spa',

  server: {
    port: 8080,
    timing: true
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Versatile Credit',
    titleTemplate: '%s - Versatile Credit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    // script: [{ src: 'http://localhost:8098' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/vue-unicons', ssr: false },
    { src: '~/plugins/vue-tabs', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false },
    { src: '~/plugins/vue-lazysizes.client.js', ssr: false }
  ],

  tailwindcss: {
    exposeConfig: true
  },
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@aceforth/nuxt-optimized-images',
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Simple usage
    '@teamnovu/nuxt-breaky',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  optimizedImages: {
    optimizeImages: true
  },
  pngquant: true,

  webp: {
    preset: 'default',
    quality: 75
  },
  /*
   ** Nuxt.js modules
   */
  modules: [
    ['nuxt-buefy', { css: false }],
    'nuxt-webfontloader',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  webfontloader: {
    google: {
      families: ['Inter:100,300,600,700,800,900'] //
    }
  },
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    extend(config, { isDev, isClient, loaders: { vue } }) {
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    },

    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    }
  }
}
