<template>
  <div>
    <h1>Mi pedido</h1>
    <div v-for="item in items" :key="item.id">
      <cart-item
        :id="item.id"
        :image="item.image[0]"
        :name="item.name"
        :price="item.price"
        :amount="item.amount"
      />
    </div>
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
      return this.$store.cart;
    }
  }
};
</script>

<style lang="scss">
</style>
