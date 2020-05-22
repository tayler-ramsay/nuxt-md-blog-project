<template>
  <div class="wrapper-container absolute">
    <div class="relative">
      <div
        id="navigation"
        class="bg-black flex justify-between items-center text-white py-6 px-3 "
      >
        <nuxt-link class="brand-logo w-64" :to="'./'">
          <img src="../static/logo-white.png" alt="versatile logo"
        /></nuxt-link>
        <div class="nav-icon">
          <i
            v-if="!showNav"
            class="fas fa-bars fa-fw text-green"
            @click="showNavbar"
          ></i>
          <i
            v-else
            class="fas fa-times fa-fw text-green"
            @click="hideNavbar"
          ></i>
        </div>
      </div>
    </div>
    <nuxt-link to="/covid">
      <div
        class="bg-white text-blue-light w-full p-16 pb-3 text-sm text-center"
      >
        COVID-19 is changing the face of retail. Click here to learn more
      </div></nuxt-link
    >

    <transition name="fade">
      <div v-if="showNav" class="nav-container">
        <transition-group class="app-wrapper" name="slide-in">
          <nuxt-link
            v-for="(app, i) in getApps"
            :key="`app${i}`"
            class="app-container"
            :style="{ '--i': i }"
            :to="`/${app.route}`"
          >
            <div class="app-card" @click="hideNavbar">
              <img
                :src="require(`~/static/icons/nav-${app.icon}.png`)"
                alt=""
                class="app-icon"
              />
              <div class="app-title">
                {{ app.title }}
              </div>
            </div>
          </nuxt-link>
        </transition-group>
        <nuxt-link
          :to="'/contact'"
          class="text-base bg-green book-btn font-semibold text-slate text-center"
        >
          <div @click="hideNavbar">Contact Us</div>
        </nuxt-link>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      showNav: false,
      showApps: false,
      apps: [
        {
          title: 'Home',
          icon: 'home',
          route: ''
        },
        {
          title: 'Technology',
          icon: 'tech',
          route: 'omnichannel'
        },
        {
          title: 'For Lenders',
          icon: 'lender',
          route: 'lender'
        },
        {
          title: 'Tailor-made',
          icon: 'build',
          route: 'partners'
        },
        {
          title: 'About Versatile',
          icon: 'versatile',
          route: 'about'
        },
        {
          title: 'News',
          icon: 'contact',
          route: 'news'
        }
      ]
    }
  },
  computed: {
    getApps() {
      return this.showApps === true ? this.apps : []
    }
  },
  methods: {
    showNavbar() {
      this.showNav = !this.showNav
      setTimeout(() => {
        this.showApps = true
      }, 600)
    },
    hideNavbar() {
      this.showNav = !this.showNav
      this.showApps = !this.showApps
    }
  }
}
</script>

<style scoped>
#navigation {
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 2em;
}
.wrapper-container {
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  /* overflow: hidden; */
  background-color: transparent;
  z-index: 100000;
}

.nav-icon {
  top: 0;
  right: 0;
  z-index: 999;
}

.nav-icon > i {
  font-size: 2rem;
}

.nav-container {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  background: inherit;
  overflow-x: hidden;
  margin-top: 3em;
}
.nav-container::before {
  content: '';
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: inherit;
  z-index: 10;
  background-color: rgba(1, 65, 128, 0.4);
  backdrop-filter: blur(4px);
}

.nav-container > .book-btn {
  position: absolute;
  bottom: 3em;
  z-index: 1000;
  padding: 1rem;
  width: 100vw;
}

.nav-container > .app-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  width: 100%;
  margin-top: 2em;
  gap: 1.5rem 0rem;

  /* min-width: 720px; */
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 20px; */
  z-index: 1100;
}

.app-container > .app-card {
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #242b34;
  width: 3em;
  height: 3em;
  border-radius: 1px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}

.app-container > .app-card > img {
  width: 1em;
  padding-bottom: 0.3em;
  align-items: center;
}

.app-container > .app-card > i:hover {
  transform: scale(1.1);
}

.app-container > .app-card > .app-title {
  color: #fff;
  padding-top: 10px;
  font-size: 0.9rem;
  text-align: center;
  max-width: 80%;
  margin: 0 auto;
  position: absolute;
  bottom: 0.8em;
}

@media (min-width: 400px) {
  .app-container > .app-card {
    width: 3.5em;
    height: 3.5em;
  }
  .app-container > .app-card > img {
    width: 1.5em;
    padding-bottom: 0.3em;
  }
  .app-container > .app-card > .app-title {
    font-size: 1rem;
  }
}

.fade-enter-active {
  transition: all 0.8s ease-in-out;
}

.fade-leave-active {
  transition: all 0.3s ease-in-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-in-enter-active,
.slide-in-leave-active {
  transition: opacity 0.5s linear, transform 0.5s cubic-bezier(0.2, 0.5, 0.1, 1);
  transition-delay: calc(0.1s * var(--i));
}

.slide-in-enter,
.slide-in-leave-to {
  opacity: 0;
  transform: translateX(-1em);
}
</style>
