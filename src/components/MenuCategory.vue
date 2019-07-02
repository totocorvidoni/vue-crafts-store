<template>
  <div class="menu-section">
    <button class="menu-main-category" @click="onMainCategoryClick(id)">
      <div class="menu-category">
        <h3>{{ name }}</h3>
      </div>
    </button>
  </div>
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
    onMainCategoryClick(id) {
      if (this.$store.state.displayedCategory !== id) {
        this.$router.push({
          name: "shop",
          params: { page: 1, categoryId: id }
        });
      }
    }
  }
};
</script>

<style lang="scss">
.menu-main-category {
  cursor: pointer;
  display: flex;
  background: $color3-light;
  border: none;
  color: $color-adaptable;
  font-family: $font-title;
  font-size: 1.1em;
  font-weight: 700;
  text-align: start;
  text-transform: uppercase;
  width: 100%;

  & > * {
    transition: $quick-out;
  }

  .menu-category {
    padding: 0.5em;
  }

  &:hover {
    & > * {
      filter: $little-light;
    }
  }

  &:focus {
    outline: none;
  }
}
</style>