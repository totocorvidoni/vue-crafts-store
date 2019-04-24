<template>
  <div class="full-product">
    <div class="id">{{info.id}}</div>
    <div class="name">{{info.name}}</div>
    <div class="description">{{info.description}}</div>
    <router-link :to="{ name: 'products', params: { id: '96'} }">GO</router-link>
  </div>
</template>

<script>
import store from "@/store/store"; // to access the store before component is created.

export default {
  name: "full-product",
  computed: {
    info() {
      return this.$store.state.activeProduct
    }
  },

  async beforeRouteEnter(to, from, next) {
    // 'this' does not exist yet.
    await store.dispatch("setActiveProduct", to.params.id);
    next();
  },

  async beforeRouteUpdate(to, from, next) {
    const info = await this.$store.dispatch("setActiveProduct", to.params.id);
    next();
  }
};
</script>

<style lang="scss">
</style>
