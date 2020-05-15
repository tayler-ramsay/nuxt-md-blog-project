<template>
  <div class="bg-white py-16">
    <div class="wrapper max-w-6xl m-auto">
      <ul v-for="(item, index) in list" :key="index">
        <li class="flex flex-col lg:flex-row list-item relative">
          <div class="left flex-1 p-8 lg:p-24">
            <div class="date text-blue-light  text-xl font-semibold">
              {{ item.date }}
            </div>
            <a :href="item.link" target="_blank">
              <div class="title text-blue text-2xl">
                {{ item.title }}
              </div>
              <div class="excerpt">{{ item.excerpt }}[...]</div>
              <div class="author lg:absolute">
                <p class="text-sm font-semibold text-blue-light">
                  <span class="text-slate">Posted by: </span>{{ item.author }}
                </p>
              </div>
            </a>
          </div>
          <div class="right flex-1 lg:p-24">
            <a :href="item.link" target="_blank">
              <figure class="picture">
                <!-- <source
                  :srcSet="
                    require(`~/static/blogHeros/post-${item.num}.png?webp`)
                  "
                  type="image/webp"
                />
                <source
                  :srcSet="require(`~/static/blogHeros/post-${item.num}.png`)"
                  type="image/png"
                /> -->
                <img
                  :data-src="require(`~/static/blogHeros/post-${item.num}.png`)"
                  alt=""
                  class="lazyload"
                />
              </figure>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          date: 'May 5th 2020',
          link:
            'https://www.versatilecredit.com/blogs/offer-a-consistent-omni-channel-financing-experience-while-ensuring-business-continuity/',
          title:
            'Offer a Consistent, Omnichannel Financing Experience While Ensuring Business Continuity',
          excerpt:
            'Recent events have led to unexpected business interruptions for many retailers. Consumers are staying at home, driving traffic away from physical brick-and-mortar locations to eCommerce sites, ',
          author: 'Vicki Turjan',
          num: 1
        },
        {
          date: 'May 13th 2020',
          link:
            'https://www.versatilecredit.com/blogs/the-benefit-of-contactless-self-service/',
          title: 'The Benefit of “Contactless” Self-Service',
          excerpt:
            'Many states throughout the country have issued “Stay at Home” orders in response to the COVID-19 outbreak, and as the vast majority ',
          author: 'Sam Miller',
          num: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.list-item {
  border-bottom: 1px solid #000;
}

.author {
  bottom: 3em;
}
</style>
