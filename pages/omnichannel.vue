<template>
  <div class="bg-white">
    <OmniHero class="mb-10" />
    <!-- <section
      v-scroll-reveal
      class="flex flex-col md:flex-row md:flex-wrap m-auto max-w-screen-xl"
    >
      <client-only>
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :item="card"
          :list="card.list"
          :paragraph="card.description.p"
          class=" lg:flex-1 lg:min-w-1/2  max-w-lg  mb-10 "
        ></Card>
      </client-only>
    </section> -->

    <section class="py-24">
      <h1 class="text-3xl text-blue-light text-center">How we do it</h1>
      <client-only>
        <b-tabs
          v-model="activeTab"
          size="is-large"
          position="is-centered"
          class=" font-semibold text-blue"
        >
          <b-tab-item
            v-for="(card, i) in cards"
            :key="i"
            :label="card.title"
            class="flex flex-col lg:flex-row items-center"
          >
            <div>
              <ul>
                <li
                  v-for="n in card.list"
                  :key="n.id"
                  class="text-xl font-semibold text-blue-light leading-8 flex"
                >
                  <unicon
                    name="check-circle"
                    fill="#B2D237"
                    class="pr-2 pt-1"
                    icon-style="monochrome"
                  ></unicon>

                  <span class="mb-5 max-w-4xl">
                    {{ n }}
                  </span>
                </li>
              </ul>
              <h1 class="font-semibold text-blue text-4xl py-5">
                {{ card.description.title }}
              </h1>
              <p
                v-for="(p, e) in card.description.p"
                :key="e"
                class="lg:max-w-6xl text-lg leading-8 mb-5 flex-1 w-full"
              >
                {{ p }}
              </p>
            </div>
            <div class="flex-1 md:p-24 w-lg min-w-3/4 lg:min-w-1/2 text-center">
              <img
                :src="require(`~/static/icons/${card.img}.png`)"
                alt=""
                srcset=""
                class=" inline-block"
              />
            </div>
          </b-tab-item>
        </b-tabs>
      </client-only>
    </section>
    <div class="bg-slate   border-8 border-black">
      <div
        class="text-blue-light text-left p-8 max-w-2xl m-auto relative py-16 "
      >
        <h3 class="text-2xl text-green font-semibold">
          Build a financing program on your terms
        </h3>
        <div class="text-base text-white  flex justify-start">
          Versatile empowers retailers to find the providers that are the best
          match for their business and customers, while providing the
          flexibility, ease, and freedom to change providers as needed. We
          accomplish this by using our unrivaled network of industry leading
          providers.
        </div>
        <nuxt-link :to="'./partners'" class="flex stage  w-48 pt-5">
          <span class="text-green  inline-flex">Learn More</span>
          <span class="text-green arrow bounce-3">🡒</span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import OmniHero from '@/components/OmniHero.vue'
