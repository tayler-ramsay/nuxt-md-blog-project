<template>
  <section>
    <div class="blogs__top"></div>
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

<style lang="scss"></style>
