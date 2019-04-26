<template>
  <div class="full-product">
    <main class="product">
      <showcase :images="info.images" />
      <div class="information">
        <h1 class="name">{{ info.name }}</h1>
        <p class="description" v-html="info.description"></p>
      </div>
    </main>
    <router-link :to="{ name: 'products', params: { id: '96' } }">GO</router-link>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.
import showcase from "@/components/ProductShowcase.vue";

export default {
  name: "full-product",
  components: {
    showcase
  },

  computed: {
    info() {
      return this.$store.state.activeProduct;
    }
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("setActiveProduct", to.params.id);
    next();
  },

  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch("setActiveProduct", to.params.id);
    next();
  }
};
</script>

<style lang="scss">
.full-product {
  .product {
    display: flex;
    justify-content: center;
    padding: 2rem;

    .showcase {
      padding: 1em;
    }

    .information {
      h1,
      h2,
      h3,
      h4,
      h5,
      b {
        color: $color1;
      }

      .name {
      }

      .description {
        text-align: justify;
        max-width: 700px;
      }
    }
  }
}
</style>
