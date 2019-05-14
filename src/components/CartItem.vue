<template>
  <div class="cart-item">
    <img :src="image.shop_thumbnail" :alt="image.alt" class="picture">
    <div class="info-border">
      <transition name="fade" mode="out-in">
        <div v-if="!deletePrompt" key="item" class="item">
          <div class="info-wrapper">
            <h2 class="title">{{ name }}</h2>
            <div class="price-card">Precio por unidad: ${{ price }}</div>
          </div>
          <div class="amount">{{ amount }}</div>
          <button class="more button" @click="more">+</button>
          <button class="less button" @click="less" :disabled="amount == 1">-</button>
        </div>
        <div class="prompt" v-else key="delete">
          <p>
            Eliminar a <strong>{{ name }}</strong> del pedido?
          </p>
          <button class="no button" @click="deletePrompt = false">Cancelar</button>
          <button class="yes button" @click="remove">Eliminar</button>
        </div>
      </transition>
    </div>
    <div class="total">
      <p class="text">Total</p>
      <p class="number">${{ total }}</p>
      <transition name="fade">
        <div class="close-wrapper button" @click="deletePrompt = true" v-show="!deletePrompt">
          <img src="@/assets/delete.svg" alt class="close">
        </div>
      </transition>
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

  data() {
    return {
      deletePrompt: false
    };
  },

  methods: {
    more() {
      this.$store.dispatch("incrementItemInCart", this.id);
    },
    less() {
      this.$store.dispatch("decrementItemInCart", this.id);
    },
    remove() {
      this.$store.dispatch("removeFromCart", this.id);
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
.cart-item {
  display: inline-flex;
  line-height: 1.2em;

  .picture {
    justify-self: start;
    border-top-left-radius: 0.5em;
    border-bottom-left-radius: 0.5em;
    object-fit: cover;
  }

  .info-border {
    border-top: $border-card;
    border-bottom: $border-card;
    display: flex;
    align-content: center;
    width: 100%;
  }

  .item {
    display: grid;
    grid-column-gap: 5px;
    grid-row-gap: 5px;
    grid-template-areas:
      "info amount more"
      "info amount less";
    grid-template-columns: auto 1fr auto auto;
    place-items: center;
    justify-items: space-between;
    font-weight: 700;
    height: 100%;
    width: 100%;

    .info-wrapper {
      grid-area: info;
      display: grid;
      line-height: 1.5em;
      padding: 0 1em;
    }

    .title {
      align-self: end;
      color: $color-dark;
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
      grid-area: more;
      align-self: end;
    }

    .less {
      grid-area: less;
      align-self: start;
    }

    .more,
    .less {
      background: $color1-strong;
      border: 2px solid transparent;
      color: $color-light;
      font-size: 1.4em;
      height: 1.2em;
      width: 1.2em;
      line-height: 1em;
    }
  }

  .total {
    position: relative;
    grid-area: total;
    align-self: stretch;
    display: flex;
    flex-flow: column;
    justify-content: center;
    background: $color1-strong;
    border-top-right-radius: 0.5em;
    border-bottom-right-radius: 0.5em;
    color: $color-light;
    font-family: $font-condensed;
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
    right: 0;
    display: flex;
    justify-content: flex-end;
    border-radius: 0 0.5em 0 0.25em;
    background: $color-bad;
    height: 1.2em;
    // width: 5em;
    padding: 4px;
    transition: $quick-out;
    .close {
      margin: auto 0;
      height: 100%;
    }
    &:active {
      transform: none;
    }
    &:active .close {
      transform: $press;
    }
  }
  .prompt {
    grid-row: 1 / -1;
    color: $color-bad;
    margin: auto;
    text-align: center;
    padding: 0 1em;
    .yes,
    .no {
      background: none;
      border: $border-card;
      color: $color-dark-light;
      font-size: 0.8em;
      padding: 0.2em 0.4em;
      margin: 0.3em;
    }
    .yes {
      background: $color-bad;
      color: $color-light;
      border-color: transparent;
    }
    .no:hover {
      color: $color-dark;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: $medium-balanced;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
 