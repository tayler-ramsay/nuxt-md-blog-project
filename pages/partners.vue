<template>
  <div class=" bg-white ">
    <PartnersHero />
    <div class="grid flex-col py-15 max-w-3/4 m-auto">
      <h1 class="text-blue text-center p-10 text-3xl font-semibold">
        Prime Credit
      </h1>
      <div class="primes flex flex-wrap justify-center">
        <ul class="lg:flex max-w-6xl m-auto justify-center">
          <li
            v-for="(lender, i) in lenders.prime"
            :key="i"
            class=" w-64 m-5 p-4 flex items-center h-48 flex-1 min-w-1/4 max-w-xs"
          >
            <img
              :src="require(`~/static/lenders/prime/partner-${lender.img}.png`)"
              alt=""
              srcset=""
              class=""
            />
          </li>
        </ul>
      </div>

      <h1 class="text-blue text-center p-10 text-3xl font-semibold ">
        Near-Prime Credit
      </h1>
      <div class="primes flex flex-wrap justify-center">
        <ul class="lg:flex lg:flex-wrap max-w-6xl m-auto justify-between">
          <li
            v-for="(lender, n) in lenders.secondary"
            :key="n"
            class="  w-64 m-5 p-4 flex items-center h-48 flex-1 min-w-1/4 max-w-xs"
          >
            <img
              :src="
                require(`~/static/lenders/secondary/partner-${lender.img}.png`)
              "
              alt=""
              srcset=""
              class=""
            />
          </li>
        </ul>
      </div>

      <h1 class="text-blue text-center p-10 text-3xl font-semibold ">
        No-Credit-Needed
      </h1>
      <div class="primes flex flex-wrap justify-center">
        <ul class="lg:flex lg:flex-wrap max-w-6xl m-auto justify-between">
          <li
            v-for="(lender, n) in lenders.noCredit"
            :key="n"
            class="  w-64 m-5 p-4 flex items-center h-48 flex-1 min-w-1/4 max-w-xs"
          >
            <img
              :src="
                require(`~/static/lenders/noCredit/partner-${lender.img}.png`)
              "
              alt=""
              srcset=""
              class=""
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import PartnersHero from '@/components/PartnersHero.vue'
export default {
  components: {
    PartnersHero
  },
  data() {
    return {
      lenders: {
        prime: [
          { img: 'ads' },
          { img: 'synchrony' },
          { img: 'tdbank' },
          { img: 'wells' }
        ],
        secondary: [
          { img: 'easypay' },
          { img: 'fortiva' },
          { img: 'gaf' },
          { img: 'genesis' },
          { img: 'paytomorrow' },
          { img: 'rmc' },
          { img: 'tidewater' }
        ],
        noCredit: [
          { img: 'acima' },
          { img: 'aff' },
          { img: 'anow' },
          { img: 'flex' },
          { img: 'kornstone' },
          { img: 'mp' },
          { img: 'okinus' },
          { img: 'progressive' },
          { img: 'smart' },
          { img: 'snap' },
          { img: 'tempoe' },
          { img: 'westcreek' },
          { img: 'zibby' }
        ]
      }
    }
  }
}
</script>

<style lang="scss" scoped>
img {
  filter: grayscale(100%);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    filter: grayscale(0%);
  }
}
</style>
