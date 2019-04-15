<template>
  <div>
    <h1 class="title">PUPE LEPÚ</h1>
    <main-categories class="category-wrapper"></main-categories>
  </div>
</template>

<script>
import mainCategories from "@/components/MainCategories.vue";

export default {
  components: {
    mainCategories
  },
  methods: {},
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
