<template>
  <div class="home">
    <h1 class="title brand">PUPE LEPÚ</h1>
    <div class="category-wrapper">
      <main-category
        v-for="category in mainCategories"
        :key="category.id"
        :id="category.id"
        :image="category.image"
        :name="category.name"
      >{{ category.name }}</main-category>
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
import MainCategory from "@/components/MainCategory.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "home",
  components: {
    MainCategory,
    ProductCard
  },

  beforeCreate() {
    this.$store.dispatch("setFeaturedProducts");
  },

  computed: {
    ...mapGetters(["mainCategories"]),
    featuredProducts() {
      return this.$store.state.featuredProducts;
    }
  }
};
</script>

<style lang="scss">
.home {
  .brand {
    font-size: 10rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  .category-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 2em;
    * {
      
      color: $color-dark-light;
    }
  }

  .featured-products {
    padding: 1em;
    margin: 1em;

    .title {
      color: $color1;
      font-size: 2em;
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

@media all and (max-width: 760px) {
  .home {
    .category-wrapper {
      margin-bottom: 1em;
      * {
        width: 100%;
      }
    }

    .product-wrapper {
      .product {
        width: 45%;
      }
    }
  }
}

@media all and (max-width: 530px) {
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
