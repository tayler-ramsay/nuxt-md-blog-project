<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <Form class=" md:flex-1" />
      <client-only>
        <div
          class="bg-green flex-1 learn px-3 md:px-24 py-10 space-y-5 text-white"
        >
          <h1 class="text-3xl md:text-7xl font-black leading-none max-w-xl">
            WANT TO LEARN MORE
          </h1>
          <p class="text-blue-light font-bold text-2xl flex items-center">
            <unicon class="pr-4" name="phone" fill="#009CDA"></unicon
            >717.123.1234
          </p>
          <p class=" text-large flex">
            <unicon class="pr-4 h-5" name="map-marker-alt" fill="#fff"></unicon>
            <span class="max-w-lg"
              >4900 Ritter Rd #100, Mechanicsburg, PA 17055
            </span>
          </p>
          <p></p>
          <p class=" text-large">
            <unicon class="pr-4 h-5" name="fast-mail" fill="#B2D237"></unicon>
            <a href="" class="text-green">hello@versatilecredit.com</a>
          </p>
          <hr />
          <h3 class="font-semibold ">
            RECOMMENDED FROM OUR <span class="text-green">[BLOG]</span>
          </h3>
          <article class=" space-y-1">
            <h4 class="text-xl text-green">This is a heading from our blog</h4>
            <p class="">
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              quartz, vex nymphs. Waltz, bad nymph, for nymphs…
            </p>
          </article>
          <article class=" space-y-1">
            <h4 class="text-xl text-green">This is a heading from our blog</h4>
            <p>
              The quick, brown fox jumps over a lazy dog. DJs flock by when MTV
              ax quiz prog. Junk MTV quiz graced by fox whelps. Bawds jog, flick
              Quick zephyrs blow, vexing daft Jim. Sex-charged fop blew my junk
              TV quiz. How quickly daft jumping zebras vex. Two driven jocks
              help fax my big quiz. Quick, Baz…
            </p>
          </article>
        </div>
      </client-only>
    </div>

    <div
      class="bg-black text-base font-medium flex flex-col-reverse lg:flex-row justify-between lg:px-24 py-5 text-white items-center"
    >
      <div>2020 VERSTILE CREDIT | Privacy Policy | Sitemap</div>
      <div class="flex justify-between space-x-6 py-8 md:py-1">
        <div
          class="logo bg-slate p-8 w-8 h-8 rounded-full flex justify-center items-center "
        >
          <unicon
            class=""
            name="facebook-f"
            fill="#242B34"
            width="40px"
            height="40px"
          ></unicon>
        </div>
        <div
          class="logo bg-slate p-8 w-8 h-8 rounded-full flex justify-center items-center"
        >
          <unicon
            class=""
            name="linkedin"
            fill="#242B34"
            width="40px"
            height="40px"
          ></unicon>
        </div>
        <div
          class="logo bg-slate p-8 w-8 h-8 rounded-full flex justify-center items-center"
        >
          <unicon
            class=""
            name="twitter"
            fill="#242B34"
            width="40px"
            height="40px"
          ></unicon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
export default {
  components: {
    Form
  }
}
</script>

<style>
.learn {
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}
</style>
