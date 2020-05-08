<template>
  <div
    class="flex m-auto w-full bg-white flex-col lg:flex-row space-y-20 py-20"
  >
    <div class="card-wrapper max-w-5xl m-auto flex flex-col lg:flex-row px-8 ">
      <div class="bio-image mx-20">
        <img src="../assets/bioPics/waterfall-icon.svg" alt="" srcset="" />
      </div>
      <div class="bio-card  pt-20 text-left relative">
        <p class="text-blue-light">{{ bio.name }}</p>
        <h3 class="text-blue text-3xl font-semibold py-5 w-64">
          {{ bio.title }}
        </h3>
        <p class="mb-5">{{ bio.description }}</p>
        <a
          :href="`https://linkedin.com/${bio.link}`"
          class="absolute right-0 text-blue-light"
          >LinkedIn</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    bio: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.bio-image {
  max-width: 500px;
  min-width: 300px;
  /* width: 80%; */
  /* margin: auto; */
}
</style>
