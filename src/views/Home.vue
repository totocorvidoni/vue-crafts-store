<template>
  <div class="home">
    <div class="hero">
      <h1>PUPE</h1>
      <h1>LEPÚ</h1>
    </div>
    <div class="featured-products">
      <h2 class="uppercase title">Destacados</h2>
      <div class="product-wrapper">
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "home",
  components: { ProductCard },

  beforeCreate() {
    this.$store.dispatch("setFeaturedProducts");
  },

  computed: {
    featuredProducts() {
      return this.$store.state.featuredProducts;
    }
  }
};
</script>

<style lang="scss">
.home {
  .hero {
    background: no-repeat top/cover url("../images/forest-no-hill.svg");
    box-shadow: inset 0 -10px 10px -5px $color-background;
    font-size: 5rem;
    text-align: center;
    text-transform: uppercase;
    padding: 1em;

    & > * {
      font-family: $font-brand;
    }
  }

  .featured-products {
    padding: 1em;
    margin: 1em;

    .title {
      text-align: center;
      color: $color1;
      font-size: 2em;
      margin: 1em 0;
    }

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
        font-weight: 400;
        font-size: 1.8em;
      }
    }
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
