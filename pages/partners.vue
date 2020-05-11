<template>
  <div>
    <PartnersHero />
    <div class="grid bg-white flex-col py-15">
      <h1 class="text-blue text-center p-10 text-2xl font-semibold">
        Prime Lenders
      </h1>
      <div class="prime flex justify-center flex-wrap">
        <ul class="flex justify-between flex-wrap ">
          <li
            v-for="(lender, i) in lenders.prime"
            :key="i"
            class="max-w-sm p-12 m-auto lg:m-0"
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
      <h1 class="text-blue text-center p-10 text-2xl font-semibold ">
        Secondary Lenders
      </h1>
      <div class="prime flex justify-center flex-wrap">
        <ul class="flex justify-between flex-wrap">
          <li
            v-for="(lender, n) in lenders.secondary"
            :key="n"
            class="max-w-sm p-24  m-auto lg:m-0"
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
      <h1 class="text-blue text-center p-10 text-2xl font-semibold ">
        No Credit
      </h1>
      <div class="prime flex justify-center flex-wrap">
        <ul class="flex justify-between flex-wrap">
          <li
            v-for="(lender, n) in lenders.noCredit"
            :key="n"
            class="max-w-sm p-24  m-auto lg:m-0"
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
