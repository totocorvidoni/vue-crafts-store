<template>
  <div>
    <h1>{{ name }}</h1>
    <ul>
      <li v-for="subCategory in subCategoriesById(id)" :key="subCategory.id">
        {{ subCategory.name }}
      </li>
    </ul>
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
  computed: {
    ...mapGetters(["subCategoriesById"])
  }
};
</script>

<style lang="scss">
</style>
