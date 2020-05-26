<template>
  <div>
    <BaseHero
      :headline="data.headline"
      :background="false"
      :callout="data.callout"
      color="text-white"
      font-size="text-3xl"
      leading="leading-10"
      :data="data"
      class="bg-local"
    />

    <div class="bg-white pt-16">
      <div
        class="flex  flex-col lg:flex-row flex-wrap max-w-5xl mx-auto px-12 lg:px-0"
      >
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 ">
          <h3 class="mb-5">Integrate once & deploy everywhere</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Once lenders are integrated into the Versatile platform there is no
            need to integrate directly with retailers, reducing development
            costs and time to market. Partners are immediately integrated with
            our expansive lender network and technology ecosystem.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 lg:pl-20">
          <h3 class="mb-5">Offer financing anywhere</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            The flexibility of Versatile’s platform empowers lenders to offer
            their programs wherever and whenever a buying decision is made,
            including in-store kiosks and tablets, point of sales integration,
            eCommerce, digital signage and consumer mobile devices.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2">
          <h3 class="mb-5">The technology behind the brand</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Applications are built from the ground up to meet the compliance and
            branding standards of all banking partners, ensuring lenders all
            applications through the Versatile platform are compliant.
            White-labeled solutions are available.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 lg:pl-20">
          <h3 class="mb-5">Your technology partner</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            When Versatile focuses on building novel and innovative customer
            experiences and financing solutions we enable our retail and lending
            partners to focus on what they do best; selling fantastic products
            and building great financing programs and services.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import data from '@/content/forLender/data.json'
export default {
  data() {
    return {
      data
    }
  }
}
</script>

<style lang="scss" scoped>
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