// import Card from '@/components/Card.vue'
export default {
  components: {
    OmniHero
    // Card
  },
  data: () => {
    return {
      activeTab: 0,
      cards: [
        {
          title: 'In-Store',
          description: {
            title: 'Use the right technology for the job',
            p: [
              'Retailers can leverage existing tablets and point of sales systems to allow customers to apply in-store. Dedicated kiosks are available in standing and tabletop form factors with custom graphic and wrapping options. Engaging with customers throughout the consultation and check-out process can ensure customers are getting the best opportunities for financing.'
            ]
          },
          img: 'store',
          link: '',
          open: false,
          list: [
            'From free-standing kiosks to tablets and mobile phones, a wide array of options are available for in-store applications.',
            'Leverage existing tablets and point of sales systems to enable financing throughout the shopping process.'
          ]
        },
        {
          title: 'eCommerce',
          description: {
            title: 'Turnkey & Custom Integrations Available',
            p: [
              'Swift Apply & Buy™ enables retailers to integrate consumer financing on their website with minimal effort. More highly integrated solutions are available, leveraging are rich set of APIs and SDKs to tightly integrate financing into the most sophisticated eCommerce sites.',
              'Turnkey solutions are available for popular eCommerce platforms, such as Spotify.   For more information on other eCommerce platforms, contact us.'
            ]
          },

          link: '',
          open: false,
          img: 'ecomm',

          list: [
            'Comprehensive data & analytics empower retailers to leverage actionable data for informed decision making.',
            'Detailed dashboards & reports enable retailers to benchmark performance, optimize their program, and react to problems immediately.'
          ]
        },
        {
          title: 'Contactless Self-Service & Mobile',
          description: {
            title: 'Snap Sign™ Anywhere',
            p: [
              'There are higher rates of success when Versatile adapts the platform to work within a retailer’s existing sales processes, integrating with the tools and resources their customers and associates are already familiar with.  Retailers can represent their brand consistently throughout the application experience on a variety of devices and platforms, in-store and out-of-store.'
            ]
          },

          link: '',
          open: false,
          img: 'mobile',

          list: [
            'Safeguard concerns of personal health by using Versatile Contactless technology.',
            'Harness the power of the consumer mobile device for self-service financing and checkout.'
          ]
        },
        {
          title: 'Remote and In-Home Sales',
          description: {
            title: 'From the comfort of home',
            p: [
              'Versatile works retailers to create innovative tools that complement your remote and in-home sales processes.  Versatile uses a variety of technology to facilitate financing in the home, including secure links with anti-fraud measures, electronic signature technology, and document management.'
            ]
          },

          link: '',
          open: false,
          img: 'home',

          list: [
            'Take advantage of rapidly growing opportunities for financing remotely.  Great for out-of-store, consultative sales.',
            'Send customers secure financing links to apply on any consumer-owned device.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.stage {
  position: absolute;
  right: 0;
}
.arrow {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce-3 {
  animation-name: bounce-3;
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

.b-tabs > .tab-content > .tab-item {
  padding: 2rem;
}

.slide-next-enter-active,
.slide-next-leave-active,
.slide-prev-enter-active,
.slide-prev-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-prev-leave-to,
.slide-next-enter {
  transform: translate3d(-100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-prev-enter,
.slide-next-leave-to {
  transform: translate3d(100%, 0, 0);
  position: absolute;
  width: 100%;
}

.slide-down-enter-active,
.slide-down-leave-active,
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 250ms cubic-bezier(0.785, 0.135, 0.15, 0.86);
}

.slide-up-leave-to,
.slide-down-enter {
  transform: translate3d(0, -100%, 0);
  position: absolute;
  height: 100%;
}

.slide-up-enter,
.slide-down-leave-to {
  transform: translate3d(0, 100%, 0);
  position: absolute;
  height: 100%;
}

.slide-enter-active {
  transition: 150ms ease-out;
}

.slide-leave-active {
  transition: 150ms ease-out;
  transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slide-enter-to,
.slide-leave {
  max-height: 100px;
  overflow: hidden;
}

.slide-enter,
.slide-leave-to {
  overflow: hidden;
  max-height: 0;
}

.navbar-tabs {
  align-items: stretch;
  display: flex;
  flex-shrink: 0;
  min-height: 3.25rem;
}

.navbar-brand a.navbar-item:focus,
.navbar-brand a.navbar-item:hover {
  background-color: transparent;
}

.navbar-tabs {
  -webkit-overflow-scrolling: touch;
  max-width: 100vw;
  overflow-x: auto;
  overflow-y: hidden;
}

.tabs {
  -webkit-overflow-scrolling: touch;
  align-items: stretch;
  display: flex;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
}

.tabs a {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
}

.tabs a:hover {
  cursor: pointer;
  border-bottom-color: #009cda;
  color: #009cda;
}

.tabs li {
  display: block;
}

.tabs li.is-active a {
  border-bottom-color: #b2d237;
  color: #b2d237;
}

.tabs ul {
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
}

.tabs ul.is-left {
  padding-right: 0.75em;
}

.tabs ul.is-center {
  flex: none;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
}

.tabs ul.is-right {
  justify-content: flex-end;
  padding-left: 0.75em;
}

.tabs .icon:first-child {
  margin-right: 0.5em;
}

.tabs .icon:last-child {
  margin-left: 0.5em;
}

.tabs.is-centered ul {
  justify-content: center;
}

.tabs.is-right ul {
  justify-content: flex-end;
}

.tabs.is-boxed a {
  border: 1px solid transparent;
  border-radius: 4px 4px 0 0;
}

.tabs.is-boxed a:hover {
  background-color: whitesmoke;
  border-bottom-color: #dbdbdb;
}

.tabs.is-boxed li.is-active a {
  background-color: white;
  border-color: #dbdbdb;
  border-bottom-color: transparent !important;
}

.tabs.is-fullwidth li {
  flex-grow: 1;
  flex-shrink: 0;
}

.tabs.is-toggle a {
  border-color: #dbdbdb;
  border-style: solid;
  border-width: 1px;
  margin-bottom: 0;
  position: relative;
}

.tabs.is-toggle a:hover {
  background-color: whitesmoke;
  border-color: #b5b5b5;
  z-index: 2;
}

.tabs.is-toggle li + li {
  margin-left: -1px;
}

.tabs.is-toggle li:first-child a {
  border-radius: 4px 0 0 4px;
}

.tabs.is-toggle li:last-child a {
  border-radius: 0 4px 4px 0;
}

.tabs.is-toggle li.is-active a {
  background-color: #b2d237;
  border-color: #b2d237;
  color: white;
  z-index: 1;
}

.tabs.is-toggle ul {
  border-bottom: none;
}

.tabs.is-toggle.is-toggle-rounded li:first-child a {
  border-bottom-left-radius: 290486px;
  border-top-left-radius: 290486px;
  padding-left: 1.25em;
}

.tabs.is-toggle.is-toggle-rounded li:last-child a {
  border-bottom-right-radius: 290486px;
  border-top-right-radius: 290486px;
  padding-right: 1.25em;
}

.tabs.is-small {
  font-size: 0.75rem;
}

.tabs.is-medium {
  font-size: 1.25rem;
}

.tabs.is-large {
  font-size: 1.5rem;
}
.b-tabs .tabs {
  margin-bottom: 0;
  flex-shrink: 0;
}

.b-tabs .tabs li.is-disabled {
  pointer-events: none;
  cursor: not-allowed;
  opacity: 0.5;
}

.b-tabs .tab-content {
  position: relative;
  overflow: visible;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 20rem;
}

.b-tabs .tab-content .tab-item {
  flex-shrink: 0;
  flex-basis: auto;
}

.b-tabs .tab-content.is-transitioning {
  overflow: hidden;
}

.b-tabs:not(:last-child) {
  margin-bottom: 1.5rem;
}

.b-tabs.is-fullwidth {
  width: 100%;
}

.b-tabs.is-vertical {
  display: flex;
  flex-direction: row;
}

.b-tabs.is-vertical > .tabs ul {
  flex-direction: column;
  border-bottom-color: transparent;
}

.b-tabs.is-vertical > .tabs ul li {
  width: 100%;
}

.b-tabs.is-vertical > .tabs ul li a {
  justify-content: left;
}

.b-tabs.is-vertical > .tabs.is-boxed li a {
  border-bottom-color: transparent !important;
  border-right-color: #dbdbdb !important;
  border-radius: 4px 0 0 4px;
}

.b-tabs.is-vertical > .tabs.is-boxed li.is-active a {
  border-bottom-color: #dbdbdb !important;
  border-right-color: transparent !important;
}

.b-tabs.is-vertical > .tabs.is-toggle li + li {
  margin-left: 0;
}

.b-tabs.is-vertical > .tabs.is-toggle li:first-child a {
  border-radius: 4px 4px 0 0;
}

.b-tabs.is-vertical > .tabs.is-toggle li:last-child a {
  border-radius: 0 0 4px 4px;
}

.b-tabs.is-vertical > .tabs.is-fullwidth li a {
  height: 100%;
}

.b-tabs.is-vertical > .tab-content {
  flex-grow: 1;
}

.b-tabs.is-vertical.is-right {
  flex-direction: row-reverse;
}

.b-tabs.is-vertical.is-right > .tabs ul a {
  flex-direction: row-reverse;
}

.b-tabs.is-vertical.is-right > .tabs ul a .icon:first-child {
  margin-right: 0;
  margin-left: 0.5em;
}

.b-tabs.is-vertical.is-right > .tabs.is-boxed li a {
  border-bottom-color: transparent !important;
  border-right-color: transparent !important;
  border-left-color: #dbdbdb !important;
  border-radius: 0 4px 4px 0;
}

.b-tabs.is-vertical.is-right > .tabs.is-boxed li.is-active a {
  border-bottom-color: #dbdbdb !important;
  border-right-color: #dbdbdb !important;
  border-left-color: transparent !important;
}

.b-tabs.is-multiline > .tabs ul {
  flex-wrap: wrap;
  flex-shrink: 1;
}

.tag .has-ellipsis {
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
