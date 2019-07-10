<template>
  <div class="home">
    <div class="hero">
      <div class="logo-wrapper">
        <img src="@/assets/logo/bottom.svg" class="logo" />
      </div>
      <div class="divider"></div>
    </div>
    <intro-comp />
    <how-to />
    <div class="featured-products">
      <h2 class="uppercase home-title">Destacados</h2>
      <transition name="fade" mode="out-in">
        <shop-spinner v-if="loadingFeaturedProducts" class="spinner" />
        <div v-else class="product-wrapper">
          <product-card
            v-for="product in featuredProducts"
            :key="product.id"
            :id="product.id"
            :image="product.images[0]"
            :name="product.name"
            :shortDescription="product.short_description"
            :tags="product.tags"
            :price="product.price"
            :priceRegular="product.regular_price"
            :onSale="product.on_sale"
            class="product"
          />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import IntroComp from "@/components/IntroComp.vue";
import HowTo from "@/components/HowTo.vue";
import ProductCard from "@/components/ProductCard.vue";
import ShopSpinner from "@/components/ShopSpinner.vue";

export default {
  name: "home",
  components: { IntroComp, HowTo, ProductCard, ShopSpinner },

  beforeCreate() {
    this.$store.dispatch("setFeaturedProducts");
  },

  computed: {
    featuredProducts() {
      return this.$store.state.featuredProducts;
    },

    loadingFeaturedProducts() {
      return this.featuredProducts.length == 0;
    }
  }
};
</script>

<style lang="scss">
.home {
  .hero {
    display: grid;
    grid-template-rows: 1fr 100px;
    background: url("../assets/hero-background.svg");
    min-height: 95vh;

    .logo-wrapper {
      align-self: center;
      display: flex;
      justify-content: center;
      padding: 1rem;
      height: 80%;
    }

    .logo {
      font-family: $font-brand;
      height: 100%;
      width: auto;
    }
  }

  .divider {
    background: repeat top url("../assets/saw.svg");
  }

  .featured-products {
    padding: 1em;
    margin: 1em;

    .product-wrapper {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    .product {
      width: 20%;
      margin: 0.5em;

      .title {
        font-family: $font-title;
        color: $color1;
      }
    }
  }

  .home-title {
    text-align: center;
    color: $color1;
    margin: 1em;
    letter-spacing: 0.25em;
  }

  .spinner {
    margin: 0 auto;
  }
}

@media all and (max-width: $narrow) {
  .home {
    .category-wrapper {
      grid-auto-flow: row;
      margin: 0 auto;
      border: none;
      padding: 0;
    }

    .product-wrapper {
      .product {
        width: 45%;
      }
    }
  }
}

@media all and (max-width: $smallest) {
  .home {
    .featured-products {
      padding: 0;
      margin: 0;

      .product {
        width: 100%;
        margin: 0;
      }
    }
  }
}
</style>
