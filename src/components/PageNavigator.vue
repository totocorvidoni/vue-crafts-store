<template>
  <vue-paginate
    v-model="page"
    :page-count="totalPages"
    :page-range="3"
    :margin-pages="1"
    :prev-text="'«'"
    :next-text="'»'"
    :container-class="'pagination'"
    :page-link-class="'page-link'"
    :prev-link-class="'prev-link'"
    :next-link-class="'next-link'"
    :no-li-surround="true"
    :click-handler="navigate"
  ></vue-paginate>
</template>

<script>
import VuePaginate from "vuejs-paginate";

export default {
  name: "page-navigator",
  components: {
    VuePaginate
  },
  data() {
    return {
      itemsPerPage: 10
    };
  },

  methods: {
    navigate(page) {
      this.$router.push({
        name: "shop",
        params: { page: page, categoryId: this.$store.state.activeCategory }
      });
    }
  },

  computed: {
    page() {
      return parseInt(this.$route.params.page);
    },

    totalProducts() {
      return this.$store.state.displayedProductsAmount;
    },

    totalPages() {
      return Math.ceil(this.totalProducts / this.itemsPerPage);
    }
  }
};
</script>

<style lang="scss">
// Simulates inside top and bottom non intrusive borders.
@mixin shadow-border($border-color) {
  box-shadow: inset 0 -2px 0 0 rgba($color: $border-color, $alpha: 1),
    inset 0 2px 0 0 rgba($color: $border-color, $alpha: 1);
}

.pagination {
  display: flex;
  color: $color-dark;
  background: $color-background;
  list-style-type: none;
  margin-left: auto;

  .page-link,
  .prev-link,
  .next-link {
    display: grid;
    place-items: center;
    text-align: center;
    transition: $quick-out;
    user-select: none;
    width: 35px;

    &:hover {
      cursor: pointer;
    }

    &:hover,
    &:focus {
      filter: $little-light;
    }

    &:active {
      filter: $little-shadow;
    }

    &:focus {
      outline: none;
    }
  }

  .page-link {
    @include shadow-border($color4);
    color: $color4;

    &.active {
      @include shadow-border($color4-strong);
      color: $color4-strong;
      font-weight: 700;

      &:hover {
        cursor: default;
      }

      &:hover,
      &:active {
        filter: none;
      }
    }
  }

  .prev-link,
  .next-link {
    @include shadow-border($color4-strong);
    color: $color4-strong;

    &.disabled {
      @include shadow-border($color3-light);
      color: $color3-light;

      &:hover {
        filter: none;
        cursor: no-drop;
      }

      &:active {
        filter: none;
      }
    }
  }
}
</style>
