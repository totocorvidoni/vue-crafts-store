<template>
  <div>
    <h1>Mi pedido</h1>
    <cart-item
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :name="item.name"
      :price="item.price"
      :amount="item.amount"
      :image="item.image"
    />
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";

export default {
  name: "cart",
  components: {
    CartItem
  },
  computed: {
    items() {
      return this.$store.state.cart;
    }
  }
};
</script>

<style lang="scss">
</style>
