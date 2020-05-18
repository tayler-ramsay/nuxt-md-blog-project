<template>
  <section>
    <div class="blogs__top">
      <div>
        <h2>{{ 'posts' }}</h2>
      </div>
    </div>
    <ul>
      <blog-card v-for="blog in blogs" :key="blog.name" :blog="blog" />
    </ul>
  </section>
</template>

<script>
import BlogCard from '@/components/BlogCard.vue'
export default {
  components: {
    BlogCard
  },
  props: {
    blogs: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.blogs {
  margin: 0;

  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  display: grid;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
  }
}
</style>
