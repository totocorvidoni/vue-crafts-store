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
    <transition name="fade" mode="out-in">
      <shop-spinner v-if="isLoading" class="spinner"/>
      <div class="catalog-wrapper" v-else-if="productsToDisplay.length != 0">
        <page-navigator/>
        <div class="catalog">
          <product-card
            v-for="product in productsToDisplay"
            :key="product.id"
            :id="product.id"
            :image="product.images[0]"
            :name="product.name"
            :shortDescription="product.short_description"
            :tags="product.tags"
            :price="product.price"
            :priceRegular="product.regular_price"
            :onSale="product.on_sale"
          />
        </div>
        <page-navigator/>
      </div>
      <main v-else class="not-found">
        <img src="@/assets/crochet.svg" alt>
        <h1>Nada por aquí</h1>
        <p>Nuestros tejedores ya están trabajando para poblar esta sección.</p>
      </main>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import MenuCategory from "@/components/MenuCategory.vue";
import ProductCard from "@/components/ProductCard.vue";
import ShopSpinner from "@/components/ShopSpinner.vue";
import PageNavigator from "@/components/PageNavigator.vue";
import store from "@/store/store";

export default {
  name: "shop",
  components: {
    MenuCategory,
    ProductCard,
    ShopSpinner,
    PageNavigator
  },

  computed: {
    ...mapGetters(["mainCategories", "isLoading"]),
    productsToDisplay() {
      return this.$store.state.displayedProducts;
    }
  },

  beforeRouteEnter(to, from, next) {
    // if (to.params.cateogryId != store.activeCategory.id) {
    store.dispatch("setActiveCategory", to.params.categoryId);
    // }
    store.dispatch("setDisplayedProducts", to.params);
    next();
  },

  beforeRouteUpdate(to, from, next) {
    // if (to.params.cateogryId != this.$store.activeCategory.id) {
    this.$store.dispatch("setActiveCategory", to.params.categoryId);
    // }
    this.$store.dispatch("setDisplayedProducts", to.params);
    next();
  }
};
</script>

<style lang="scss">
#store {
  display: grid;
  grid-template-columns: auto 1fr;
  height: 100%;
}

.store-categories {
  background: $color3-light;
  margin-bottom: -1em;
}

.catalog-wrapper {
  display: grid;
  grid-template-rows: auto 1fr;
  justify-items: center;
}

.catalog {
  position: relative;
  justify-self: start;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 2rem;
  align-content: start;
  padding: 1em;
  width: 100%;
}

.fade-enter-active,
.fade-leave-active {
  transition: $quick-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.not-found {
  color: $color-dark-faded;
  text-align: center;
  padding: 2em;
  align-self: center;
  justify-self: center;

  img {
    height: 256px;
    width: 256px;
  }

  // TODO - Add media query for really narrow screens.
}
</style>
