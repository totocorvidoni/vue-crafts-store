<template>
  <div class="menu-section">
    <button
      class="menu-main-category"
      :class="{ 'menu-Expanded': isExpanded }"
      @click="onMainCategoryClick(id)"
    >
      <div class="marker"></div>
      <div class="menu-category">
        <h3>{{ name }}</h3>
      </div>
    </button>
    <transition name="expand" mode="in-out">
      <ul class="menu-sub-categories" v-show="isExpanded">
        <li
          class="menu-category"
          v-for="subCategory in subCategoriesById(id)"
          :key="subCategory.id"
          @click="showProducts(subCategory.id)"
        >{{ subCategory.name }}</li>
      </ul>
    </transition>
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
    toggleCategory(id) {
      if (
        this.$store.state.expandedCategory &&
        this.$store.state.expandedCategory == id
      ) {
        this.$store.dispatch("removeExpandedCategory");
      } else {
        this.$store.dispatch("setExpandedCategory", id);
      }
    },

    showProducts(id) {
      if (this.$store.state.displayedCategory !== id) {
        this.$router.push({
          name: "shop",
          params: { page: 1, categoryId: id }
        });
      }
    },

    onMainCategoryClick(id) {
      this.toggleCategory(id);
      this.showProducts(id);
    }
  },
  computed: {
    ...mapGetters(["subCategoriesById"]),
    isExpanded() {
      if (this.$store.state.expandedCategory) {
        return this.id == this.$store.state.expandedCategory;
      }
    }
  }
};
</script>

<style lang="scss">
.menu-main-category {
  cursor: pointer;
  display: flex;
  background: $color-background;
  border: none;
  color: $color-dark;
  font-family: $font-condensed;
  font-size: 1.1em;
  font-weight: 700;
  text-align: start;
  text-transform: uppercase;
  width: 100%;

  & > * {
    transition: $quick-out;
    transform: translateX(-20px);
  }

  .menu-category {
    padding: 0.5em;
  }

  &:hover {
    & > * {
      transform: translateX(0);
      color: $color-dark-faded;
    }

    & .marker {
      border-left-color: $color-dark-faded;
    }
  }

  &:focus {
    outline: none;
  }
}

.marker {
  margin: auto 0;
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 20px solid $color-dark;
}

.menu-Expanded > * {
  transform: translateX(0);
}

.menu-sub-categories {
  padding-left: 2rem;
  list-style-type: none;
  font-family: $font-condensed;
  font-size: 1.1em;
  li:before {
    content: "- ";
  }

  li {
    cursor: pointer;
  }

  li:hover {
    color: $color-dark-faded;
  }
}

.slide-enter-expand,
.slide-leave-expand {
  transition: $quick-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(-25px);
}
</style>