<template>
  <vue-paginate
    v-model="page"
    :page-count="pages"
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
  color: $color4-strong;
  list-style-type: none;
  margin-top: 1em;

  .page-link,
  .prev-link,
  .next-link {
    display: block;
    text-align: center;
    transition: $quick-out;
    user-select: none;
    width: 35px;

    &:hover {
      cursor: pointer;
    }

    &:active,
    &:focus {
      outline: none;
    }
  }

  .page-link {
    background: $color4-light;
    color: $color4-strong;

    &.active {
      background: $color4;
      font-weight: 700;

      &:hover {
        cursor: default;
      }
    }
  }

  .prev-link,
  .next-link {
    background: $color4-strong;
    color: $color-light;

    &.disabled {
      background: $color-dark-light;
      &:hover {
        cursor: no-drop;
      }
    }
  }

  .prev-link {
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
  }
  .next-link {
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
  }
}
</style>
