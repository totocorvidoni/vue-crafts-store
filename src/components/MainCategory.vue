<template>
  <router-link
    :to="{name: 'shop', params: {page: 1, categoryId: id}}"
    class="main-category grower"
  >{{ name }}</router-link>
</template>

<script>
export default {
  name: "main-category",
  props: {
    id: Number,
    name: String
  }
};
</script>

<style lang="scss">
.main-category {
  display: block;
  color: $color-dark-light;
  cursor: pointer;
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  white-space: nowrap;
  transition: $quick-out;

  &:hover {
    filter: $little-light;
  }
}

@media all and (max-width: $narrow) {
  .main-category {
    // border-top: 1px solid $color1;
    // border-bottom: 1px solid $color1;
    background: $color1;
    color: $color-adaptable;
    width: 100%;
  }
}
</style>
