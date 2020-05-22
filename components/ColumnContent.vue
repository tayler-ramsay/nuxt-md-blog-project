<template>
  <div>
    <div v-if="columnType === 3">
      <div class="flex flex-col lg:flex-row p-6 lg:p-16">
        <div class="m-auto flex flex-col md:flex-row justify-between">
          <div class="font-semibold text-white text-2xl p-6 flex-1">
            <h3 class="mb-5">{{ content.titleA }}</h3>
            <p class="font-normal text-base">
              {{ content.columnA }}
            </p>
          </div>
          <div class="font-semibold text-white text-2xl p-6 flex-1">
            <h3 class="mb-5">{{ content.titleB }}</h3>
            <p class="font-normal text-base ">
              {{ content.columnB }}
            </p>
          </div>
          <div class="font-semibold text-white text-2xl p-6 flex-1">
            <h3 class="mb-5">{{ content.titleC }}</h3>
            <p class="font-normal text-base ">
              {{ content.columnC }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="columnType === 2">
      <div class="flex flex-col lg:flex-row p-6 lg:p-16">
        <div class="m-auto flex flex-col md:flex-row justify-between">
          <div class="font-semibold text-white text-2xl p-6 flex-1 lg:mr-20">
            <h3 class="mb-5">{{ content.titleA }}</h3>
            <p class="font-normal text-base max-w-lg">
              {{ content.columnA }}
            </p>
          </div>
          <div class="font-semibold text-white text-2xl p-6 flex-1">
            <h3 class="mb-5">{{ content.titleB }}</h3>
            <p class="font-normal text-base max-w-lg">
              {{ content.columnB }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="columnType === 1">
      <div class="flex flex-col lg:flex-row p-6 lg:p-16">
        <div class="m-auto flex flex-col md:flex-row justify-between">
          <div class="font-semibold text-white text-2xl p-6 flex-1">
            <h3 class="mb-5">{{ content.titleB }}</h3>
            <p class="font-normal text-base max-w-4xl">
              {{ content.columnB }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
    columnType: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped></style>
