<template>
  <div class="bg-white py-32">
    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const blogs = await $content('blog')
        .sortBy('year')
        .fetch()

      return {
        blogs
      }
    } catch (err) {
      console.debug(err + 'error')
      return false
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  border-bottom: 1px solid #000;
}

.author {
  bottom: 3em;
}
</style>
