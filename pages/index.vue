<template>
  <div>
    <Banner />

    <div class="container">
      <div class="column">
        <NavList
          heading="Writing"
          :items="writing"
        />
      </div>

      <div class="column">
        <NavList
          heading="Speaking"
          :items="speaking"
        />
      </div>

      <div class="column">
        <NavList
          heading="Contact"
          :items="contact"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Banner from '~/components/Banner.vue'
import NavList from '~/components/NavList.vue'

export default {
  components: {
    Banner,
    NavList,
  },
  data: () => ({
    writing: [
      {
        title: 'Bystander Effect',
        url: 'https://medium.com/@lukeaskew/bystander-effect-68d219aea730',
      },
      {
        title: 'Proportionally-perfect Design',
        url: 'https://medium.com/@lukeaskew/proportionally-perfect-design-360dfc1f396',
      },
      {
        title: 'The Art Of Failure',
        url: 'https://medium.com/@lukeaskew/art-of-failure-e75c39688453',
      },
      {
        title: 'Go And See',
        url: 'https://medium.com/@lukeaskew/go-and-see-3b0b06d8c5f9',
      },
      {
        title: 'Bitches Brew',
        url: 'https://medium.com/@lukeaskew/bitches-brew-474b063f7c9a',
      },
      {
        title: 'More...',
        url: 'https://medium.com/@lukeaskew',
      },
    ],
    speaking: [
      {
        title: 'Open Minded, Open Sourced',
        url: 'https://www.youtube.com/watch?v=WizvdHPPux0',
      }
    ],
    contact: [
      {
        title: 'Github',
        url: 'https://github.com/lukeaskew',
      },
      {
        title: 'LinkedIn',
        url: 'https://www.linkedin.com/in/lukeaskew/'
      },
      {
        title: 'Twitter',
        url: 'https://twitter.com/lukeaskew',
      },
    ],
  }),
};
</script>

<style scoped>
@media (min-width: 48rem) {
  .container {
    display: grid;
    grid-template-columns: 40% 40%;
    grid-column-gap: 2rem;
  }

  .column:nth-child(1) {
    grid-row: 1 / span 2;
  }
}

@media (min-width: 60rem) {
  .container {
    margin-top: -2rem;
  }
}
</style>

