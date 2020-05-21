<template>
  <div>
    <AboutHero />
    <Timeline
      v-for="(time, index) in timeline.reverse()"
      :key="index"
      :timeline="time"
      class="p-5 bg-white"
      :class="'style-' + ((index % numInArr) + 1)"
    />
  </div>
</template>

<script>
import AboutHero from '@/components/AboutHero.vue'
import Timeline from '@/components/Timeline.vue'
export default {
  components: {
    AboutHero,
    Timeline
  },
  data() {
    return {
      timeline: [
        {
          date: 1992,
          title: 'Company founded as a Point of Sale software company'
        },
        {
          date: 1994,
          title:
            ' Established as certified SUN Microsystem reseller and consultancy'
        },
        {
          date: 1999,
          title:
            'Built strong roots into large scale enterprise consulting with carrier-grade telecoms'
        },
        {
          date: 2000,
          title:
            'Partnered with Gettysburg College for first web-based education portal'
        },
        {
          date: 2003,
          title: 'Deployed first private-label financing portal'
        },
        {
          date: 2005,
          title: 'Debuted first self-service financing kiosk platform'
        },
        {
          date: 2008,
          title: 'Introduced Smart Sign cloud-based digital signage platform'
        },
        {
          date: 2009,
          title:
            'Pioneered waterfall credit cascade financing on self-service devices'
        },
        {
          date: 2010,
          title:
            'First to market with consumer-mobile financing in elective healthcare'
        },
        {
          date: 2013,
          title:
            'Delivered mobile interactive experiences tied to retail digital signage'
        },
        {
          date: 2016,
          title:
            'Introduced web credit cascade, allowing Versatile to be on any device with a browser'
        },
        {
          date: 2017,
          title:
            'Integrated eCommerce to allow retailers to reach online shoppers with financing'
        },
        {
          date: 2018,
          title:
            'Launched targeted, vertical-specific financing solution for home improvement contracting'
        },
        {
          date: 2019,
          title:
            'Developed end-to-end financing platform for small, independent furniture dealers'
        },
        {
          date: 2020,
          title:
            'Designed and released contactless, transition-to-mobile technologies to bring financing applications directly to consumer-owned devices'
        }
      ]
    }
  },
  computed: {
    numInArr() {
      return 2
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
