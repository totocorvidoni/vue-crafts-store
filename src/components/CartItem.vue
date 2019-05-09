<template>
  <div class="card-item">
    <img :src="image.shop_catalog" :alt="image.alt" class="picture">
    <div class="info-wrapper">
      <h2 class="title">{{ name }}</h2>
      <div class="price-card">Precio por unidad: ${{ price }}</div>
    </div>
    <div class="amount">{{ amount }}</div>
    <button class="more" @click="more">+</button>
    <button class="less" @click="less">-</button>
    <div class="total">
      <p class="text">Total</p>
      <p class="number">${{ total }}</p>
    </div>
    <div class="close-wrapper">
      <img src="@/assets/cancel.svg" alt class="close">
    </div>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    id: Number,
    image: Object,
    name: String,
    price: String,
    amount: Number
  },
  methods: {
    more() {
      this.$store.dispatch("addProduct", this);
    },
    less() {
      if (this.amount == 1) {
        console.log("this will erase your product");
      } else {
        this.$store.dispatch("removeProduct", this.id);
      }
    }
  },
  computed: {
    total() {
      return parseInt(this.price, 10) * this.amount;
    }
  }
};
</script>

<style lang="scss">
.card-item {
  position: relative;
  display:  inline-grid;
  grid-column-gap: 5px;
  grid-row-gap: 5px;
  grid-template-areas:
    "picture info amount more total"
    "picture info amount less total";
  grid-template-columns: 1fr 3fr auto auto;
  grid-auto-rows: 1fr;
  place-items: center;
  border: $border-card;
  border-radius: 0.5em;
  font-weight: 700;

  .picture {
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    grid-area: picture;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .info-wrapper {
    grid-area: info;
    display: grid;
    line-height: 1.5em;
  }

  .title {
    align-self: end;
    color: $color-dark-light;
  }

  .price-card {
    align-self: start;
    color: $color-dark-light;
    font-weight: 400;
    font-size: 0.8em;
  }

  .amount {
    grid-area: amount;
    justify-self: end;
    background: $color1-strong;
    border-radius: 0.25em;
    color: $color-light;
    font-size: 1.5em;
    padding: 0.25em;
    min-width: 2em;
    text-align: center;
  }

  .more {
    align-self: end;
    grid-area: more;
  }

  .less {
    align-self: start;
    grid-area: less;
  }

  .more,
  .less {
    background: $color1-strong;
    border: 2px solid transparent;
    border-radius: 0.25em;
    color: $color-light;
    font-weight: 700;
    font-size: 1.2em;
    transition: $quick-out;
    height: 1.3em;
    width: 1.3em;
    &:hover {
      border: 2px solid $color4-strong;
      cursor: pointer;
    }
    &:active {
      transform: $press;
    }
    &:focus {
      outline: none;
    }
  }

  .total {
    grid-area: total;
    align-self: stretch;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: $color1-strong;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    color: $color-light;
    font-family: $font-title;
    margin-left: 0.5em;
    padding: 0.5em;
    text-align: center;
    text-transform: uppercase;
    min-width: 5em;
    z-index: 10;
    .text {
      font-weight: 400;
    }
  }

  .close-wrapper {
    position: absolute;
    top: 0;
    right: -1.5em;
    display: flex;
    justify-content: flex-end;
    border-top-right-radius: 0.25em;
    border-bottom-right-radius: 0.25em;
    background: $color-bad;
    height: 1.5em;
    width: 5em;
    padding: 0.4em;
    transition: $quick-out;
    .close {
      margin: auto 0;
      height: 100%;
    }
    &:hover {
      cursor: pointer;
      right: -2em;
    }
    &:active .close {
      transform: $press;
    }
  }
}
</style>
 