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
  color: $color-light;
  font-weight: 400;
  white-space: nowrap;
  margin: auto 0;

  &:hover {
    filter: $little-light;
  }
}

@media all and (max-width: 1050px) {
  .main-category {
    display: none;
  }
}
</style>
