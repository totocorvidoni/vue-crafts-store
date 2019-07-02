<template>
  <div class="full-product">
    <main class="product">
      <product-showcase :images="info.images" />
      <div class="information">
        <h1 class="name">{{ info.name }}</h1>
        <p class="description" v-html="info.description"></p>
        <div class="details">
          <div class="divider">detalles.</div>
          <ul v-for="attribute in info.attributes" :key="attribute.id" class="attribute">
            <span class="name">{{ attribute.name }}:</span>
            <li v-for="item in attribute.options">{{ item }}</li>
          </ul>
        </div>
        <price-tag :price="info.price" :priceRegular="info.regular_price" />
        <div class="call-to-action">
          <button class="button action add" v-if="!productInCart" @click="onAddToCartClick">
            <img src="@/assets/add.svg" />
            <span class="text">Agregar al pedido</span>
          </button>
          <button class="button action remove" v-else @click="onRemoveFromCartClick">
            <img src="@/assets/delete.svg" />
            <span class="text">Eliminar del pedido</span>
          </button>
        </div>
      </div>
    </main>
    <aside class="related">
      <h2>Nuestras sugerencias</h2>
      <div class="products" v-if="!isLoading">
        <product-card
          v-for="product in relatedProducts"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :image="product.images[0]"
          :price="product.price"
          :priceRegular="product.regular_price"
          :onSale="product.on_sale"
        />
      </div>
      <little-spinner class="spinner" v-else />
    </aside>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.
import { mapGetters } from "vuex";
import ProductShowcase from "@/components/ProductShowcase.vue";
import ProductCard from "@/components/ProductCard.vue";
import PriceTag from "@/components/base/PriceTag.vue";
import LittleSpinner from "@/components/LittleSpinner.vue";

export default {
  name: "full-product",
  components: {
    ProductShowcase,
    ProductCard,
    PriceTag,
    LittleSpinner
  },

  methods: {
    onAddToCartClick() {
      return this.$store.dispatch("addToCart", this.info);
    },

    onRemoveFromCartClick() {
      return this.$store.dispatch("removeFromCart", this.info.id);
    }
  },

  computed: {
    ...mapGetters(["isLoading"]),
    info() {
      return this.$store.state.activeProduct;
    },

    relatedProducts() {
      return this.$store.state.relatedProducts;
    },

    productInCart() {
      return this.$store.getters.productInCart(this.info.id);
    }
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("setActiveProduct", to.params.id);
    await store.dispatch(
      "setRelatedProducts",
      store.state.activeProduct.related_ids
    );
    next();
  },

  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch("setActiveProduct", to.params.id);
    await this.$store.dispatch(
      "setRelatedProducts",
      this.$store.state.activeProduct.related_ids
    );
    next();
  }
};
</script>

<style lang="scss">
.full-product {
  padding: 0 4rem;

  .product {
    display: grid;
    grid-gap: 2em;
    grid-template-columns: 60% 40%;
    grid-template-areas: "showcase information";
    min-height: 95vh;

    .showcase {
      grid-area: showcase;
      padding: 1em;
      max-height: 95vh;
    }

    .information {
      grid-area: information;
      padding: 1em;
      color: $color-dark-light;

      li {
        list-style-type: none;
      }

      & > .name {
        font-family: $font-title;
        color: $color1;
        margin-bottom: 0.25em;
      }

      .details {
        border-bottom: $border-card;
        border-bottom-left-radius: 0.5em;
        border-bottom-right-radius: 0.5em;
        margin: 1em 5em;
        font-size: 0.8em;
        padding: 1em 0;
      }

      .attribute {
        display: flex;

        .name {
          color: $color1;
        }

        li {
          margin-left: 0.5em;

          &:not(:last-child):after {
            content: ",";
          }

          &:last-child:after {
            content: ".";
          }
        }
      }
    }
  }

  .price-tag {
    font-size: 1.5em;
    justify-content: center;
    margin: 1rem;
  }

  .call-to-action {
    margin: 1rem;
  }

  .action {
    display: flex;
    justify-content: center;
    align-content: center;
    border: none;
    border-radius: 0.5em;
    color: $color-light;
    font-size: 1.1em;
    margin: 0 auto;
    padding: 1em;

    img {
      width: auto;
      height: 1em;
      object-fit: contain;
      margin-right: 0.5em;
    }
  }

  .add {
    background: $color-good;
  }

  .remove {
    background: $color-bad;
  }

  .divider {
    border-bottom: $border-card;
    color: $color-dark-faded;
    font-size: 0.8em;
    font-style: italic;
    margin-bottom: 1em;
    text-align: end;
  }

  .related {
    margin: 1em 0;

    & > h2 {
      color: $color1;
      text-align: center;
      // margin: 1em 0;
      text-transform: uppercase;
    }

    .products {
      font-size: 0.6em;
      display: grid;
      justify-content: center;
      grid-gap: 1.5em;
      grid-template-columns: repeat(auto-fit, 180px);
      padding: 1em;
    }
  }

  .spinner {
    padding: 0 1em;
  }
}

@media all and (max-width: $wide) {
  .full-product {
    padding: 0;
  }
}

@media all and (max-width: $narrow) {
  .full-product {
    .product {
      grid-template-columns: 1fr;
      grid-template-areas:
        "showcase"
        "information";

      .showcase {
        padding: 0;
      }
    }

    .call-to-action {
      justify-content: flex-end;
    }
  }
}

@media all and (max-width: $smallest) {
  .full-product {
    .related {
      .products {
        font-size: 0.8em;
        grid-gap: 0;
        grid-template-columns: 1fr;
        // padding: 0;
      }
    }
  }
}
</style>
