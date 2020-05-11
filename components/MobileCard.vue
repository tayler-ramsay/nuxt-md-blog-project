<template>
  <div class="w-full card-height">
    <div
      class="relative w-full  bg-white  overflow-hidden cursor-pointer  card-height card max-w-md m-auto"
      :class="{ open: item.open }"
      :style="styleObject"
      @click="handleView($event)"
    >
      <div class="relative bg-white">
        <!-- :style="{ 'background-image': `url('${item.img}')` }" -->
        <div class=" bg-cover bg-center card-height w-full pointer-events-none">
          <!-- -->
          <h1 class="font-semibold text-blue text-4xl mb-5">
            {{ item.title }}
          </h1>
          <ul class=" leading-8 list-outside">
            <li v-for="n in list" :key="n.id" class="flex mb-5">
              <img
                src="../static/checkmark.png"
                alt=""
                class="h-6 pr-4 mb-10"
              />
              {{ n }}
            </li>
          </ul>
        </div>
        <div
          class=" absolute bottom-0 text-right py-2 px-3 text-blue-light w-full  pointer-events-none "
        >
          {{ item.link }}
        </div>
      </div>
      <div class="description  pointer-events-none mt-5 ">
        <hr class="p-2 border-blue" />
        <h3 class="text-blue text-2xl mb-3 flex justify-between">
          {{ item.description.title }}
          <p>x</p>
        </h3>
        <p v-for="p in paragraph" :key="p.id" class="mb-3">
          {{ p }}
        </p>
      </div>
    </div>
    <div class="screen"></div>
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
  },
  data() {
    return {
      styleObject: {
        transform: 'translate(0px,0px)'
      }
    }
  },
  methods: {
    handleView(el) {
      this.item.open = !this.item.open
      const viewPortOffset = el.target.getBoundingClientRect()
      if (this.item.open) {
        document.body.style.top = `-${window.scrollY}px`

        document.body.style.position = 'fixed'

        this.styleObject.transform = `translate(${viewPortOffset.left *
          -1}px, ${viewPortOffset.top * -1}px )`
      } else {
        this.styleObject = {
          transform: 'translate(0px,0px)'
        }
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY) * -1)
      }
    }
  }
}
</script>

<style>
.card-height {
  height: 300px;
}
.card {
  z-index: 0;
  transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3);
}
.open {
  z-index: 100;
  padding: 2rem;
  border-radius: 0;
  border: 0;
  width: 100vw;
  height: 100vh;
  transform: translate(-20px, -20px);
  box-shadow: 2px 2px 22px rgba(0, 0, 0, 0.3);
}

.open + .screen {
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
}
</style>
