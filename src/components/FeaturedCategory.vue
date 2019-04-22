<template>
  <div class="featured-category category">
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
  background: $color3;
  font-size: 2rem;
  font-weight: 700;
  padding: 0.5em;
  text-align: center;
}

.featured-category:nth-child(3n + 1) {
  background: $color4;
}

.featured-category:nth-child(3n) {
  background: $color2;
}
</style>
