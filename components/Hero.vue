<template>
  <div class="pb-64 lg:pb-0 mb-6 lg:mb-0">
    <div
      id="main"
      class="flex flex-col text-white max-w-full px-4 lg:pl-32 pt-32 md:pt-32 max-h-full h-screen relative "
    >
      <img
        id="triangle-top"
        src="../static/triangle-light.png"
        alt=""
        srcset=""
      />
      <img
        id="triangle-middle"
        src="../static/triangle-default.png"
        alt=""
        srcset=""
      />
      <img
        id="logo-ko"
        src="../static/logo-ko.png"
        alt=""
        srcset=""
        class=" z-0 invisible  lg:visible"
      />
      <div class="max-w-5xl">
        <p class="text-md md:text-2xl pb-4 font-base">
          Versatile Omnichannel | The Leading Technology Platform for
          Omnichannel Financing
        </p>
        <h1 class="text-2xl  md:text-5xl font-bold leading-8 md:leading-12">
          Financing options wherever a buying decision is made.
        </h1>
      </div>
      <div
        class="flex flex-col lg:flex-row justify-between max-w-2xl  my-10  mb-16 lg:mb-32  space-y-12 md:space-y-0 md:space-x-12"
      >
        <div>
          <h2 class="font-base lg:font-thin text-5xl md:text-7xl">+20%</h2>
          <p class="text-xl">Increase in Application Volume</p>
        </div>
        <div>
          <h2 class="font-base lg:font-thin text-5xl md:text-7xl">+30%</h2>
          <p class="text-xl">Increase in Average Sales Ticket</p>
        </div>
        <div>
          <h2 class="font-base lg:font-thin text-5xl md:text-7xl">+40%</h2>
          <p class="text-xl">Improvement in Approval Rate</p>
        </div>
      </div>
      <div class="flex justify-between md:justify-start">
        <button
          class="bg-white rounded-sm text-blue font-semibold py-2 px-8 lg:mr-32"
        >
          Learn More
        </button>
        <a
          href=""
          class="rounded-sm text-white font-semibold p-3  hover:underline bg-green text-slate lg:text-white  lg:bg-transparent"
          >Contact Us</a
        >
      </div>
      <div
        class="text-lg lg:text-2xl text-white font-thin m-auto my-10 mt-16 lg:mt-16"
      >
        <p>Anyone | Anywhere | On Any Device</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
#logo-ko {
  width: 200px;
  position: absolute;
  right: 30px;
  top: 50%;
  animation: fadein 4s ease-in-out;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#triangle-middle {
  position: absolute;
  height: 80vh;
  top: calc(70vh - 50vh);
  right: 0;
  z-index: -100;
  transform: translateX(0px);
  animation: mymove 5s ease-in-out;
}

@keyframes mymove {
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
#triangle-top {
  position: absolute;
  height: 30vh;
  top: 0;
  right: 0;
  z-index: -100;
  transform: translateY(0px);
  animation: mymove 5s;
}

@keyframes mymove {
  50% {
    transform: translateY(0px);
  }
}

#triangle-bottom {
  position: absolute;
  height: 30vh;
  bottom: 0;
  right: 0;
  z-index: -100;
}
</style>
