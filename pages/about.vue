<template>
  <div>
    <AboutHero />
    <!-- <LeaderProfile v-for="(bio, index) in bios" :key="index" :bio="bio" /> -->
  </div>
</template>

<script>
import AboutHero from '@/components/AboutHero.vue'
// import LeaderProfile from '@/components/LeaderProfile.vue'
export default {
  components: {
    AboutHero
    // LeaderProfile
  },
  data() {
    return {
      bios: [
        {
          name: 'Ed O’Donnell',
          title: 'Chief Executive Officer',
          description:
            'Provides customers with financing opportunities throughout the FICO spectrum',
          link: 'edodonnell'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
