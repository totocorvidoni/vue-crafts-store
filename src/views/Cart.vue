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
        :image="item.images[0]"
      />
    </div>
    <div class="details">
      <h2>Resumen</h2>
      <p>Total: {{ formatPrice(priceSum) }}</p>
      <div>comentarios</div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import priceFormatter from "@/mixins/priceFormatter"

export default {
  name: "cart",
  components: {
    CartItem
  },
  mixins: [priceFormatter],

  computed: {
    items() {
      return this.$store.state.cart;
    },
    priceSum() {
      const items = this.$store.state.cart.map(item => {
        return parseFloat(item.price) * item.amount;
      });
      return items.reduce((sum, currentItem) => sum + currentItem, 0);
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
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1.5rem;
    padding: 0 2em;
    justify-content: center;
  }

  .details {
    grid-column: 2;
    grid-row: 1 / -1;
    background: $color4;
    font-family: $font-condensed;
    font-size: 1.5em;
  }
}
</style>
