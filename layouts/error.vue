<template>
  <div
    class="bg-slate wrapper border-8 border-black flex flex-col lg:pl-20 p-3 pt-40"
  >
    <div v-if="error.statusCode === 404">
      <h1 class="font-bold text-green mb-5 text-7xl heading">Oops!</h1>
      <p
        class="text-blue-light font-semibold text-2xl lg:text-3xl max-w-lg mb-5"
      >
        We can't seem to find the page you are looking for.
      </p>
      <p class="font-semibold text-green mb-5">
        Error code: {{ error.statusCode }}
      </p>
    </div>
    <div v-else>
      <h1 class="font-bold text-green mb-5 text-7xl heading">Oh No!</h1>
      <p
        class="text-blue-light font-semibold text-2xl lg:text-3xl max-w-md mb-5"
      >
        Something went wrong. Please try agian
      </p>
      <p class="font-semibold text-green mb-5">
        Error code: {{ error.statusCode }}
      </p>
    </div>
    <nuxt-link to="/" class="text-white flex"
      ><BaseArrowL color="#fff" class="mr-3" />Home page</nuxt-link
    >
  </div>
</template>
<script>
export default {
  props: ['error'],
  layout: 'my-error-layout'
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 70vh;
}
.heading {
  font-size: 6rem;
  line-height: 9rem;
  @media (min-width: 768px) {
    font-size: 8rem;
  }
}
</style>
