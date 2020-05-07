<template>
  <div
    id="navigation"
    class="bg-black flex justify-between items-center text-white py-6 px-10"
  >
    <nuxt-link class="brand-logo" :to="'./'">Versatile Credit</nuxt-link>
    <ul class="flex justify-end  items-center">
      <li>
        <nuxt-link :to="'./'" class="font-medium m-3">Home</nuxt-link>
        <nuxt-link :to="'./omnichannel'" class="font-medium m-3"
          >Omnichannel</nuxt-link
        >
        <nuxt-link :to="'./lenders'" class="font-medium m-3"
          >for Lenders</nuxt-link
        >
        <nuxt-link :to="'./news'" class="font-medium m-3"
          >In The News
        </nuxt-link>
        <nuxt-link :to="'./about'" class="font-medium m-3"
          >About Versatile</nuxt-link
        >
        <nuxt-link :to="'./contact'" class="font-medium m-3">Contact</nuxt-link>
      </li>
      <button class="font-semibold bg-green p-4 rounded-sm ml-3">
        Book a Demo
      </button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        'Home',
        'Omnichannel',
        'For Lenders',
        'In The News',
        'About Versatile',
        'Contact'
      ]
    }
  }
}
</script>

<style></style>
