<template>
  <div class="full-product">
    <main class="product">
      <showcase :images="info.images"/>
      <div class="information">
        <h1 class="name">{{ info.name }}</h1>
        <p class="description" v-html="info.description"></p>
        <div class="divider">detalles.</div>
        <div class="details">
          <ul v-for="attribute in info.attributes" :key="attribute.id" class="attribute">
            <span class="name">{{ attribute.name }}:</span>
            <li v-for="item in attribute.options">{{ item }}</li>
          </ul>
        </div>
        <div class="call-to-action">
          <price-tag :price="info.price" :priceRegular="info.regular_price"/>
          <button
            class="button action-icon add"
            v-if="!productInCart"
            v-tooltip="{ content: 'Agregar al pedido' }"
            @click="onAddToCartClick"
          >
            <img src="@/assets/add.svg">
          </button>
          <button
            class="button action-icon remove"
            v-else
            v-tooltip="{ content: 'Eliminar del pedido' }"
            @click="onRemoveFromCartClick"
          >
            <img src="@/assets/delete.svg">
          </button>
        </div>
      </div>
    </main>
    <aside class="related">
      <h3>Nuestras sugerencias</h3>
      <div class="products">
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
    </aside>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.
import Showcase from "@/components/ProductShowcase.vue";
import ProductCard from "@/components/ProductCard.vue";
import PriceTag from "@/components/base/PriceTag.vue";

export default {
  name: "full-product",
  components: {
    Showcase,
    ProductCard,
    PriceTag
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
    info() {
      return this.$store.state.activeProduct;
    },

    relatedProducts() {
      return this.$store.state.relatedProducts;
    },

    productInCart() {
      return this.$store.getters.productInCart(this.info.id)
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
  padding: 2rem 5rem;

  .divider {
    border-bottom: $border-card;
    color: $color-dark-faded;
    font-size: 0.8em;
    font-style: italic;
    margin: 1em 0;
    text-align: end;
  }

  .product {
    display: flex;
    justify-content: center;

    .showcase {
      padding: 1em;
      min-width: 350px;
    }

    .information {
      text-align: justify;
      padding: 1em;
      margin-left: 1em;
      color: $color-dark-light;

      li {
        list-style-type: none;
      }

      h1,
      h2,
      h3,
      h4,
      h5 {
        color: $color1-strong;
        font-weight: 400;
      }

      .call-to-action {
        position: relative;
        display: inline-flex;
        justify-content: flex-start;
        align-content: center;
        font-size: 1.2em;
        margin-top: 1em;
        height: 50px;
      }

      .add {
        background: $color-good;
      }

      .remove {
        background: $color-bad;
      }

      .action-icon {
        // display: grid;
        // place-content: center;
        border: none;
        border-radius: 0.5em;
        color: $color-light;
        padding: 0.75em;
        width: 100%;
        height: 100%;
        margin-left: 10px;

        img {
          width: auto;
          height: 100%;
          object-fit: contain;
        }
      }

      .details {
        padding: 0 1em;
        font-size: 0.8em;
      }

      .attribute {
        display: flex;

        .name {
          color: $color1-strong;
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

  .related {
    display: grid;
    place-content: center;
    h3 {
      text-align: center;
    }
    .products {
      font-size: 0.6em;
      display: grid;
      grid-gap: 2em;
      grid-auto-flow: column;
      grid-auto-columns: 180px;
      padding: 1em;
    }
  }
}
</style>
