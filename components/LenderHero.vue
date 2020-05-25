<template>
  <div class="bg-local bg-contain">
    <BaseHero
      :headline="headline"
      :background="false"
      :callout="callout"
      color="text-white"
      font-size="text-3xl"
      leading="leading-10"
    />

    <ColumnContent
      v-for="(card, index) in cards"
      :key="index"
      :content="card"
      class="bg-blue"
      :column-type="3"
    />
  </div>
</template>

<script>
import ColumnContent from '@/components/ColumnContent.vue'
import backgroundUrl from '~/static/shake.jpg'
export default {
  components: {
    ColumnContent
  },
  data() {
    return {
      backgroundUrl,
      callout: 'Partner With Us',
      headline:
        'Making your financing solutions available to consumers wherever and whenever a buying decision is made.',

      cards: [
        {
          titleA: 'Driving Application Volume',
          columnA:
            ' A streamlined experience cascades customers from prime, near-prime and no credit required providers while minimizing data collection — leading to higher application volumes.',
          titleB: 'Driving Consistency',
          columnB:
            'The cascade ensures lenders see all applications coming through the waterfall, maximizing engagement opportunities and providing a consistent application experience for all customers.',
          titleC: 'Driving Retailer Success',
          columnC:
            'Versatile leverages our subject matter expertise and insight to assist retailers in building successful financing experience tailored to their brand and customers.'
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
.bg-local {
  background-image: radial-gradient(
      circle at 50%,
      rgba(0, 156, 218, 0.7) 0%,
      rgba(1, 65, 128, 1) 100%
    ),
    url('../static/shake.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -300px;
  color: white;
}
</style>
