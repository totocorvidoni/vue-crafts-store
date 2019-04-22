<template>
  <div id="store">
    <aside class="store-categories">
      <menu-category
        v-for="category in mainCategories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      ></menu-category>
    </aside>
    <main class="store-catalog">
      <transition name="fade">
      <div class="spinner-wrapper" v-show="isLoading">
        <looping-rhombuses-spinner class="spinner" :rhombus-size="70" :animation-duration="2000"/>
      </div>
      </transition>
      <product-card
        v-for="product in productsToDisplay"
        :key="product.id"
        :id="product.id"
        :images="product.images"
        :name="product.name"
        :shortDescription="product.short_description"
        :tags="product.tags"
        :price="product.price"
      ></product-card>
    </main>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuCategory from "@/components/MenuCategory.vue";
import ProductCard from "@/components/ProductCard.vue";
import { LoopingRhombusesSpinner } from "epic-spinners";

export default {
  name: "shop",
  components: {
    MenuCategory,
    ProductCard,
    LoopingRhombusesSpinner
  },
  computed: {
    ...mapGetters(["mainCategories"]),
    productsToDisplay() {
      return this.$store.state.displayedProducts;
    },
    isLoading() {
      return this.$store.state.productsLoading;
    }
  }
};
</script>

<style lang="scss">
#store {
  display: grid;
  grid-template-columns: auto 1fr;
}

.store-catalog {
  position: relative;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  padding: 1em;
  height: 100%;
  width: 100%;
}

.spinner-wrapper {
  position: absolute;
  display: grid;
  background: $color-background;
  place-items: center;
  height: 100%;
  width: 100%;
}
// overwrites the epic-spinners :color directive to use sass variables
.spinner > * {
  background-color: $color3 !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: $transition-loading;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
