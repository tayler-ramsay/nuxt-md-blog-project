<template>
  <div class="bg-white py-32">
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
      <div class="p-5 lg:p-0">
        <div class="lg:flex-row justify-between m-auto flex flex-col">
          <nuxt-content :document="fileContent" class="lg:w-8/12" />
          <aside class="lg:w-3/12">
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

            <h3 class="text-xl text-blue font-semibold mb-5">
              Recent Post
            </h3>

            <div v-for="post in posts" :key="post.id" class="">
              <nuxt-link
                :to="{ name: 'blog-slug', params: { slug: post.name } }"
              >
                <h4 class="text-blue-light text-sm font-light mb-3 w-8/12">
                  {{ truncate(post.title, 5) }} [...]
                </h4>

                <ImageResponsive
                  :image-u-r-l="'blog/' + post.id + '/_thumbnail.jpg'"
                  :alt="'Blog picture'"
                  class="mb-12 lg:w-8/12"
                />
              </nuxt-link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const fileContent = await $content('blog', params.slug).fetch()
      const posts = await $content('blog')
        // .sortBy(key, direction) asc desc
        // .only(keys)
        // .limit(n)
        // .skip(n)
        // .search('category', 'Business')
        // .surround(slug, options)
        .where({ id: { $ne: fileContent.id } }) // $eq, $ne, $gt, $gte, $lt, $lte, $in...
        .limit(3)
        .fetch()

      return {
        posts,
        fileContent,
        name: params.slug,
        title: fileContent.title,
        author: fileContent.author,
        year: fileContent.year,
        id: fileContent.id,
        cardAlt: fileContent.cardAlt,
        noMainImage: fileContent.noMainImage,
        description: fileContent.description,
        hashtags: fileContent.hashtags,
        url: `https://www.versatilecredit.com/blog/${fileContent.id}`
      }
    } catch (err) {
      console.debug(err + 'error')
      return false
    }
  },

  computed: {
    ogImage() {
      return `${process.env.productionUrl}/assets/images/blog/${this.id}/_thumbnail.jpg`
    },
    pageTitle() {
      return this.title + ' - ' + this.author
    }
  },
  methods: {
    truncate(str, noWords) {
      return str
        .split(' ')
        .splice(0, noWords)
        .join(' ')
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
          hid: this.id
        },
        { property: 'og:title', content: this.pageTitle },
        { property: 'og:image', content: this.ogImage },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.ogImage }
      ]
    }
  }
}
</script>

<style lang="postcss">
.dark-mode .nuxt-content {
  & h2,
  & h3,
  & blockquote {
    @apply border-gray-800;
  }
  & > code,
  & li > code,
  & p > code,
  & h3 > code {
    @apply bg-gray-800;
  }
}
.nuxt-content h2 {
  @apply text-3xl font-black mb-4 pb-1 border-b -mt-16 pt-24;
  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-green font-normal -ml-6 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
.nuxt-content h3 {
  @apply text-2xl font-extrabold mb-2 pb-1 border-b -mt-16 pt-20;
  & > a {
    @apply ml-6;
    &::before {
      content: '#';
      @apply text-green font-normal -ml-5 pr-1 absolute opacity-100;
    }
  }
  &:hover {
    & > a::before {
      @apply opacity-100;
    }
  }
}
@screen lg {
  .nuxt-content h2 a,
  .nuxt-content h3 a {
    @apply ml-0;
    &::before {
      @apply opacity-0;
    }
  }
}
.nuxt-content ul,
.nuxt-content ol {
  @apply list-disc list-inside mb-4;
  & > li {
    @apply leading-7;
    & > ul {
      @apply pl-4;
    }
  }
}
.nuxt-content ol {
  @apply list-decimal;
}
.nuxt-content {
  & a {
    @apply underline;
  }
  & p {
    @apply mb-4 leading-7;
  }
  & > blockquote {
    @apply py-2 pl-4 mb-4 border-l-4;
    & p:last-child {
      @apply mb-0;
    }
  }
  & > code,
  & li > code,
  & p > code {
    @apply bg-gray-100 p-1 text-sm shadow-xs rounded;
  }
  & h3 > code {
    @apply bg-gray-100 p-1 text-lg shadow-xs rounded;
  }
  & pre[class*='language-'] {
    @apply rounded mt-0 mb-4 bg-gray-800 text-sm relative;
    > code {
      @apply bg-gray-800 relative;
      text-shadow: none;
    }
  }
  & video {
    @apply w-full border rounded shadow-md;
  }
}
.nuxt-content-highlight {
  @apply relative;
  & > .filename {
    @apply absolute right-0 text-gray-600 font-light z-10 mr-2 mt-1 text-sm;
  }
}
</style>
