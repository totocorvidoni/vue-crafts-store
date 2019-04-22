<template>
  <div id="store">
    <div class="store-categories">
      <menu-category
        v-for="category in mainCategories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      ></menu-category>
    </div>
    <div class="store-products">
      <product-gallery></product-gallery>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import menuCategory from "@/components/MenuCategory.vue";
import productGallery from "@/components/ProductGallery.vue";

export default {
  name: "shop",
  components: {
    menuCategory, productGallery
  },
  computed: {
    ...mapGetters(["mainCategories"]),
  }
};
</script>

<style lang="scss">
#store {
  display: grid;
  grid-template-columns: auto 1fr;
}

.store-categories {
  // background: $color3;
}

.store-products {
  background: $color2;
}
</style>
