<template>
  <div>
    <Navigation v-if="!mobileView" />
    <NavigationMobile v-if="mobileView" />
    <CovidBanner v-if="!mobileView" />
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
import CovidBanner from '@/components/CovidBanner.vue'
import NavigationMobile from '@/components/NavigationMobile.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Navigation,
    CovidBanner,
    NavigationMobile,
    Footer
  },
  data() {
    return {
      mobileView: false,
      name: ''
    }
  },

  created() {
    this.handelView()
    // eslint-disable-next-line nuxt/no-globals-in-created
    window.addEventListener('resize', this.handelView)
  },
  methods: {
    handelView() {
      this.mobileView = window.innerWidth <= 990
    }
  }
}
</script>

<style lang="scss">
@import url('https://use.fontawesome.com/releases/v5.8.2/css/all.css');
@import url('https://fonts.googleapis.com/css?family=Nunito&display=swap');
html {
  overflow-x: hidden;
  scroll-behavior: smooth;
  /* overflow-y: scroll;  has to be scroll, not auto */
  /* -webkit-overflow-scrolling: touch; */
}

body {
  border: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}

button {
  line-height: 0;
}

.banner {
  z-index: 2000000;
}

.grad {
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}

.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 500ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}

.arrow > .bounce-3 {
  &:hover {
    animation-iteration-count: 0;
  }
}

.bounce-3 {
  animation-name: bounce-3;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: cubic-bezier(0.08, 0.04, 0.82, 1);
}

@keyframes bounce-3 {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
</style>
