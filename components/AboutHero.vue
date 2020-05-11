<template>
  <div class="bg-local">
    <div
      class=" flex flex-col lg:flex-row justify-evenly p-16 items-center py-32"
    >
      <div class="max-w-sm">
        <div class="flex">
          <img class="h-10" src="~/static/icons/logo-ko.png" alt="" />
          <p class="text-blue-light text-2xl">We Are</p>
        </div>
        <h1
          class="text-6xl font-semibold text-blue-light max-w-sm leading-12 mb-10"
        >
          Relentless Innovation.
        </h1>
      </div>
      <div class="max-w-sm">
        <p class="font-semibold text-sm text-blue-light">
          Our approach is simple.
        </p>
        <p>
          We develop innovative, state-of-the-art experiences and technologies.
          Leaving our lending partners to build great financing programs and
          services for consumers and retailers.
        </p>
        <hr class="w-20 mt-10 bg-blue-light" />
      </div>
    </div>
    <div class="flex px-16 justify-evenly grad pt-20 flex-col lg:flex-row ">
      <div class="font-semibold text-white text-3xl max-w-sm">
        <h3 class="mb-5">30 Years of Experience</h3>
        <p class="font-normal max-w-lg text-base pb-20">
          Versatile has a history of large scale integrations for high
          availability services with nearly 20 years of experience in portal
          development and 15+ years in consumer financing.
        </p>
      </div>
      <div class="font-semibold text-white text-3xl max-w-sm">
        <h3 class="mb-5">Subject Matter Expertise</h3>
        <p class="font-normal max-w-sm text-base pb-20">
          We leverage our subject matter expertise and help customize our
          deployments to work alongside retailers’ business processes so that
          credit utilization is optimized.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
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
