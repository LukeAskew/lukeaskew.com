<template>
  <div class="nav-list">
    <h2>{{ heading }}</h2>

    <ol>
      <li
        v-for="item in items"
        :key="item.slug"
      >
        <a :href="item.url">{{ item.title }}</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  props: ['items', 'heading'],
};
</script>

<style scoped>
.nav-list {
  padding: 1rem;
  background-color: #fff;
  margin-top: 2rem;
}

.nav-list ol {
  padding: 0;
  margin: 0;
  list-style-type: none;
}

.nav-list ol li:not(:last-child) {
  margin-bottom: 1rem;
}

@media (min-width: 60rem) {
  .nav-list {
    margin-top: 0;
  }
}
</style>



