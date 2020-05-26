<template>
  <div>
    <BaseHero
      :headline="data.headline"
      :tagline="data.tagline"
      :paragraph="data.paragraph"
      :background="true"
      :callout="data.callout"
      :data="data"
      :column="2"
    />
    <Timeline
      v-for="(time, index) in reverseTimeline"
      :key="index"
      :timeline="time"
      class="p-5 bg-white"
      :class="'style-' + ((index % numInArr) + 1)"
    />
  </div>
</template>

<script>
import data from '@/content/aboutVersatile/data.json'

export default {
  data() {
    return {
      data
    }
  },
  computed: {
    numInArr() {
      return 2
    },
    reverseTimeline() {
      return this.data.timeline.slice().reverse()
    }
  }
}
</script>

<style lang="scss">
.style-1 {
  div {
    h3 {
      color: #014180;
    }

    p {
      color: #014180;
    }
    span {
      display: none;
    }

    @media (min-width: 1024px) {
      span {
        display: block;
        font-size: 6em;
      }
    }
  }
}
.style-2 {
  div {
    h3 {
      color: #009cda;
    }

    p {
      color: #009cda;
    }

    span {
      display: none;
    }

    @media (min-width: 1024px) {
      span {
        display: block;
        color: #009cda;
        font-size: 6em;
      }
    }
  }
}
</style>
// colors: { // black: '#242B34', // green: '#B2D237', // slate: '#3E4A59', //
blue: { // light: '#009CDA', // default: '#014180' // } // },
