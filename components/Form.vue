<template>
  <div class="flex flex-col lg:max-w-1/2  bg-black px-5 lg:px-10 py-10">
    <h1 class="font-semibold text-green text-4xl">CONTACT US</h1>
    <form action="" method="post" class="flex flex-col space-y-5">
      <label for="name" class="text-white">Full Name*</label>
      <input id="name" type="text" class="h-12 bg-slate mt-2" />
      <label for="email" class="text-white">Email*</label>
      <input id="email" type="text" class="h-12 bg-slate" />
      <div class="flex flex-row max-w-full">
        <div class="flex flex-col w-full">
          <label for="company" class="text-white mb-5">Company</label>
          <input id="company" type="text" class="h-12 bg-slate flex-1 mr-5" />
        </div>
        <div class="flex flex-col max-w-full">
          <label for="phone" class="text-white mb-5">Phone*</label>
          <input id="phone" type="text" class="h-12 bg-slate " />
        </div>
        <div />
      </div>
      <label for="message" class="text-white">Message*</label>
      <input
        id="message"
        type="textarea"
        class="h-48 bg-slate"
        rows="4"
        cols="50"
      />
      <button
        class="bg-black text-white font-semibold border-2 border-green w-24 py-1 "
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
