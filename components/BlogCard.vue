<template>
  <div>
    <li class=" lg:w-10/12  m-auto lg:mb-32 lg:pb-32 ">
      <nuxt-link
        :to="{ name: 'blog-slug', params: { slug: blog.name } }"
        class="flex flex-col lg:flex-row list-item relative blog justify-between"
      >
        <div class="lg:w-5/12 py-5 m-auto w-10/12">
          <div class="text-blue-light text-xl font-semibold">
            {{ blog.year }}
          </div>
          <div class="text-blue text-lg py-4">
            {{ blog.title }}
          </div>
          <div class="excerpt">{{ blog.description }}[...]</div>
          <div class="">
            <p class="text-sm font-semibold text-blue-light mt-10">
              <span class="text-slate">Posted by: </span>{{ blog.author }}
            </p>
          </div>
        </div>
        <div class="lg:w-6/12 py-5 w-full">
          <ImageResponsive
            :image-u-r-l="`blog/${blog.id}/_thumbnail.jpg`"
            :classes="'cardThumbnail'"
            :alt="blog.cardAlt"
          />
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
</style>
