<template>
  <div>
    <div class="flex flex-col lg:flex-row">
      <ContactForm class=" md:flex-1" />
      <client-only>
        <div
          class="bg-green flex-1 learn px-3 md:px-24 py-10 space-y-5 text-white"
        >
          <h1 class="text-3xl md:text-7xl font-black leading-none max-w-xl">
            WANT TO LEARN MORE?
          </h1>
          <p class="text-blue-light font-bold text-2xl flex items-center">
            <unicon class="pr-4" name="phone" fill="#009CDA"></unicon
            ><a href="tel:18008511281">1.800.851.1281</a>
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
            <a href="mailto: contact@versatilecredit.com" class="text-green"
              >contact@versatilecredit.com</a
            >
          </p>
          <hr />
          <h3 class="font-semibold ">
            RECOMMENDED FROM OUR <span class="text-green">[BLOG]</span>
          </h3>
          <a
            target="_blank"
            href="https://www.versatilecredit.com/blogs/offer-a-consistent-omni-channel-financing-experience-while-ensuring-business-continuity/"
          >
            <article class=" space-y-1">
              <h4 class="text-xl text-green">
                The Benefit of “Contactless” Self-Service
              </h4>
              <p class="pb-10">
                Many states throughout the country have issued “Stay at Home”
                orders in response to the COVID-19 outbreak, and as the vast
                majority of our fellow citizens comply, that has motivated
                forward thinking retailers to re-evaluate their in-store
                experiences and interactions between customers, employees, and
                their physical storefronts.…
              </p>
            </article>
          </a>
          <a
            target="_blank"
            href="https://www.versatilecredit.com/blogs/the-benefit-of-contactless-self-service/"
          >
            <article class=" space-y-1">
              <h4 class="text-xl text-green">
                Offer a Consistent, Omnichannel Financing Experience While
                Ensuring Business Continuity
              </h4>
              <p>
                Recent events have led to unexpected business interruptions for
                many retailers. Consumers are staying at home, driving traffic
                away from physical brick-and-mortar locations to eCommerce
                sites, where growth rates are already rising by nearly 52% this
                year, according to Quantum Metric. This has led retailers to
                explore options to provide consumers with consistent shopping
                experiences both in-store and online, as well as ways to ensure
                the business continuity of their financing programs.…
              </p>
            </article>
          </a>
        </div>
      </client-only>
    </div>

    <div
      class="bg-black text-base font-medium flex flex-col-reverse lg:flex-row justify-between lg:px-24 py-5 text-white items-center"
    >
      <div>
        &#169;2020 VERSTILE CREDIT |
        <nuxt-link :to="'/privacy'">privacy policy</nuxt-link>
        <!-- <nuxt-link :to="'/sitemap.xml'">sitemap</nuxt-link> -->
      </div>
      <div class="flex justify-between space-x-6 py-8 md:py-1">
        <div
          class="logo bg-slate p-8 w-8 h-8 rounded-full flex justify-center items-center mb-5 lg:mb-0"
        >
          <a href="https://www.linkedin.com/company/versatile-credit/">
            <unicon
              class="social"
              name="linkedin"
              width="40px"
              height="40px"
            ></unicon>
          </a>
        </div>
        <div
          class="logo bg-slate p-8 w-8 h-8 rounded-full flex justify-center items-center"
        >
          <a href="https://twitter.com/versatilecredit">
            <unicon
              class="social"
              name="twitter"
              width="40px"
              height="40px"
            ></unicon>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm.vue'
export default {
  components: {
    ContactForm
  }
}
</script>

<style lang="scss">
.social {
  fill: #000;
  &:hover {
    fill: rgba(0, 156, 218, 1);
  }
}
.learn {
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}
</style>
