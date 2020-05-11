<template>
  <div class="bg-white">
    <OmniHero class="mb-10" />
    <section
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
import Card from '@/components/Card.vue'
export default {
  components: {
    OmniHero,
    Card
  },
  data: () => {
    return {
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
</style>
