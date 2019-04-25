<template>
  <div class="full-product">
    <main class="product">
      <showcase :images="images"/>
      <div class="information">
        <h1 class="name">{{ info.name }}</h1>
        <p class="description">{{ info.description }}</p>
      </div>
    </main>
    <router-link :to="{ name: 'products', params: { id: '96'} }">GO</router-link>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.
import showcase from "@/components/product-showcase.vue";

export default {
  name: "full-product",
  components: {
    showcase
  },

  computed: {
    info() {
      return this.$store.state.activeProduct;
    },
    images() {
      return this.info.images;
    }
  },

  async beforeRouteEnter(to, from, next) {
    await store.dispatch("setActiveProduct", to.params.id);
    next();
  },

  async beforeRouteUpdate(to, from, next) {
    await this.$store.dispatch("setActiveProduct", to.params.id);
    this.activeImage = this.images[0].id;
    next();
  }
};
</script>

<style lang="scss">
.full-product {
  .product {
    display: flex;
    padding: 2rem;
  }
}
</style>
