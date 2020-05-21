<template>
  <div>
    <div
      class="bg-white flex flex-col lg:flex-row justify-evenly p-16 items-center py-32 px-8"
    >
      <div class="max-w-xl lg:w-3/12">
        <h1
          class="text-5xl lg:text-6xl font-semibold text-blue-light leading-12 mb-10"
        >
          We’re here to help
        </h1>
      </div>
      <div class="max-w-sm">
        <p class="font-semibold text-sm text-blue-light">
          COVID-19 has changed the face of retail overnight
        </p>
        <p>
          Versatile can help address the new concerns facing shoppers and make
          your consumer financing program consumer-friendly, effective and safe.
        </p>
        <hr class="w-20 mt-10 bg-blue-light" />
      </div>
    </div>
    <ColumnContent
      v-for="(card, index) in cards"
      :key="index"
      :content="card"
      class="grad"
      :column-type="1"
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
      videoId: 421179000,
      cards: [
        {
          titleB: 'The New Retail',
          columnB:
            'As stores around the country begin to re-open for business, social norms and consumer habits will have changed. Customers may be cautious to interact with shared, public devices and opt for their own personal devices to apply for financing in-store. As retailers begin shifting their processes online, it is necessary to provide consumers with consistent shopping experiences both in-store and online while ensuring all shoppers are receiving the same comprehensive financing options. Versatile Credit is equipped to assist retailers in evaluating the effect enhanced consumer (and employee) concerns about safeguarding personal health may have on their sales financing programs through a suite of contactless self-service, remote sales and eCommerce options.'
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
