<template>
  <div>
    <li class="flex flex-col lg:flex-row list-item relative blog">
      <nuxt-link :to="{ name: 'blog-slug', params: { slug: blog.name } }">
        <div class="left flex-1 p-8 lg:p-24">
          <div class="date text-blue-light  text-xl font-semibold">
            {{ blog.title }}
          </div>
          <a :href="blog" target="_blank">
            <div class="title text-blue text-2xl">
              {{ blog.year }}
            </div>
            <div class="excerpt">{{ blog.description }}[...]</div>
            <div class="author lg:absolute">
              <p class="text-sm font-semibold text-blue-light">
                <span class="text-slate">Posted by: </span>{{ blog.id }}
              </p>
            </div>
          </a>
        </div>
        <div class="right flex-1 lg:p-24">
          <a target="_blank">
            <ImageResponsive
              :image-u-r-l="`blog/${blog.id}/_thumbnail.jpg`"
              :classes="'cardThumbnail'"
              :width="'300'"
              :height="'300'"
              :alt="blog.cardAlt"
            />
          </a>
        </div>
      </nuxt-link>
    </li>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy='loaded'] {
    opacity: 1;
  }
}
.blog {
  padding-bottom: 0;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    .blog__title {
      color: blue;
    }
  }

  &__title {
    font-family: 'Tiempos Headline', Arial, sans-serif;
    color: #000;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    color: grey;
  }
}
</style>
