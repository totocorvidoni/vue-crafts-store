<template>
  <div class="cart">
    <h1 class="title">Mi pedido</h1>
    <div class="items-wrapper">
      <cart-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :name="item.name"
        :price="item.price"
        :amount="item.amount"
        :image="item.image"
        class="item"
      />
    </div>
    <div class="details"></div>
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
.cart {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 4em 1fr;
  place-content: center;

  .title {
    align-self: center;
    justify-self: center;
    grid-column: 1;
  }

  .items-wrapper {
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 1.5rem;
    padding: 0 2em;
    width: 100%;
    justify-content: center;
  }

  .details {
    grid-column: 2;
    grid-row: 1 / -1;
    background: $color4;
  }
}
</style>
