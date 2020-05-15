<template>
  <div
    id="navigation"
    class="bg-black flex justify-between items-center text-white py-6 px-10"
  >
    <nuxt-link class="brand-logo" :to="'./'">
      <img src="../static/logo-white.png" alt=""
    /></nuxt-link>
    <nuxt-link class="brand-logo-small" :to="'./'">
      <img src="../static/logo-ko.png" alt=""
    /></nuxt-link>

    <ul class="flex justify-end  items-center">
      <li>
        <nuxt-link :to="'/'" class="font-medium m-3">Home</nuxt-link>
        <nuxt-link :to="'/omnichannel'" class="font-medium m-3"
          >Technology</nuxt-link
        >
        <nuxt-link :to="'/partners'" class="font-medium m-3"
          >Tailor-made
        </nuxt-link>
        <nuxt-link :to="'/lender'" class="font-medium m-3"
          >For Lenders</nuxt-link
        >
        <nuxt-link :to="'/about'" class="font-medium m-3"
          >About Versatile</nuxt-link
        >
        <nuxt-link :to="'/news'" class="font-medium m-3">News</nuxt-link>
      </li>
      <nuxt-link
        :to="'/contact'"
        class="font-semibold bg-green p-4 rounded-sm ml-3 text-black"
      >
        Contact Us
      </nuxt-link>
    </ul>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
@media screen and (max-width: 1061px) {
  .brand-logo {
    display: none;
  }
  .brand-logo-small {
    max-width: 5rem;
    display: block;
  }
}

@media screen and (min-width: 1061px) {
  .brand-logo {
    display: block;
  }
  .brand-logo-small {
    display: none;
  }
}
</style>
