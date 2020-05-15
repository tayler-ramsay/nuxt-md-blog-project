<template>
  <div class="bg-black">
    <div
      class=" flex flex-col lg:flex-row justify-evenly items-center bg-local lg:py-48 py-24 pt-32 px-5"
    >
      <div class="max-w-sm">
        <div class="flex">
          <img class="h-10" src="~/static/icons/logo-ko.png" alt="" />
          <p class="text-white text-2xl">We Are</p>
        </div>
        <h1
          class="text-6xl font-semibold text-blue-light max-w-sm leading-12 mb-10"
        >
          Relentless Innovation.
        </h1>
      </div>
      <div class="max-w-sm lg:pl-10">
        <p class="font-semibold text-sm text-blue-light">
          Our approach is simple.
        </p>
        <p>
          We develop innovative, state-of-the-art experiences and technologies
          so our partners can focus on what they do best; sell fantastic
          products and build great financing programs and services.
        </p>
        <hr class="w-20 mt-10 bg-blue-light" />
        <!-- <nuxt-link :to="'/history'">
          <div class="flex stage  w-48 pt-5 z-50">
            <span class="text-green  inline-flex">Our History</span>
            <span class="text-green arrow bounce-3 text-lg">🡒</span>
          </div>
        </nuxt-link> -->
      </div>
    </div>
    <ColumnContent
      v-for="(card, index) in cards"
      :key="index"
      :content="card"
      class="grad"
      :column-type="2"
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
          titleA: '30 Years of Experience',
          columnA:
            ' Versatile has a history of large scale integrations with high availability, carrier grade, services and technologies, as well as   nearly 20 years of experience in portal development and 15+ years in consumer financing.',
          titleB: 'Subject Matter Expertise',
          columnB:
            ' We leverage our subject matter expertise to customize our deployments and work alongside retailers and lenders to deploy innovative and successful financing experiences tailored to their brands, customers and processes.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.arrow {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce-3 {
  animation-name: bounce-3;
  animation-timing-function: cubic-bezier(0.08, 0.04, 0.82, 1);
}
@keyframes bounce-3 {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
hr {
  height: 0.1rem;
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}
.bg-local {
  background: black;
  background-image: url('../static/bulb.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px -350px;
  color: white;
}
</style>
