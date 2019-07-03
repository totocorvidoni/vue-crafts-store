<template>
  <div id="store">
    <aside class="store-nav">
      <menu-category
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      ></menu-category>
      <page-navigator class="top-pager" />
    </aside>
    <transition name="fade" mode="out-in">
      <shop-spinner v-if="isLoading" class="spinner" />
      <div class="catalog-wrapper" v-else-if="productsToDisplay.length != 0">
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
      </div>
      <main v-else class="not-found">
        <img src="@/assets/crochet.svg" alt />
        <h1>Nada por aquí</h1>
        <p>Nuestros tejedores ya están trabajando para poblar esta sección.</p>
      </main>
    </transition>
    <page-navigator class="bottom-pager" />
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
    ...mapGetters(["isLoading"]),
    categories() {
      return this.$store.state.categories;
    },

    productsToDisplay() {
      return this.$store.state.displayedProducts;
    }
  },

  beforeRouteEnter(to, from, next) {
    store.dispatch("setActiveCategory", to.params.categoryId);
    store.dispatch("setDisplayedProducts", to.params);
    next();
  },

  beforeRouteUpdate(to, from, next) {
    this.$store.dispatch("setActiveCategory", to.params.categoryId);
    this.$store.dispatch("setDisplayedProducts", to.params);
    next();
  }
};
</script>

<style lang="scss">
#store {
  position: relative;
  display: flex;
  flex-flow: column;
  background: no-repeat bottom/cover url("../assets/brown-forest-no-hill.svg");

  .store-nav {
    display: flex;
    position: sticky;
    top: 2.5rem;
    justify-content: flex-start;
    background: $color3-light;
    z-index: 50;
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

  .not-found {
    color: $color-dark-faded;
    text-align: center;
    padding: 2em;
    margin: auto 0;

    img {
      height: 300px;
      width: 300px;
    }

    // TODO - Add media query for really narrow screens.
  }

  .bottom-pager {
    display: none;
  }
}

@media screen and (max-width: $semi-wide) {
  #store {
    .top-pager {
      display: none;
    }

    .bottom-pager {
      display: flex;
      justify-content: center;
      position: sticky;
      bottom: 0;
      border-radius: 0.25em;
      padding: 0.5em 0;
      z-index: 50;
      width: 100%;
    }
  }
}
</style>
