<template>
  <vue-paginate
    v-model="page"
    :page-count="10"
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
      page: this.$route.params.page,
      itemsPerPage: 10
    };
  },

  methods: {
    navigate(page) {
      this.$router.push({
        name: "shop",
        params: { page: page, categoryId: this.$store.state.activeCategory.id }
      });
    }
  },

  computed: {
    pages() {
      return Math.ceil(
        this.$store.state.activeCategory.count / this.itemsPerPage
      );
    }
  }
};
</script>

<style lang="scss">
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
    box-shadow: inset 0 -2px 0 0 rgba($color: $color4, $alpha: 1);
    color: $color4;

    &.active {
      box-shadow: inset 0 -2px 0 0 rgba($color: $color4-strong, $alpha: 1);
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
    box-shadow: inset 0 -2px 0 0 rgba($color: $color4-strong, $alpha: 1);
    color: $color4-strong;

    &.disabled {
      box-shadow: inset 0 -2px 0 0 rgba($color: $color3-light, $alpha: 1);
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
