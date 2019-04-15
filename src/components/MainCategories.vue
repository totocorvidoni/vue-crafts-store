<template>
  <div>
    <div class="main-categories" v-for="category in names" :key="category.id">
      <h1>{{ category.name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "main-categories",
  props: {
    id: Number,
    name: String,
    image: String
  },
  computed: {
    names() {
      return this.$store.state.mainCategories;
    }
  }
};
</script>

<style lang="scss">
.main-categories {
  background: $color3-faded;
  padding: 0.5em;
  text-align: center;
  font-family: $font-title;
  font-size: 2rem;
  font-weight: 700;
  h1 {
    color: $black;
    opacity: 0.33;
    text-transform: uppercase;
  }
}

.main-categories:nth-child(3n + 1) {
  background: $color4-faded;
}

.main-categories:nth-child(3n) {
  background: $color2-faded;
}
</style>
