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
      <main v-else-if="productsToDisplay.length != 0" class="store-catalog">
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
      </main>
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

export default {
  name: "shop",
  components: {
    MenuCategory,
    ProductCard,
    ShopSpinner
  },

  computed: {
    ...mapGetters(["mainCategories"]),
    productsToDisplay() {
      return this.$store.state.displayedProducts;
    },
    isLoading() {
      return this.$store.state.productsLoading;
    }
  },

  beforeRouteUpdate(to, from, next) {
    const id = to.params.categoryId;
    this.$store.dispatch("setDisplayedProducts", id);
    next();
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
  grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
  grid-gap: 2rem;
  padding: 1em;
}

.spinner {
  padding: 1em;
  margin: auto;
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
  img {
    height: 256px;
    width: 256px;
  }
}
</style>
