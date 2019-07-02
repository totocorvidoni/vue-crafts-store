<template>
  <button
    class="menu-category link"
    :class="{ active: isActive }"
    @click="onCategoryClick(id)"
  >{{ name }}</button>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "menu-category",
  props: {
    name: String,
    id: Number
  },
  methods: {
    onCategoryClick(id) {
      if (this.$store.state.activeCategory.id !== id) {
        this.$router.push({
          name: "shop",
          params: { page: 1, categoryId: id }
        });
      }
    }
  },

  computed: {
    isActive() {
      return this.$store.state.activeCategory.id == this.id;
    }
  }
};
</script>

<style lang="scss">
.menu-category {
  background: $color3-light;
  border: none;
  border-top-left-radius: 0.5em;
  border-top-right-radius: 0.5em;
  color: $color-adaptable;
  cursor: pointer;
  font-family: $font-title;
  font-size: 0.9em;
  font-weight: 700;
  margin: 0 0.25em;
  padding: 0.5em;
  text-align: start;
  text-transform: uppercase;

  &:hover,
  &:focus {
    filter: $little-light;
  }

  &:focus {
    outline: none;
  }

  &.active {
    background: $color-background;
  }
}
</style>