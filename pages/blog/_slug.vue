<template>
  <div class="bg-white py-10">
    <nuxt-link to="/news" class="flex items-center text-blue-light">
      <div class=" arrow text-lg p-5">
        <BaseArrowL class="bounce-3" />
      </div>
      Go Back
    </nuxt-link>
    <div class="max-w-6xl m-auto">
      <div class="p-5 lg:p-0">
        <h1 class="text-2xl lg:text-4xl font-semibold text-blue max-w-4xl mb-5">
          {{ title }}
        </h1>

        <div class="text-blue-light font-semibold m-auto mb-5">{{ year }}</div>
      </div>

      <ImageResponsive
        v-if="!noMainImage"
        :image-u-r-l="'blog/' + id + '/_main.jpg'"
        class="lg:mb-10 mb-4"
        :alt="'Blog picture'"
      />
      <component
        :is="extraComponentLoader"
        v-else
        class="elevate-cover__img markdown"
      />
      <div class="p-5 lg:p-0">
        <div class="lg:flex-row justify-between m-auto flex flex-col-reverse">
          <client-only>
            <DynamicMarkdown
              class="markdown"
              :render-func="renderFunc"
              :static-render-funcs="staticRenderFuncs"
              :extra-component="extraComponent"
            />
          </client-only>
          <div class="sidebar m-w-sm">
            <figure class="mb-5">
              posted by: <span class="text-blue-light">{{ author }}</span>
            </figure>
            <div class="flex justify-between w-16 mt-5 mb-10">
              <ShareNetwork
                network="twitter"
                :url="url"
                :title="title"
                :hashtags="hashtags"
                :description="description"
                twitter-user="tayler_ramsay"
              >
                <TwitterLogo />
              </ShareNetwork>
              <ShareNetwork
                network="LinkedIn"
                :url="url"
                :title="title"
                :description="description"
              >
                <LinkedInLogo />
              </ShareNetwork>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TwitterLogo from '~/components/svg/TwitterLogo.vue'
import LinkedInLogo from '~/components/svg/LinkedInLogo.vue'
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'
export default {
  components: { DynamicMarkdown, TwitterLogo, LinkedInLogo },
  async asyncData({ params }) {
    try {
      const fileContent = await import(`~/contents/en/blog/${params.slug}.md`)
      const attr = fileContent.attributes
      return {
        name: params.slug,
        title: attr.title,
        author: attr.author,
        year: attr.year,
        id: attr.id,
        cardAlt: attr.cardAlt,
        noMainImage: attr.noMainImage,
        description: attr.description,
        hashtags: attr.hashtags,
        extraComponent: attr.extraComponent,
        url: `https://www.versatilecredit.com/blog/${attr.id}`,
        renderFunc: `(${fileContent.vue.render})`,
        staticRenderFuncs: `[${fileContent.vue.staticRenderFns}]`,
        image: {
          main: attr.image && attr.image.main,
          og: attr.image && attr.image.og
        }
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  },

  computed: {
    extraComponentLoader() {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/components/blog/${this.extraComponent}.vue`)
    },
    ogImage() {
      return `${process.env.baseUrl}/images/blog/${this.id}/_thumbnail.jpg`
    },
    pageTitle() {
      return this.title + ' – ' + this.author
    },
    hreflang() {
      if (!this.trans) {
        return ''
      }
      return {
        hid: 'alternate-hreflang-' + this.showLocales[0].iso,
        rel: 'alternate',
        href: `${process.env.baseUrl +
          (this.showLocales[0].code === 'en' ? '' : '/es')}/blog/${this.trans}`,
        hreflang: this.showLocales[0].code
      }
    }
  },

  head() {
    return {
      title: this.pageTitle,
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { name: 'author', content: this.author },
        {
          name: 'description',
          property: 'og:description',
          content: this.description,
          hid: 'description'
        },
        { property: 'og:title', content: this.pageTitle },
        { property: 'og:image', content: this.ogImage },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.ogImage }
      ],
      link: [this.hreflang]
    }
  }
}
</script>

<style lang="postcss">
.markdown {
  @apply max-w-3xl;
}

.markdown > p {
  @apply mb-10;
}

.markdown > * + * {
  margin-bottom: 3rem;
}

.markdown li + li {
  @apply mt-1;
}

.markdown li > p + p {
  @apply mt-6;
}

.markdown strong {
  @apply font-semibold;
}

.markdown a {
  @apply text-blue font-semibold;
}

.markdown strong a {
  @apply font-bold;
}

.markdown h1 {
  @apply leading-snug text-4xl font-semibold mb-5;
}

.markdown h2 {
  @apply leading-snug text-2xl font-semibold mb-5;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-snug text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-snug text-sm font-semibold text-gray-600 mb-4 mt-6;
}

.markdown blockquote {
  @apply text-base border-l-4 border-gray-300 pl-4 pr-4 text-gray-600;
}

.markdown code {
  @apply font-mono text-sm inline bg-gray-200 rounded px-1 py-5;
}

.markdown pre {
  @apply bg-gray-100 rounded p-4;
}

.markdown pre code {
  @apply block bg-transparent p-0 overflow-visible rounded-none;
}

.markdown ul {
  @apply text-base pl-8 list-disc;
}

.markdown ol {
  @apply text-base pl-8 list-decimal;
}

.markdown kbd {
  @apply text-xs inline-block rounded border px-1 py-5 align-middle font-normal font-mono shadow;
}

.markdown table {
  @apply text-base border-gray-600;
}

.markdown th {
  @apply border py-1 px-3;
}

.markdown td {
  @apply border py-1 px-3;
}

/* Override pygments style background color. */
.markdown .highlight pre {
  @apply bg-gray-100 !important;
}
</style>
