<template>
  <div class="featured-category grower-childs" @click="onClick">
    <div class="title">{{ name }}</div>
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
  border-bottom: 2px solid $color4;
  border-top: 2px solid $color4;
  cursor: pointer;
  color: $color-light;
  font-size: 2rem;
  font-weight: 700;
  font-family: $font-title;
  text-transform: uppercase;
  transition: $quick-out;

  .title {
    color: $color-dark;
    font-size: 1em;
    padding: 0 1rem;
    text-align: center;
    transition: $quick-out;
  }

  &:hover {
    border-bottom: 2px solid $color2;
    border-top: 2px solid $color2;
  }
  
  &:active {
    .title {
      color: $color-dark-light;
    }
  }
}
</style>
