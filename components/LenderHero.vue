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
    <div
      class="flex px-16 justify-evenly bg-blue pt-20 flex-col lg:flex-row pt-24"
    >
      <div class="font-semibold text-white text-2xl max-w-sm">
        <h3 class="mb-5">Driving Application Volume</h3>
        <p class="font-normal max-w-lg text-base pb-20 pr-5">
          A streamlined experience cascades customers from prime, near-prime and
          no credit required providers while minimizing data collection —
          leading to higher application volumes.
        </p>
      </div>
      <div class="font-semibold text-white text-2xl max-w-lg">
        <h3 class="mb-5">Driving Consistency</h3>
        <p class="font-normal max-w-sm text-base pb-20  pr-5">
          The cascade ensures lenders see all applications coming through the
          waterfall, maximizing engagement opportunities and providing a
          consistent application experience for all customers.
        </p>
      </div>
      <div class="font-semibold text-white text-2xl max-w-sm">
        <h3 class="mb-5">Driving Retailer Success</h3>
        <p class="font-normal max-w-sm text-base pb-20  pr-5">
          Versatile leverages our subject matter expertise and insight to assist
          retailers in building successful financing experience tailored to
          their brand and customers.
        </p>
      </div>
    </div>
    <div class="bg-white pt-20">
      <div
        class="flex  flex-col lg:flex-row flex-wrap max-w-5xl mx-auto px-20 lg:px-0"
      >
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 ">
          <h3 class="mb-5">Integrate once & deploy everywhere</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Once lenders are integrated into Versatile platform there is no need
            to integrate directly with retailers, reducing development costs and
            time to market. Partners are immediately integrated with our
            expansive lender network and technology ecosystem.
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
import backgroundUrl from '~/static/shake.jpg'
export default {
  data() {
    return {
      backgroundUrl
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
