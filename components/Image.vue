<template>
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder${isRounded}`"
  >
    <img
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default: ''
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: ''
    },
    classes: {
      type: String,
      default: ''
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageRequired() {
      return require(`../assets/images/${this.imageURL}`)
    },
    isRounded() {
      return this.rounded ? 'image-placeholder--rounded' : ''
    }
  }
}
</script>

<style lang="scss" scoped>
.image-placeholder {
  overflow: hidden;
  line-height: 0;
  &--rounded {
    border-radius: 100%;
  }
}

img {
  transition: all ease 0.3s;
  opacity: 0;

  &[lazy='loading'] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy='loaded'] {
    opacity: 1;
  }
}
</style>
