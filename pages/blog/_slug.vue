<template>
  <div>
    <h1>Blog Posts</h1>
    <component :is="singlePostComponent" />
  </div>
</template>

<script>
export default {
  async asyncData({ params }) {
    try {
      console.info(params.slug)
      const fileContent = await import(`~/contents/${params.slug}.md`)
      return {
        title: fileContent.attributes.title,
        singlePostComponent: fileContent.vue.component
      }
    } catch (err) {
      console.debug(err)
      return false
    }
  }
}
</script>

<style lang="scss" scoped></style>
