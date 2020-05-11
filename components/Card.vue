<template>
  <div class="w-full card-height">
    <div
      class="relative w-full  bg-white  overflow-hidden cursor-pointer  card-height card max-w-lg m-auto"
      :class="{ open: item.open }"
      :style="styleObject"
    >
      <!-- @click="handleView($event)" -->
      <div class="relative bg-white">
        <div
          class=" bg-cover bg-center  w-full pointer-events-none card-height"
        >
          <h1 class="font-semibold text-blue text-4xl mb-5">
            {{ item.title }}
          </h1>
          <ul class=" leading-8 list-outside">
            <li v-for="n in list" :key="n.id" class="flex mb-5">
              <unicon
                class="h-6 pr-4 mb-10"
                name="check-circle"
                fill="#B2D237"
                icon-style="monochrome"
              ></unicon>
              {{ n }}
            </li>
          </ul>
        </div>
        <div
          class=" text-right absolute bottom-0 px-3 text-blue-light w-full  pointer-events-none flex justify-end"
        >
          <div class="more">
            {{ item.link }}
          </div>
          <div class="scroll-arrow items-center">
            <span>Scroll</span>
            <unicon
              name="direction"
              fill="#B2D237"
              icon-style="monochrome"
            ></unicon>
          </div>
        </div>
      </div>
      <div class="description  pointer-events-none mt-5 ">
        <hr class="p-2 border-blue" />
        <h3 class="text-blue text-2xl mb-3 flex justify-between pt-5">
          {{ item.description.title }}
          <!-- <unicon name="times-square" fill="#B2D237" class="p-4"></unicon> -->
        </h3>
        <p v-for="p in paragraph" :key="p.id" class="mb-3 py-4">
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

        // document.body.style.position = 'fixed'

        this.styleObject.transform = `translate(${viewPortOffset -
          viewPortOffset}px, ${viewPortOffset.top * -1}px )`
      } else {
        this.styleObject = {
          transform: 'translate(0px,0px)'
        }
        const scrollY = document.body.style.top
        document.body.style.position = ''
        document.body.style.top = ''
        window.scrollTo(0, parseInt(scrollY) * -1)
        el.target.scrollTop = 0
      }
    }
  }
}
</script>

<style>
.card-height {
  /* height: 550px; */
}
.card {
  padding: 1.4rem;
  z-index: 0;
  transition: all 0.5s cubic-bezier(0.6, 0, 0.45, 1.3);
}

.scroll-arrow {
  display: none;
  bottom: 50px;
  right: 50px;
  -webkit-animation: mover 1s infinite alternate;
  animation: mover 1s infinite alternate;
}

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

.open > div .scroll-arrow {
  display: block;
}
.open > div > div > .more {
  display: none;
}

.open {
  z-index: 100;
  border-radius: 5px;
  /* width: 100vw;
  height: 100vh; */
  transform: translate(-20px, -20px);
  overflow: scroll;
  box-shadow: -2px 15px 60px -54px rgba(0, 0, 0, 0.94),
    0px 0px 0px 1px rgba(0, 0, 0, 0.09);
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
