<template>
  <div class="banner">
    <div class="container">
      <h1 class="site-heading">
        <div>Luke</div>
        <div>Askew</div>
      </h1>

      <div class="tagline">I'm building things</div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  margin-top: 4rem;
  position: relative;
  background-size: 0.5rem;
  background-repeat: repeat;
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNhYWEiIHdpZHRoPSIxMiIgaGVpZ2h0PSIxMiIgdmlld0JveD0iNi4zNzUgNi4zNzUgMTIgMTIiPjxwYXRoIGQ9Ik03LjA4MiAxOC4zNzVoLS43MDd2LS43MDdMMTcuNjY4IDYuMzc1aC43MDd2LjcwN0w3LjA4MiAxOC4zNzV6bTExLjI5MyAwdi0uNzA3bC0uNzA3LjcwN2guNzA3em0tMTEuMjkzLTEyaC0uNzA3di43MDdsLjcwNy0uNzA3eiIvPjwvc3ZnPg==");
}

.site-heading {
  font-size: 4.5rem;
  padding-left: 1rem;
}

.site-heading > div {
  position: relative;
}

.site-heading > div:first-child {
  top: -0.55em;
}

.site-heading > div:last-child {
  left: 1rem;
  bottom: 0.5em;
  display: inline-block;
}

.tagline {
  position: absolute;
  bottom: -0.75rem;
  left: 1rem;
  background-color: #fff;
  padding: 0.5rem 3rem 0.5rem 1rem;
  font-style: italic;
}

@media (min-width: 24rem) {
  .site-heading {
    font-size: 5.5rem;
  }
}

@media (min-width: 48rem) {
  .site-heading {
    font-size: 6rem;
  }

  .site-heading > div:last-child {
    bottom: 0.5em;
    right: auto;
    left: 50%;
  }

  .tagline {
    bottom: 0;
    left: 1rem;
    width: 40%;
  }
}

@media (min-width: 60rem) {
  .site-heading {
    font-size: 7rem;
    padding-left: 0;
  }

  .site-heading > div:last-child {
    bottom: 0.5em;
    margin-bottom: 0.25em
  }

  .tagline {
    bottom: calc(50% - 2rem);
    width: auto;
  }
}
</style>
