<template>
  <div class="pb-10">
    <div
      id="main"
      class="flex flex-col text-white max-w-full px-4 lg:pl-32 pt-48 md:pt-32 max-h-full h-screen relative "
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
        <p class="text-xl md:text-2xl">
          Versatile Omnichannel | The Leading Technology Platform for
          Omnichannel Financing
        </p>
        <h1 class="text-3xl  md:text-5xl font-bold">
          Financing options wherever a buying decision is made.
        </h1>
      </div>
      <div class="flex justify-between max-w-2xl  my-10  mb-16 space-x-12">
        <div>
          <h2 class="font-hairline text-2xl md:text-7xl">+20%</h2>
          <p>Increase in Application volume</p>
        </div>
        <div>
          <h2 class="font-hairline text-2xl md:text-7xl">+30%</h2>
          <p>Increase in average Sales Ticket</p>
        </div>
        <div>
          <h2 class="font-hairline text-2xl md:text-7xl">+40%</h2>
          <p>Improvement in Approval Rate</p>
        </div>
      </div>
      <div class="flex">
        <button
          class="mr-8 bg-white rounded-sm text-blue font-semibold py-2 px-10 "
        >
          Learn More
        </button>
        <a
          href=""
          class="mr-6 rounded-sm text-white font-semibold p-3  hover:underline"
          >Book a demo</a
        >
      </div>
      <div class="text-lg text-white font-light m-auto my-10">
        <p>Anyone - Anywhere - On Any Device</p>
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
