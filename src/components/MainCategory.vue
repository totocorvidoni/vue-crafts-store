<template>
  <div class="main-category grower-childs" @click="onClick">
    <div class="title">{{ name }}</div>
  </div>
</template>

<script>
export default {
  name: "main-category",
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
.main-category {
  border-bottom: 2px solid $color1;
  border-top: 2px solid $color1;
  cursor: pointer;
  color: $color-light;
  font-size: 2rem;
  font-weight: 700;
  font-family: $font-condensed;
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
    
  }
  
  &:active {
    .title {
      color: $color-dark-light;
    }
  }
}
</style>
