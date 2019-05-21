<template>
  <div class="cart">
    <div class="section-title title">
      <h1>Lo que voy a llevar</h1>
    </div>
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
    <div class="totals">
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
          <span>
            <strong>{{ formatPrice(priceSum) }}</strong>
          </span>
        </div>
        <p class="note">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi optio, blanditiis voluptate temporibus tempore praesentium pariatur nostrum quos minima esse,
        </p>
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
  grid-column-gap: 3rem;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 4em 1fr;
  justify-content: center;
  align-items: start;
  padding: 1em 2em;

  .section-title {
    place-self: stretch;
    grid-column: 1;
    display: grid;
    align-content: center;
    justify-content: start;
    // background: $color4;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    // font-family: $font-condensed;
    padding: 1em;
    color: $color1;
    & > h1 {
    // text-transform: uppercase;
      font-weight: 400;
      font-size: 1.5em;
    }
  }

  .items-wrapper {
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, 1fr);
    grid-column-gap: 3rem;
    grid-row-gap: 1.5rem;
    justify-content: center;
  }

  .totals {
    grid-column: 2;
    grid-row: 1 / -1;
    font-family: $font-condensed;
    min-width: 250px;

    .title {
      background: $color4;
      // border-top-left-radius: 0.5em;
      // border-top-right-radius: 0.5em;
      color: $color-adaptable;
      text-transform: uppercase;
      text-align: start;
      width: 100%;
      padding: 0 1rem;
    }

    .content {
      border: $border-card;
      border-top: none;
      border-bottom-left-radius: 0.5em;
      border-bottom-right-radius: 0.5em;
      color: $color-dark-light;
      padding: 1rem;
    }
  }

  .separator {
    display: flex;
    justify-content: space-between;
  }

  .note {
    background: $color4-light;
    margin: 1em;
    border-radius: 0.5em;
    padding: 1em;
    color: $color-dark;
    text-align: justify;
  }

  .confirm {
    display: block;
    background: $color-good;
    border: none;
    color: $color-light;
    padding: 0.2em 0.4em;
    margin-top: 1em;
    margin-left: auto;
    font-size: 1em;
    font-family: $font-condensed;
  }
}
</style>
