<template>
  <div class="featured-category category color-step">
    <h1>
      <slot></slot>
    </h1>
  </div>
</template>

<script>
export default {
  name: "featured-category",
  props: {
    id: Number,
    name: String,
    image: String
  }
};
</script>

<style lang="scss">
.featured-category {
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5em;
  text-align: center;
}
</style>
