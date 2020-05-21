<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 20" :style="style">
    <path
      :fill="color"
      d="M2.117 12l7.527 6.235-.644.765-9-7.521 9-7.479.645.764-7.529 6.236h21.884v1h-21.883z"
    />
  </svg>
</template>

<script>
import svgProps from './utils/svgProps.js'
export default {
  mixins: [svgProps],
  props: {
    color: {
      type: String,
      default: '#1da1f2'
    }
  }
}
</script>
