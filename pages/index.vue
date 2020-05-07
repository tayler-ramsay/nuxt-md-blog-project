<template>
  <div class="container max-w-full">
    <Hero />
    <div class="bg-white">
      <div class="client-logos ">
        <img src="../assets/client-logos.png" alt="" srcset="" class="m-auto" />
      </div>
      <section
        v-scroll-reveal
        class="flex flex-col md:flex-row md:flex-wrap m-auto max-w-screen-xl"
      >
        <p class="text-blue-light flex-grow text-2xl w-full my-10">
          How we do it
        </p>
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
      cards: [
        {
          title: 'Credit Cascade',
          description: {
            title: 'The Power of Second Look',
            p: [
              'Adding a secondary lenders eliminates up to 50% of credit application declines on average, leading to more sales and higher customer satisfaction and loyalty. ',

              'Versatile partners with 25+ industry-leading prime, near-prime, and no credit required providers to enable retailers to address customers throughout the FICO spectrum. To learn more about the providers available on our platform, click here.'
            ]
          },
          img: 'waterfall-icon',
          link: 'Learn More',
          open: false,
          list: [
            'Fast, secure, and seamless application experience.',
            'Unparalleled selection of 25+ prime, near-prime and no credit required providers.'
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

          link: 'Learn More',
          open: false,
          img: 'waterfall-icon',

          list: [
            'Comprehensive data & analytics empower retailers to leverage actionable data for informed decision making.',
            'Detailed dashboards & reports enable retailers to benchmark performance, optimize their program, and react to problems immediately.'
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

          link: 'Learn More',
          open: false,
          img: 'waterfall-icon',

          list: [
            'Customized and integrated with existing business systems.',
            'Customizable the look, feel, and experience of the financing program.'
          ]
        },
        {
          title: 'Consumer Engagement Points',
          description: {
            title: 'Available anywhere',
            p: [
              'Any device with a browser can be leveraged to provide a seamless application experience, including in-store tablets and point of sales systems. Our suite of contactless self-service technologies, including Snap Sign™ and text-to-apply, enable customers to apply directly on their mobile phone.',

              'Learn more about our platform and devices here.'
            ]
          },

          link: 'Learn More',
          open: false,
          img: 'waterfall-icon',

          list: [
            'Retailers can provide customers with comprehensive financing options wherever and whenever a buying decision is made, in-store and online.',
            'In-store devices like kiosks, tablets, and point of sales systems can be leveraged to provide customers with financing throughout the sales process.'
          ]
        }
      ]
    }
  }
}
</script>
