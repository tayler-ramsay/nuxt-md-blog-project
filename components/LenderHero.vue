<template>
  <!-- :style="{ backgroundImage: `url('${backgroundUrl}')` }" -->
  <div class="bg-local bg-contain">
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
    <div class="bg-white pt-20">
      <div
        class="flex  flex-col lg:flex-row flex-wrap max-w-5xl mx-auto px-20 lg:px-0"
      >
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 ">
          <h3 class="mb-5">Turnkey Financing Channel</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Integrate once, deploy everywhere Once lenders are integrated into
            Versatile platform there is no need to integrate directly with
            retailers, reducing development costs and time to market.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 lg:pl-20">
          <h3 class="mb-5">Omnichannel Engagement</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Offer financing anywhere The flexibility of Versatile’s platform
            empowers lenders to offer their programs wherever and whenever a
            buying decision is made, including in-store kiosks and tablets,
            point of sales integration, eCommerce, digital signage, and mobile
            devices.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2">
          <h3 class="mb-5">White-Labeled Experiences</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            The technology behind the brand Applications are built from the
            ground up to meet the compliance and branding standards of all
            banking partners, ensuring lenders all applications through the
            Versatile platform are compliant.
          </p>
        </div>
        <div class="font-semibold text-blue text-2xl lg:min-w-1/2 lg:pl-20">
          <h3 class="mb-5">Higher Application Volumes</h3>
          <p class="font-normal text-slate max-w-sm text-base pb-20">
            Driving consistency through design The cascade ensures that lenders
            see all applications coming through the cascade, maximizing
            engagement opportunities and providing a consistent application
            experience.
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
