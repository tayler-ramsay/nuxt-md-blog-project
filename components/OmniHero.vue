<template>
  <div>
    <div
      class="bg-white flex flex-col lg:flex-row justify-evenly p-16 items-center py-32 px-8"
    >
      <div class="max-w-xl">
        <h1
          class="text-5xl lg:text-6xl font-semibold text-blue-light max-w-6xl leading-12 mb-10"
        >
          Versatile Omnichannel
        </h1>
      </div>
      <div class="max-w-sm">
        <p class="font-semibold text-sm text-blue-light">
          What is the Omnichannel?
        </p>
        <p>
          Omnichannel technology provides customers with the same comprehensive
          financing options wherever and whenever a buying decision is made.
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
          titleA: 'Seamless Experience',
          columnA:
            ' The cascade guides customers through a simplified financing experience, enabling retailers to address customers throughout the FICO spectrum while driving higher application and approval volumes.',
          titleB: 'Instant Decisions. Anywhere.',
          columnB:
            'Customers receive an instant credit decision and are presented with an opportunity to leave the store or website with the products and services they want, quickly and easily.',
          titleC: 'Customized and Branded',
          columnC:
            ' Retailers can customize the look, feel and experience to ensure a consistent brand is represented on a variety of devices and engagement points.'
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
