<template>
  <div>
    <PartnersHero />
    <div class="grid bg-black flex-col py-10">
      <h1 class="text-white text-center">Prime Lenders</h1>
      <div class="prime flex justify-center flex-wrap">
        <div
          class="h-48  bg-black flex items-center  border-8  border-slate m-4"
        >
          <h1 class="text-slate text-3xl  font-extrabold p-5">ADS/Comenity</h1>
        </div>
        <div
          class="h-48  bg-black flex items-center  border-8  border-slate m-4"
        >
          <h1 class="text-slate text-3xl  font-extrabold p-5">ADS/Comenity</h1>
        </div>
        <div
          class="h-48  bg-black flex items-center  border-8  border-slate m-4"
        >
          <h1 class="text-slate text-3xl  font-extrabold p-5">ADS/Comenity</h1>
        </div>
        <div
          class="h-48  bg-black flex items-center  border-8  border-slate m-4"
        >
          <h1 class="text-slate text-3xl  font-extrabold p-5">ADS/Comenity</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PartnersHero from '@/components/PartnersHero.vue'
export default {
  components: {
    PartnersHero
  }
}
</script>

<style lang="scss" scoped></style>
