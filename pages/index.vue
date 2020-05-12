<template>
  <div class="container max-w-full">
    <Hero />
    <div class="bg-white px-5 pb-16">
      <div class="client-logos "></div>
      <section
        v-scroll-reveal
        class="flex flex-col md:flex-row md:flex-wrap m-auto max-w-screen-xl"
      >
        <p class="text-blue-light flex-grow text-3xl w-full mt-10">
          How we do it
        </p>
        <client-only>
          <Card
            v-for="(card, index) in cards"
            :key="index"
            :item="card"
            :list="card.list"
            :paragraph="card.description.p"
            class=" lg:flex-1 lg:min-w-1/2  max-w-lg  mb-10"
          ></Card>
        </client-only>
      </section>
      <!-- <section class="py-24">
        <h1 class="text-3xl text-blue-light text-center">How we do it</h1>
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
      </section> -->
    </div>
  </div>
</template>
<script>
import Card from '@/components/Card.vue'
import Hero from '@/components/Hero.vue'

export default {
  components: {
    Card,
    Hero
  },
  data: () => {
    return {
      activeTab: 0,
      cards: [
        {
          title: 'Credit Cascade',
          description: {
            title: 'The Power of Second Look',
            p: [
              'Adding a secondary lender eliminates up to 50% of credit application declines on average, leading to more sales and higher customer satisfaction and loyalty. ',
              'Versatile partners with 25+ industry-leading prime, near-prime, and no credit required providers to enable retailers to address customers throughout the FICO spectrum. To learn more about the providers available on the platform, click here.'
            ]
          },
          img: 'cascade',
          link: '',
          open: false,
          list: [
            'Fast, secure, and seamless application experience.',
            'Unparalleled selection of 25+ prime, near-prime and no credit required providers.'
          ]
        },
        {
          title: 'Consumer Engagement Points',
          description: {
            title: 'Available anywhere',
            p: [
              'Any device with a browser can be leveraged to provide a seamless application experience, including in-store tablets and point of sales systems. Our suite of contactless self-service technologies, including Snap Sign™ and text-to-apply, enable customers to apply directly on their mobile phone.'
              // ' about our platform and devices here.'
            ]
          },
          link: '',
          open: false,
          img: 'consumer',
          list: [
            'Retailers can provide customers with comprehensive financing options whenever and whenever a buying decision is made.',
            'Retailers can leverage in-store devices including kiosks, tablets, and point of sales systems to bring financing to the customer.'
          ]
        },

        {
          title: 'Integration & Customization',
          description: {
            title: 'Stronger Together',
            p: [
              'There are higher rates of success when Versatile adapts the platform to work within a retailer’s existing sales processes, integrating with the tools and resources their customers and associates are already familiar with.  Retailers can represent their brand consistently throughout the application experience on a variety of devices and platforms, in-store and out-of-store.'
            ]
          },
          link: '',
          open: false,
          img: 'custom',
          list: [
            'Customized and integrated with existing business systems.',
            'Customizable the look, feel, and experience of the financing program.'
          ]
        },
        {
          title: 'Data & Analytics',
          description: {
            title: 'Dashboards & Reports',
            p: [
              'Gain insight and visibility into the performance of the financing program at a store, region, and corporate level, with tools to measure by lender, channel, geography and even sales associate. Detailed and customizable reports ensure stakeholders are briefed on key performance metrics on a monthly, weekly, or daily basis. '
            ]
          },
          link: '',
          open: false,
          img: 'data',
          list: [
            'Comprehensive data & analytics empower retailers to leverage actionable data for informed decision making.',
            'Detailed dashboards & reports enable retailers to benchmark performance, optimize their program, and react to problems immediately.'
          ]
        }
      ]
    }
  }
}
</script>
<style>
.title {
  margin-top: 10px;
  margin-bottom: 20px;
}

.description {
  margin-top: 5px;
  max-width: 85%;
  line-height: 22px;
  margin-bottom: 10px;
}

.image {
  height: 160px;
  width: auto;
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
