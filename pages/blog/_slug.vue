<template>
  <div class="bg-white pb-10">
    <div class="">
      <div class="">
        <div class="px-5">
          <div class="">
            <nuxt-link to="/news">
              <span class="text-blue-light arrow bounce-3 text-lg">
                🡐 Go Back</span
              >
            </nuxt-link>
          </div>
          <div class="lg:text-center">
            <h1
              class="text-2xl lg:text-4xl font-semibold text-blue max-w-4xl m-auto  py-10"
            >
              {{ title }}
            </h1>
            <span class="text-blue-light font-semibold m-auto">{{ year }}</span>
          </div>
        </div>
        <ImageResponsive
          v-if="!noMainImage"
          :image-u-r-l="'blog/' + id + '/_main.jpg'"
          class="lg:w-10/12 m-auto pt-5"
          :alt="'Blog picture'"
        />
        <component
          :is="extraComponentLoader"
          v-else
          class="elevate-cover__img markdown"
        />
      </div>
    </div>
    <div
      class="lg:flex-row justify-between lg:w-10/12 m-auto flex flex-col-reverse p-5"
    >
      <client-only>
        <DynamicMarkdown
          class="markdown"
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponent"
        />
      </client-only>
      <figure class="mb-5">
        posted by: <span class="text-blue-light">{{ author }}</span>
      </figure>
    </div>
  </div>
</template>
<script>
import DynamicMarkdown from '~/components/Markdown/DynamicMarkdown.vue'
export default {
  components: { DynamicMarkdown },
  async asyncData({ params }) {
    try {
      console.info(params.slug + 'THE LOVE')
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
        extraComponent: attr.extraComponent,
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
  @apply leading-tight border-b text-4xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h2 {
  @apply leading-tight border-b text-2xl font-semibold mb-4 mt-6 pb-2;
}

.markdown h3 {
  @apply leading-snug text-lg font-semibold mb-4 mt-6;
}

.markdown h4 {
  @apply leading-none text-base font-semibold mb-4 mt-6;
}

.markdown h5 {
  @apply leading-tight text-sm font-semibold mb-4 mt-6;
}

.markdown h6 {
  @apply leading-tight text-sm font-semibold text-gray-600 mb-4 mt-6;
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

.arrow {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce-3 {
  animation-name: bounce-3;
  animation-timing-function: cubic-bezier(0.08, 0.04, 0.82, 1);
}
@keyframes bounce-3 {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
