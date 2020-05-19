<template>
  <div class="bg-white">
    <div class="">
      <div class="">
        <div class="">
          <div class="">
            <nuxt-link to="/news">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                view-box="0 0 6 4"
                aria-hidden="true"
                style="width: 16px; transform: rotate(180deg);"
              >
                <polygon
                  fill="currentColor"
                  points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"
                />
              </svg>
              comeBack
            </nuxt-link>
          </div>
          <div class="text-center">
            <h1 class="text-5xl font-semibold text-blue">
              {{ title }}
            </h1>
            <span class="text-blue-light font-semibold">{{ year }}</span>
          </div>
        </div>
        <ImageResponsive
          v-if="!noMainImage"
          :image-u-r-l="'blog/' + id + '/_main.jpg'"
          class="w-10/12 m-auto py-10"
          :alt="'Blog picture'"
        />
        <component
          :is="extraComponentLoader"
          v-else
          class="elevate-cover__img"
        />
      </div>
    </div>
    <div class="container small">
      <client-only>
        <DynamicMarkdown
          :render-func="renderFunc"
          :static-render-funcs="staticRenderFuncs"
          :extra-component="extraComponent"
        />
      </client-only>
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
        trans: attr.trans,
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

<style lang="scss" scoped></style>
