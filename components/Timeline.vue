<template>
  <div class=" border-b border-blue-light">
    <div
      class="flex flex-col lg:flex-row flex-start lg:items-center lg:py-10 lg:max-w-1/2 m-auto"
    >
      <h3 class="font-semibold text-5xl">{{ timeline.date }}</h3>
      <span class="px-10 text-3xl invisible lg:visible"> | </span>
      <p class="text-2xl py-5 lg:max-w-5xl">
        {{ timeline.title }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    timeline: {
      type: Object,
      required: true
    },
    reverse: {
      type: String,
      default: 'flex-row'
    }
  }
}
</script>

<style scoped></style>
