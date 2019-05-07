<template>
  <div>
    <h1 class="title brand">PUPE LEPÚ</h1>
    <div class="category-wrapper">
      <featured-category
        v-for="category in mainCategories"
        :key="category.id"
        :id="category.id"
        :image="category.image"
        :name="category.name"
      >{{ category.name }}</featured-category>
    </div>
    <h3>Destacados!!</h3>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import featuredCategory from "@/components/FeaturedCategory.vue";

export default {
  components: {
    featuredCategory
  },
  methods: {},
  computed: {
    ...mapGetters(["mainCategories"])
  }
};
</script>

<style lang="scss">

.brand {
  font-size: 10rem;
  font-weight: 300;
  text-transform: uppercase;
}

.category-wrapper {
  display: flex;
  justify-content: center;
}
</style>
