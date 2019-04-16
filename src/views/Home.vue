<template>
  <div>
    <h1 class="title">PUPE LEPÚ</h1>
    <div class="category-wrapper">
      <featured-category v-for="category in categoryNames">{{ category }}</featured-category>
    </div>
  </div>
</template>

<script>
import featuredCategory from "@/components/FeaturedCategory.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    featuredCategory
  },
  methods: {},
  computed: {
    ...mapGetters(['categoryNames'])
  }
};
</script>

<style lang="scss">
.title {
  font-family: $font-title;
  text-align: center;
  text-transform: uppercase;
  font-size: 10rem;
  font-weight: 300;
  padding: 1rem;
}
.category-wrapper {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  height: 400px;
  // justify-items: center;
}
</style>
