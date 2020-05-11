<template>
  <div
    id="navigation"
    class="bg-black flex justify-between items-center text-white py-6 px-10"
  >
    <nuxt-link class="brand-logo" :to="'./'">
      <img src="../static/logo-white.png" alt=""
    /></nuxt-link>

    <ul class="flex justify-end  items-center">
      <li>
        <nuxt-link :to="'./'" class="font-medium m-3">Home</nuxt-link>
        <nuxt-link :to="'./omnichannel'" class="font-medium m-3"
          >Omnichannel</nuxt-link
        >
        <nuxt-link :to="'./news'" class="font-medium m-3"
          >In The News
        </nuxt-link>
        <nuxt-link :to="'./lender'" class="font-medium m-3"
          >For Lenders</nuxt-link
        >
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

<script></script>

<style></style>
