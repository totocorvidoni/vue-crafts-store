<template>
  <vue-paginate
    v-model="page"
    :page-count="9"
    :page-range="3"
    :margin-pages="1"
    :prev-text="'«'"
    :next-text="'»'"
    :container-class="'pagination'"
    :page-link-class="'page-link'"
    :prev-link-class="'prev-link'"
    :next-link-class="'next-link'"
    :no-li-surround="true"
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
      page: 1
    };
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
    background: $color4;
    color: $color4-strong;

    &.active {
      background: $color4-strong;
      color: $color-light;
      font-weight: 700;

      &:hover {
        cursor: default;
      }
    }
  }

  .prev-link,
  .next-link {
    background: $color-dark;
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
