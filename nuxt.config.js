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

const baseUrl = 'https://versatilecredit.com'
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
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    'nuxt-responsive-loader'
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
