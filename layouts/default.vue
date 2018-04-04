<template>
  <div>
    <nuxt />

    <Footer />
  </div>
</template>

<script>
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer,
  },
};
</script>

<style>
@font-face {
  font-family: 'Libre Baskerville';
  src: url('/fonts/LibreBaskerville-Regular.woff2') format('woff'),
       url('/fonts/LibreBaskerville-Regular.woff') format('woff'),
       url('/fonts/LibreBaskerville-Regular.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Libre Baskerville';
  src: url('/fonts/LibreBaskerville-Italic.woff2') format('woff'),
       url('/fonts/LibreBaskerville-Italic.woff') format('woff'),
       url('/fonts/LibreBaskerville-Italic.ttf') format('truetype');
  font-weight: normal;
  font-style: italic;
}

@font-face {
  font-family: 'Libre Baskerville';
  src: url('/fonts/LibreBaskerville-Bold.woff2') format('woff'),
       url('/fonts/LibreBaskerville-Bold.woff') format('woff'),
       url('/fonts/LibreBaskerville-Bold.ttf') format('truetype');
  font-weight: 700;
  font-style: normal;
}

@font-face {
  font-family: 'Qanelas';
  src: url('/fonts/QanelasSoft-ExtraBold.woff2') format('woff2'),
       url('/fonts/QanelasSoft-ExtraBold.woff') format('woff'),
       url('/fonts/QanelasSoft-ExtraBold.ttf') format('truetype');
  font-weight: 800;
  font-style: normal;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

html {
  font-family: Libre Baskerville, serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  color: #333;
}

h1 {
  font-family: Qanelas, sans-serif;
  font-weight: 800;
  line-height: 1.2;
}

h2 {
  font-size: 1rem;
  color: #aaa;
  margin-bottom: 1em;
}

a {
  color: inherit;
  box-shadow: inset 0 -0.4rem 0 0 #e2e2e2;
  font-style: italic;
  text-decoration: none;
}

a:hover {
  box-shadow: inset 0 -1.2rem 0 0 #0033cc;
  color: #fff;
}

.container {
  max-width: 60rem;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 60rem) {
  html {
    font-size: 18px;
  }
}
</style>
