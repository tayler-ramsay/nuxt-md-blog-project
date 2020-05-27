<template>
  <div class="bg-white py-16">
    <div class="container">
      <BlogSection :blogs="blogs" />
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    try {
      const blogs = await $content('blog')
        .sortBy('year')
        .fetch()

      return {
        blogs
      }
    } catch (err) {
      console.debug(err + 'error')
      return false
    }
  }

  // data() {
  //   return {
  //     blogs: [
  //       {
  //         date: 'May 5th 2020',
  //         link:
  //           'https://www.versatilecredit.com/blogs/offer-a-consistent-omni-channel-financing-experience-while-ensuring-business-continuity/',
  //         title:
  //           'Offer a Consistent, Omnichannel Financing Experience While Ensuring Business Continuity',
  //         excerpt:
  //           'Recent events have led to unexpected business interruptions for many retailers. Consumers are staying at home, driving traffic away from physical brick-and-mortar locations to eCommerce sites, ',
  //         author: 'Vicki Turjan',
  //         num: 1
  //       },
  //       {
  //         date: 'May 13th 2020',
  //         link:
  //           'https://www.versatilecredit.com/blogs/the-benefit-of-contactless-self-service/',
  //         title: 'The Benefit of “Contactless” Self-Service',
  //         excerpt:
  //           'Many states throughout the country have issued “Stay at Home” orders in response to the COVID-19 outbreak, and as the vast majority ',
  //         author: 'Sam Miller',
  //         num: 2
  //       }
  //     ]
  //   }
  // }
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
