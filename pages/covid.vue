<template>
  <div class="bg-white">
    <div
      class="bg-slate relative flex-1 wrapper flex justify-center pt-32 lg:pt-0"
    >
      <video
        id="myVideo"
        autoplay
        controls
        :poster="require('~/assets/video/poster.png')"
        type="video/webm"
      >
        <source :src="require('~/assets/video/vid.mp4')" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    </div>
    <MarketingHero class="flex-1" />
    <ImageResponsive
      :image-u-r-l="'marketing/poster.png'"
      :classes="'cardThumbnail w-9/12 lg:w-6/12 m-auto'"
    />
    <div class="flex flex-wrap p-5 max-w-4xl m-auto">
      <client-only>
        <Card
          v-for="(card, index) in cards"
          :key="index"
          :item="card"
          :list="card.list"
          :paragraph="card.description.p"
          class=""
        ></Card>
      </client-only>
    </div>
  </div>
</template>

<script>
import MarketingHero from '@/components/MarketingHero.vue'
import Card from '@/components/Card.vue'
export default {
  components: {
    MarketingHero,
    Card
  },
  data: () => {
    return {
      activeTab: 0,
      cards: [
        {
          title: 'Introducing Snap Sign',
          description: {
            title: 'Introducing Snap Sign',
            p: [
              'Retailers can leverage existing tablets and point of sales systems to allow customers to apply in-store. Dedicated kiosks are available in standing and tabletop form factors with custom graphic and wrapping options. Engaging with customers throughout the consultation and check-out process can ensure customers are getting the best opportunities for financing.'
            ]
          },

          link: '',
          open: false,
          list: [
            'Snap Sign is easy. Customers simply point their smartphone camera at the Snap Sign signage and they are instantly taken to a financing application on their phone.',
            'Snap Sign can integrate into any system with a web browser. Retailers can leverage existing technology, including in-store kiosks, tablets, or any device — at no extra cost.  Dedicated hardware is also available.',
            'Give your customers more control over their shopping journey and let them choose how to manage their own social distancing.',
            'The World Health Organization advises the use of contactless payments to reduce the risk of transmission when possible.'
          ]
        },
        {
          title: 'Remote & In-Home Sales',
          description: {
            title: 'Bring Financing Home',
            p: [
              'Take advantage of rapidly growing opportunities for financing remotely. Great for out-of-store, consultative sales.',
              'Versatile can work hand-in-hand with your business to create financing tools that work with your remote and in-home sales processes.',
              'Send customers secure financing links to apply on any consumer-owned device'
            ]
          },

          link: '',
          open: false,

          list: [
            'Take advantage of rapidly growing opportunities for financing remotely. Great for out-of-store, consultative sales.',
            'Versatile can work hand-in-hand with your business to create financing tools that work with your remote and in-home sales processes.',
            'Send customers secure financing links to apply on any consumer-owned device while ensuring that their data and information is secure.'
          ]
        },
        {
          title: 'eCommerce',
          description: {
            title: 'Offer customers the same great financing everywhere',
            p: [
              'There are higher rates of success when Versatile adapts the platform to work within a retailer’s existing sales processes, integrating with the tools and resources their customers and associates are already familiar with.  Retailers can represent their brand consistently throughout the application experience on a variety of devices and platforms, in-store and out-of-store.'
            ]
          },

          link: '',
          open: false,

          list: [
            'Provide customers with comprehensive financing options online, consistent with the brick-and-mortar experience, no matter where they decide to shop.',
            'Reduce abandoned carts by providing financing for consumers throughout the FICO spectrum and providing the customer the opportunity to purchase the products they want online.',
            'A wide range of integration options are available, from simple copy and paste code, eCommerce platform plugins (including Shopify), and API-level integrations.'
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
video {
  /* override other styles to make responsive */
  width: 100% !important;
  height: auto !important;
}
</style>
