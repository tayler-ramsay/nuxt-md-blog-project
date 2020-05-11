import Mode from 'frontmatter-markdown-loader/mode'
/* eslint-disable */
const path = require('path')
const glob = require('glob')

/* https://github.com/jake-101/bael-template */
async function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map((url) => {
      const filepathGlob = urlFilepathTable[url]
      return glob
        .sync(filepathGlob, { cwd: 'content' })
        .map((filepath) => `${url}/${path.basename(filepath, '.md')}`)
    })
  )
}
/* eslint-enable */

export default async () => {
  return {
    mode: 'spa',
    /*
     ** Headers of the page
     */
    head: {
      title: process.env.npm_package_name || '',
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
      { src: '~/plugins/vue-tabs', ssr: false }
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
    generate: {
      routes: await getDynamicPaths({
        '/posts': 'posts/*.md'
      })
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     */
    build: {
      /*
       ** You can extend webpack config here
       */
      extend(config, ctx) {
        // add frontmatter-markdown-loader
        config.module.rules.push({
          test: /\.md$/,
          include: path.resolve(__dirname, 'content'),
          loader: 'frontmatter-markdown-loader',
          options: {
            mode: [Mode.VUE_COMPONENT, Mode.META]
          }
        })
      }
    }
  }
}
