<template>
  <div class="lg:px-16">
    <div class=" header">
      <div class="flex  flex-col items-center">
        <div class="wrapper w-20 h-20">
          <img
            :src="require(`~/static/icons/${item.img}.png`)"
            alt=""
            class=""
          />
        </div>
        <div class="h-10">
          <h1 class="font-semibold text-blue text-2xl max-w-sm pb-4">
            {{ item.title }}
          </h1>
        </div>
      </div>

      <ul class=" leading-8 list-outside pb-10">
        <li v-for="n in list" :key="n.id" class="flex pb-4">
          <unicon
            class="h-6 pr-4 mb-5"
            name="check-circle"
            fill="#014180"
            icon-style="monochrome"
          ></unicon>
          {{ n }}
        </li>
      </ul>
    </div>
    <!-- <div class="">
      <h3 class="text-blue text-2xl mb-3 flex justify-between pt-5 leading-8">
        {{ item.description.title }}
      </h3>
      <p v-for="p in paragraph" :key="p.id" class="mb-3 py-4 w-full">
        {{ p }}
      </p>
    </div> -->
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
    list: {
      type: Array,
      required: true
    },
    paragraph: {
      type: Array,
      required: true
    }
  }
}
</script>

<style>
@-webkit-keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
@keyframes mover {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-10px);
  }
}
</style>
