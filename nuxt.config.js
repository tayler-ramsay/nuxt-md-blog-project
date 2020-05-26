console.log('NODE ENV', process.env.NODE_ENV)
const path = require('path')
const fs = require('fs')
const MarkdownIt = require('markdown-it')
const Mode = require('frontmatter-markdown-loader/mode')

const builtAt = new Date().toISOString()

function getPaths(lang, type) {
  let initial = lang
  if (lang === 'en') {
    initial = ''
  }
  return fs
    .readdirSync(path.resolve(__dirname, 'contents', `${lang}/${type}`))
    .filter((filename) => path.extname(filename) === '.md')
    .map((filename) => `${initial}/${type}/${path.parse(filename).name}`)
}

const md = new MarkdownIt({
  html: true,
  typographer: true
})

const baseUrl = 'https://localhost:3000'
const productionUrl = 'https://versatilecredit.com'

module.exports = {
  mode: 'spa',

  env: {
    baseUrl,
    productionUrl
  },

  /*
   ** Headers of the page
   */
  head: {
    title: 'Versatile Credit',
    titleTemplate: '%s - Versatile Credit',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content:
          'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no'
      },
      { name: 'msapplication-TileColor', content: '#ffffff' },
      {
        name: 'msapplication-TileImage',
        content: '/favicons/mstile-144x144.png'
      },
      { name: 'theme-color', content: '#c1c1c1' },
      { name: 'robots', content: 'index, follow' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@versatilecredit' },
      { property: 'og:type', content: 'profile' },
      { property: 'og:updated_time', content: builtAt }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-16x16.png',
        sizes: '16x16'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/favicon-32x32.png',
        sizes: '32x32'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-96x96.png',
        sizes: '96x96'
      },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicons/android-chrome-192x192.png',
        sizes: '192x192'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-57x57.png',
        sizes: '57x57'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-60x60.png',
        sizes: '60x60'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-72x72.png',
        sizes: '72x72'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-76x76.png',
        sizes: '76x76'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-114x114.png',
        sizes: '114x114'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-120x120.png',
        sizes: '120x120'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-144x144.png',
        sizes: '144x144'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-152x152.png',
        sizes: '152x152'
      },
      {
        rel: 'apple-touch-icon',
        href: '/favicons/apple-touch-icon-180x180.png',
        sizes: '180x180'
      },
      {
        rel: 'mask-icon',
        type: 'image/png',
        href: '/favicons/safari-pinned-tab.svg',
        color: '#c1c1c1'
      }
    ]
    // script: [{ src: 'http://localhost:8098' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#009CDA' },
  /*
   ** Global CSS
   */
  css: ['@/assets/css/sprite-mixin.scss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/lazyload',
    '~/plugins/globalComponents',
    { src: '~/plugins/vue-scroll-reveal', ssr: false },
    { src: '~/plugins/vue-unicons', ssr: false },
    { src: '~/plugins/vue-tabs', ssr: false },
    { src: '~/plugins/vuelidate', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' }
  ],

  tailwindcss: {
    exposeConfig: true
  },

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Simple usage
    '@teamnovu/nuxt-breaky',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    // TODO: Remove when upgrading to nuxt 2.13+
    '@nuxt/components'
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
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'vue-social-sharing/nuxt',
    'nuxt-responsive-loader',
    '@nuxt/content'
  ],
  webfontloader: {
    google: {
      families: ['Inter:100,300,600,700,800,900'] //
    }
  },

  axios: {
    proxy: true
  },
  sitemap: {
    hostname: 'https://versatilecredit.com'
  },

  proxy: {
    '/api': 'http://localhost:8080'
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, ctx) {
      // add frontmatter-markdown-loader
      config.module.rules.push(
        {
          test: /\.md$/,
          loader: 'frontmatter-markdown-loader',
          include: path.resolve(__dirname, 'contents'),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
            vue: {
              root: 'dynamicMarkdown'
            },
            markdown(body) {
              return md.render(body)
            }
          }
        },
        {
          test: /\.(jpe?g|png)$/i,
          loader: 'responsive-loader',
          options: {
            placeholder: true,
            quality: 60,
            size: 1400,
            adapter: require('responsive-loader/sharp')
          }
        },
        {
          test: /\.(gif|svg)$/,
          loader: 'url-loader',
          query: {
            limit: 1000,
            name: 'img/[name].[hash:7].[ext]'
          }
        }
      )
    },
    postcss: {
      preset: {
        autoprefixer: {
          grid: true
        }
      }
    },
    generate: {
      routes: ['/en', '404'].concat(getPaths('en', 'blog'))
    }
  }
}
