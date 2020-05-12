<template>
  <div class="flex flex-col lg:max-w-1/2  bg-black px-5 lg:px-10 py-10">
    <h1 class="font-semibold text-green text-4xl">CONTACT US</h1>
    <p class="text-blue-light mb-10">
      <span class="text-white pr-2">*</span>required
    </p>
    <form action="" method="post" class="flex flex-col space-y-3">
      <label for="name" class="text-white">Full Name*</label>
      <input id="name" type="text" class="h-12 bg-slate mt-2" />
      <label for="email" class="text-white">Email*</label>
      <input id="email" type="text" class="h-12 bg-slate" />
      <div class="flex flex-col lg:flex-row max-w-full">
        <div class="flex flex-col w-full">
          <label for="company" class="text-white mb-5">Company</label>
          <input
            id="company"
            type="text"
            class="h-12 bg-slate flex-1 lg:mr-5"
          />
        </div>
        <div class="flex flex-col max-w-full">
          <label for="phone" class="text-white mb-5">Phone*</label>
          <input id="phone" type="text" class="h-12 bg-slate " />
        </div>
        <div />
      </div>
      <label for="message" class="text-white">Message*</label>
      <textarea id="message" type="textarea" class="bg-slate" rows="10" />
      <button
        class="bg-black text-white font-semibold border-2 border-green w-24 py-1"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
input {
  color: #b2d237;
  padding: 1em;
}

textarea {
  display: block;
  color: #b2d237;
}

//  black: '#242B34',
//   green: '#B2D237',
//   slate: '#3E4A59',
//   blue: {
//     light: '#009CDA',
//     default: '#014180'
//   }
</style>
