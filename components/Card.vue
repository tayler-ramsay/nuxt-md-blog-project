<template>
  <div class="px-16">
    <div class=" header h-64 mb-32">
      <div class="flex items-end justify-start">
        <h1 class="font-semibold text-blue text-2xl mb-5 p-4">
          {{ item.title }}
        </h1>
        <img
          :src="require(`~/static/icons/${item.img}.png`)"
          alt=""
          class="p-10  w-48 -mx-8"
        />
      </div>

      <ul class=" leading-8 list-outside">
        <li v-for="n in list" :key="n.id" class="flex pb-4">
          <unicon
            class="h-6 pr-4 mb-5"
            name="check-circle"
            fill="#B2D237"
            icon-style="monochrome"
          ></unicon>
          {{ n }}
        </li>
      </ul>
    </div>
    <div class="">
      <hr class="my-4 border-blue" />
      <h3 class="text-blue text-2xl mb-3 flex justify-between pt-5 leading-8">
        {{ item.description.title }}
        <!-- <unicon name="times-square" fill="#B2D237" class="p-4"></unicon> -->
      </h3>
      <p v-for="p in paragraph" :key="p.id" class="mb-3 py-4 w-full">
        {{ p }}
      </p>
    </div>
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
