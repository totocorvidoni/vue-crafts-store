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
        <div class="price">${{ info.price }}</div>
      </div>
    </main>
    <div class="related">
      <product-card
        v-for="product in relatedProducts"
        :key="product.id"
        :id="product.id"
        :name="product.name"
        :image="product.images[0]"
        :price="product.price"
      />
      <router-link :to="{ name: 'products', params: { id: '96' } }">GO</router-link>
    </div>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.
import Showcase from "@/components/ProductShowcase.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  name: "full-product",
  components: {
    Showcase,
    ProductCard
  },

  computed: {
    info() {
      return this.$store.state.activeProduct;
    },

    relatedProducts() {
      return this.$store.state.relatedProducts;
    }
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("setActiveProduct", to.params.id);
    await store.dispatch("setRelatedProducts", store.state.activeProduct.related_ids);
    next();
  },

  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch("setActiveProduct", to.params.id);
    await this.$store.dispatch("setRelatedProducts", this.$store.state.activeProduct.related_ids);
    next();
  }
};
</script>

<style lang="scss">
.full-product {
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
    padding: 2rem 5rem;

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

      .price {
        display: inline-block;
        font-size: 1.3em;
        margin-top: 1em;
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
}
</style>
