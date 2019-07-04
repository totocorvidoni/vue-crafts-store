<template>
  <router-link
    :to="{name: 'shop', params: { page: 1, categoryId: id }}"
    class="main-category"
    :class="{ hidden: inShop }"
  >{{ name }}</router-link>
</template>

<script>
export default {
  name: "main-category",
  props: {
    id: Number,
    name: String
  },

  computed: {
    inShop() {
      return this.$route.name == "shop";
    }
  }
};
</script>

<style lang="scss">
.main-category {
  color: $color-light;
  font-weight: 400;
  white-space: nowrap;
  margin: auto 0;
  transition: $quick-out;

  &:hover {
    box-shadow: 0 3px 0 0 rgba($color: $color-light, $alpha: 0.9);
  }
}

@media all and (max-width: 1050px) {
  .main-category {
    display: none;
  }
}
</style>
