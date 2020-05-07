/* eslint-disable prettier/prettier */ /* eslint-disable prettier/prettier */
<template>
  <div class="container absolute">
    <div
      id="navigation"
      class="bg-black flex justify-between items-center text-white py-6 px-3"
    >
      <div class="text-white">Versatile</div>
      <div class="nav-icon">
        <i
          v-if="!showNav"
          class="fas fa-bars fa-fw text-green"
          @click="showNavbar"
        ></i>
        <i v-else class="fas fa-times fa-fw text-green" @click="hideNavbar"></i>
      </div>
    </div>
    <transition name="fade">
      <div v-if="showNav" class="nav-container fixed">
        <transition-group class="app-wrapper" name="slide-in">
          <div
            v-for="(app, i) in getApps"
            :key="`app${i}`"
            class="app-container"
            :style="{ '--i': i }"
          >
            <div
              class="app-card"
              :style="{
                background:
                  'linear-gradient(to bottom, ' +
                  app.colorTop +
                  ', ' +
                  app.colorBottom +
                  ')'
              }"
            >
              <i :class="app.icon"></i>
              <div class="app-title">
                {{ app.title }}
              </div>
            </div>
          </div>
        </transition-group>
        <button class="text-white  bg-green book-btn font-semibold">
          Book A Demo
        </button>
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
          icon: 'fas fa-igloo fa-fw',
          colorTop: '#242B34',
          colorBottom: '#242B34'
        },
        {
          title: 'Omnichannel',
          icon: 'fas fa-comment-dots fa-fw',
          colorTop: '#242B34',
          colorBottom: '#242B34'
        },
        {
          title: 'For Lender',
          icon: 'fas fa-comment-dots fa-fw',
          colorTop: '#242B34',
          colorBottom: '#242B34'
        },
        {
          title: 'News',
          icon: 'fas fa-comment-dots fa-fw',
          colorTop: '#242B34',
          colorBottom: '#242B34'
        },
        {
          title: 'Versatile',
          icon: '',
          colorTop: '#242B34',
          colorBottom: '#242B34'
        },
        {
          title: 'Contact',
          icon: 'fas fa-comment-dots fa-fw',
          colorTop: '#242B34',
          colorBottom: '#242B34'
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
.container {
  background-attachment: fixed;
  background-size: cover;
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background-color: transparent;
  z-index: 888;
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
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  min-height: 100vh;
  background: inherit;
  overflow-x: hidden;
}
.nav-container::before {
  content: '';
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background: inherit;
  z-index: 10;
  background-color: rgba(1, 65, 128, 0.6);
}

.nav-container > .book-btn {
  position: absolute;
  bottom: 80px;
  z-index: 100;
  padding: 1rem;
  width: 100vw;
}

.nav-container > .app-wrapper {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  width: 100%;
  margin-top: 2em;
  gap: 1.5rem 1rem;

  /* min-width: 720px; */
}

.app-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  /* padding: 20px; */
  z-index: 11;
}

.app-container > .app-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 4em;
  height: 4em;
  border-radius: 1px;
  box-shadow: 5px 5px 10px 0 rgba(0, 0, 0, 0.4);
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
}
.app-container > .app-card > i {
  color: #fff;
}
.app-container > .app-card > i:hover {
  transform: scale(1.1);
}

.app-container > .app-card > .app-title {
  color: #fff;
  padding-top: 10px;
  font-size: 1.5rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.8s ease-in-out;
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
