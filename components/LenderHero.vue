<template>
  <div class="bg-local bg-contain lg:pt-24">
    <div
      class="flex flex-col lg:flex-row justify-evenly px-10 items-center pt-32 lg:pb-32"
    >
      <div class="max-w-6xl">
        <div class="flex">
          <img class="h-5" src="../static/icons/logo-ko.png" alt="" />
          <p class="text-white text-lg">Partner with Us</p>
        </div>
        <h1
          class="text-2xl lg:text-4xl font-semibold text-white max-w-6xl leading-8 lg:leading-10 mb-10"
        >
          Making your financing solutions available to consumers wherever and
          whenever a buying decision is made.
        </h1>
      </div>
    </div>
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
  background-image: linear-gradient(
      100deg,
      rgba(1, 65, 128, 1) 0%,
      rgba(0, 156, 218, 0.7) 100%
    ),
    url('../static/shake.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -300px;
  color: white;
}
</style>
