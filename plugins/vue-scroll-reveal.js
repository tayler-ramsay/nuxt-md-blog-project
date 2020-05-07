import Vue from 'vue'
import VueScrollReveal from 'vue-scroll-reveal'

// Scroll reveal api https://scrollrevealjs.org/api/view-offset.html
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal', // A CSS class applied to elements with the v-scroll-reveal directive; useful for animation overrides.
  duration: 1800,
  origin: 'right',
  distance: '100px',
  mobile: false
})
