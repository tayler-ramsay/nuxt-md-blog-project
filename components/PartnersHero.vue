<template>
  <div>
    <BaseHero :headline="headline" :tagline="tagline" :paragraph="paragraph" />
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
      headline: 'Build a financing program on your terms.',
      tagline: 'Experience the power choice',
      paragraph:
        'Versatile empowers retailers to find the providers that are the best match for their business and customers, while providing the simplicity, flexibility and freedom to change providers as needed. We accomplish this with an unrivaled network of lending and providing partners.',
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
            ' Comprehensive dashboards and reporting help to benchmark the performance of the financing program across stores, channels, financing partners and even sales associates.'
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
