<template>
  <div class="featured-category color-step grower-childs" @click="onClick">
    <h1 class="category">{{ name }}</h1>
  </div>
</template>

<script>
export default {
  name: "featured-category",
  props: {
    id: Number,
    name: String,
    image: Object
  },
  methods: {
    onClick() {
      this.$router.push({ path: `/tienda/${this.id}` });
    }
  }
};
</script>

<style lang="scss">
.featured-category {
  cursor: pointer;
  color: $color-adaptable;
  font-size: 2rem;
  font-weight: 700;
  font-family: $font-title;
  text-transform: uppercase;
  padding: 0.5em;
  text-align: center;
}
</style>
