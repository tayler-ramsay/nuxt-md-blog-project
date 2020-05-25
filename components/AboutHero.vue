<template>
  <div class="bg-black">
    <BaseHero
      :headline="headline"
      :tagline="tagline"
      :paragraph="paragraph"
      :background="true"
      :callout="callout"
    />
    <ColumnContent
      v-for="(card, index) in cards"
      :key="index"
      :content="card"
      class="grad"
      :column-type="2"
    />
  </div>
</template>

<script>
import ColumnContent from '@/components/ColumnContent.vue'
export default {
  components: {
    ColumnContent
  },
  data() {
    return {
      callout: 'We Are',
      headline: ' Relentless Innovation',
      tagline: 'Our approach is simple',
      paragraph:
        ' We develop innovative, state-of-the-art experiences and technologies so our partners can focus on what they do best; sell fantastic products and build great financing programs and services.',
      cards: [
        {
          titleA: '30 Years of Experience',
          columnA:
            'Versatile has a history of large scale integrations with high availability, carrier grade services and technologies, as well as nearly 20 years of experience in portal development and 15+ years in consumer financing.',
          titleB: 'Subject Matter Expertise',
          columnB:
            ' We leverage our subject matter expertise to customize our deployments and work alongside retailers and lenders to deploy innovative and successful financing experiences tailored to their brands, customers and processes.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.arrow {
  align-self: flex-end;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
.bounce-3 {
  animation-name: bounce-3;
  animation-timing-function: cubic-bezier(0.08, 0.04, 0.82, 1);
}
@keyframes bounce-3 {
  0% {
    transform: translateX(0px);
  }
  30% {
    transform: translateX(20px);
  }
  50% {
    transform: translateX(0px);
  }
  100% {
    transform: translateX(0px);
  }
}
hr {
  height: 0.1rem;
  background: linear-gradient(
    45deg,
    rgba(1, 65, 128, 1) 0%,
    rgba(0, 156, 218, 1) 100%
  );
}
</style>
