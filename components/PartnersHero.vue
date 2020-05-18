<template>
  <div>
    <div
      class="bg-white flex flex-col lg:flex-row justify-evenly p-16 items-center py-32"
    >
      <div class="max-w-xl">
        <div class="flex"></div>
        <h1
          class="text-6xl font-semibold text-blue-light max-w-6xl leading-12 mb-10"
        >
          Build a financing program on your terms.
        </h1>
      </div>
      <div class="max-w-sm">
        <p class="font-semibold text-sm text-blue-light">
          Experience the power choice
        </p>
        <p>
          Versatile empowers retailers to find the providers that are the best
          match for their business and customers, while providing the
          simplicity, flexibility and freedom to change providers as needed. We
          accomplish this with an unrivaled network of lending and providing
          partners.
        </p>
        <hr class="w-20 mt-10 bg-blue-light" />
      </div>
    </div>
    <ColumnContent
      v-for="(card, index) in cards"
      :key="index"
      :content="card"
      class="grad"
      :column-type="3"
    />
  </div>
</template>

<script>
import ColumnContent from '@/components/ColumnContent.vue'
export default {
  components: {
    ColumnContent
  },
  data() {
    return {
      cards: [
        {
          titleA: 'Unparalleled Selection',
          columnA:
            'A network of 25+ financing partners, including prime, near-prime and no credit required providers enable retailers to address customers throughout the FICO spectrum.',
          titleB: 'Power of Waterfall',
          columnB:
            'Near-prime lenders and no credit required providers can help retailers significantly increase the percentage of customers being approved for financing, leading to higher approval rates and sales.',
          titleC: 'Informed Decisions',
          columnC:
            ' Comprehensive dashboards and reporting help to benchmarks the performance of the financing program across stores, channels, financing partners and even sales associates.'
        }
      ]
    }
  }
}
</script>

<style scoped>
hr {
  height: 0.1rem;
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}
</style>
