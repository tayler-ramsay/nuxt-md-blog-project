<template>
  <div>
    <div
      class="flex flex-col lg:flex-row justify-evenly items-center py-32 px-8"
      :class="background ? 'bg-local' : ''"
    >
      <div class="max-w-xl">
        <div v-if="callout" class="flex">
          <img class="h-10" src="~/static/icons/logo-ko.png" alt="" />
          <p class="text-white text-2xl">{{ callout }}</p>
        </div>
        <h1
          class="font-semibold max-w-6xl mb-10"
          :class="[color, fontSize, leading]"
        >
          {{ headline }}
        </h1>
      </div>
      <div v-if="tagline" class="max-w-sm">
        <p class="font-semibold text-sm text-blue-light">
          {{ tagline }}
        </p>
        <p>
          {{ paragraph }}
        </p>
        <hr class="w-20 mt-10 bg-blue-light h-1" />
      </div>
    </div>
    <ColumnContent
      v-for="(card, index) in data.cards"
      :key="index"
      :content="card"
      class="grad"
      :column-type="column"
    />
  </div>
</template>

<script>
import ColumnContent from '@/components/ColumnContent.vue'
export default {
  components: {
    ColumnContent
  },
  props: {
    headline: {
      type: String,
      default: ''
    },
    tagline: {
      type: String,
      default: ''
    },
    paragraph: {
      type: String,
      default: ''
    },
    background: {
      type: Boolean,
      default: false
    },
    callout: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'text-blue-light'
    },
    fontSize: {
      type: String,
      default: 'text-6xl'
    },
    leading: {
      type: String,
      default: 'leading-12'
    },
    data: {
      type: Object,
      required: true
    },
    column: {
      type: Number,
      default: 3
    }
  }
}
</script>

<style lang="scss" scoped>
.bg-local {
  background: black;
  background-image: url('../static/bulb.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -350px;
  color: white;
}
</style>
