<template>
  <div class="cart">
    <div class="section-title">
      <transition name="fade" mode="out-in">
        <h1 v-if="sent" key="sent">Lo que pedí!</h1>
        <h1 v-else key="to-send">Lo que voy a pedir</h1>
      </transition>
    </div>
    <div v-if="itemsInCart" class="items-wrapper">
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
    <div v-else class="no-items">
      <h2 class="big">¿Nada?</h2>
      <p>No hay articulos en el pedido</p>
      <p>Para conocer que podemos ofrecerte te invitamos a visitar</p>
      <router-link :to="{ name: 'shop', params: { page: 1 }}" class="link">Nuestro Catálogo</router-link>
    </div>
    <transition name="fade" mode="out-in">
      <div class="info sent" v-if="sent" key="sent">
        <img src="@/assets/parachute-box-solid.svg" class="icon" />
        <h2 class="title">Recibimos tu pedido ¡Muchas gracias!</h2>
        <p
          class="text"
        >Nos vamos a poner en contacto con vos lo antes posible para coordinar los detalles de pago y envio.</p>
      </div>
      <div v-else class="info totals" key="totals">
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
            <span>- {{ formatPrice(discount) }}</span>
          </div>
          <div class="separator">
            <span>
              <strong>Total:</strong>
            </span>
            <span>
              <strong>{{ formatPrice(total) }}</strong>
            </span>
          </div>
          <p
            class="note"
          >Acá pensaba poner algo asi como que una vez recibamos tu pedido nos vamos a estar contactando para definir los detalles, personalizacion, metodo de pago, forma de envio etc.</p>
          <button
            class="button confirm"
            @click.prevent="onSent"
            :disabled="itemsInCart == 0"
          >ENVIAR PEDIDO</button>
        </div>
        <add-coupon @addDiscount="onAddDiscount" />
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartItem from "@/components/CartItem.vue";
import AddCoupon from "@/components/AddCoupon.vue";
import priceFormatter from "@/mixins/priceFormatter";

export default {
  name: "cart",
  components: {
    CartItem,
    AddCoupon
  },

  data() {
    return {
      discount: 0,
      sent: false
    };
  },

  mixins: [priceFormatter],

  methods: {
    onAddDiscount(coupon) {
      const discount = this.processCoupon(coupon);
    },

    onSent() {
      this.sent = true;
    },

    processCoupon(coupon) {
      const expiryDate = Date.parse(coupon.date_expires);
      if (Date.now() > expiryDate) {
        console.log("cupon expired");
      } else {
        switch (coupon.discount_type) {
          case "fixed_cart":
            this.discount += coupon.amount;
            break;
          case "fixed_product":
            break;
          case "percent":
            break;
        }
      }
    }
  },

  computed: {
    ...mapGetters(["itemsInCart"]),

    items() {
      return this.$store.state.cart;
    },

    priceSum() {
      const items = this.$store.state.cart.map(item => {
        return parseFloat(item.price) * item.amount;
      });
      return items.reduce((sum, currentItem) => sum + currentItem, 0);
    },

    total() {
      return this.priceSum - this.discount;
    }
  }
};
</script>

<style lang="scss">
.cart {
  display: grid;
  grid-column-gap: 3rem;
  grid-row-gap: 1em;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: start;
  padding: 1em 2em;

  .section-title {
    place-self: stretch;
    grid-column: 1;
    display: grid;
    align-content: center;
    justify-content: start;
    border-top-left-radius: 0.5em;
    border-top-right-radius: 0.5em;
    padding: 0 1em;
    color: $color1;
    margin: 0 auto;
  }

  .items-wrapper {
    grid-column: 1;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 1.5rem;
    justify-content: center;
    background: $color-light-faded;
    border-radius: 0.5em;
    padding: 1em;
  }

  .no-items {
    background: $color-light-faded;
    color: $color-adaptable;
    padding: 1em;
    text-align: center;

    .big {
      margin: 1rem;
      font-size: 2.5em;
    }

    .link {
      color: $color1;
      font-weight: 700;
      text-transform: uppercase;
    }
  }

  .info {
    grid-column: 2;
    grid-row: 1 / -1;
  }

  .totals {
    font-family: $font-title;
    min-width: 250px;

    .title {
      background: $color4;
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

    .coupon {
      margin-top: 1em;
      justify-self: center;
    }
  }

  .sent {
    grid-column: 2;
    grid-row: 1 / -1;
    text-align: center;
    margin: auto 0;

    .icon {
      display: block;
      height: 10rem;
      margin: 0 auto;
      width: auto;
    }

    .title {
      color: $color1;
      margin: 0.5em;
    }
  }

  .separator {
    display: flex;
    justify-content: space-between;
  }

  .note {
    background: $color-light-faded;
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
    font-family: $font-title;
  }
}

@media all and (max-width: $semi-wide) {
  .cart {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr auto;

    .section-title {
      grid-row: 1;
    }

    .items-wrapper {
      grid-row: 2;
    }

    .info {
      grid-column: 1;
      grid-row: 3;
    }
  }
}

@media screen and (max-width: $narrow) {
  .cart {
    .items-wrapper {
      justify-self: center;
      display: block;
    }
  }
}
</style>
