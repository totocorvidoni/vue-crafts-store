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
      <div class="title">
        <h2>Resumen</h2>
      </div>
      <div class="content">
        <div class="separator">
          <span>Sub Total:</span>
          <span>{{ formatPrice(priceSum) }}</span>
        </div>
        <div class="separator">
          <span>Descuentos:</span>
          <span>- $0.00</span>
        </div>
        <div class="separator">
          <span>
            <strong>Total:</strong>
          </span>
          <span><strong>{{ formatPrice(priceSum) }}</strong></span>
        </div>
        <button class="button confirm">COMPRAR</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem.vue";
import priceFormatter from "@/mixins/priceFormatter";

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
  justify-content: center;
  align-items: start;

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
    font-family: $font-condensed;
    margin-top: 1em;
    min-width: 250px;

    .title {
      background: $color4;
      color: $color-adaptable;
      text-transform: uppercase;
      text-align: end;
      width: 100%;
      padding: 0 1rem;
    }

    .content {
      border: $border-card;
      border-top: none;
      border-bottom-left-radius: 0.5em;
      color: $color-dark-light;
      padding: 1rem;
    }
  }

  .separator {
    display: flex;
    justify-content: space-between;
  }

  .confirm {
    display: block;
    background: $color-good;
    border: none;
    color: $color-light;
    padding: .2em .4em;
    margin-top: 1em;
    margin-left: auto;
    font-size: 1em;
    font-family: $font-condensed;
  }
}
</style>
