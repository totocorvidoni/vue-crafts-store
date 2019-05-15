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
        <paginate-links for="products" :limit="6" :show-step-links="true"/>
        <paginate tag="main" class="catalog" name="products" :list="productsToDisplay" :per="10">
            <product-card
              v-for="product in paginated('products')"
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
        </paginate>
        <paginate-links for="products" :limit="6" :show-step-links="true" :hide-single-page="true"/>
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
import store from "@/store/store";

export default {
  name: "shop",
  components: {
    MenuCategory,
    ProductCard,
    ShopSpinner
  },
  data() {
    return {
      paginate: ["products"]
    };
  },

  watch: {
    resetPagination() {
      if (resetPagination) {
        this.$refs.catalog.goToPage(1);
        this.$store.commit('resetPaginationFinish');
      }
    }
  },

  computed: {
    ...mapGetters(["mainCategories", "isLoading"]),
    productsToDisplay() {
      return this.$store.state.displayedProducts;
    }
  },

  beforeRouteEnter(to, from, next) {
    store.commit("setActiveMenuCategory", to.params.categoryId);
    store.dispatch("setDisplayedProducts", to.params);
    next();
  },

  beforeRouteUpdate(to, from, next) {
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

.catalog-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
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
}

// Paginate

ul.paginate-links {
  display: flex;
  color: $color4-strong;
  list-style-type: none;
  margin-top: 1em;

  & > li > a {
    display: block;
    background: $color4;
    color: $color4-strong;
    text-align: center;
    transition: $medium-balanced;
    user-select: none;
    width: 35px;

    &:hover {
      cursor: pointer;
    }
  }

  & > li.active > a {
    background: $color4-strong;
    color: $color-light;
    font-weight: 700;

    &:hover {
      cursor: default;
    }
  }

  & > li {
    &.left-arrow > a,
    &.right-arrow > a {
      background: $color-dark;
      color: $color-light;
    }

    &.left-arrow > a {
      border-top-left-radius: 0.5em;
      border-bottom-left-radius: 0.5em;
    }
    &.right-arrow > a {
      border-top-right-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
    }

    &.disabled > a {
      background: $color-dark-light;
      &:hover {
        cursor: no-drop;
      }
    }
  }
}
</style>
