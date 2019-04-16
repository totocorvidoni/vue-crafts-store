<template>
    <div class="featured-category">
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

.featured-category:nth-child(3n + 1) {
  background: $color4 ;
}

.featured-category:nth-child(3n) {
  background: $color2 ;
}
</style>
