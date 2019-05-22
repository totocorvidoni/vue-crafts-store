<template>
  <div class="coupon">
    <transition name="fade" mode="out-in">
      <div v-if="notFound">
        <p class="bad">Cupón no encontrado.</p>
        <button class="button" @click="notFound = false">Probar otro</button>
      </div>
      <form v-else>
        <label for="code">¿Tenés un cupón de descuento?</label>
        <input type="text" name="code" v-model="code">
        <input type="submit" value="Agregar" class="button" @click.prevent="onCouponSubmit">
      </form>
    </transition>
  </div>
</template>

<script>
export default {
  name: "add-coupon",
  data() {
    return {
      code: "",
      notFound: false
    };
  },

  methods: {
    async onCouponSubmit() {
      try {
        const response = await this.axios.get(`coupons?code=${this.code}`);
        if (response.data.length == 0) {
          this.notFound = true;
        } else {
          this.$emit("addDiscount", response.data[0]);
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.code = "";
      }
    }
  }
};
</script>

<style lang="scss">
.coupon {
  padding: 1em;
  text-align: center;
  border: $border-card;
  border-radius: 0.5em;

  input[type="text"] {
    border: 1px solid $color4;
    border-radius: 0.25em;
    padding: 5px;
  }

  .button {
    padding: 5px;
    background: $color4-strong;
    color: $color-light;
    text-transform: uppercase;
    border: none;
    margin: 0 5px;
  }

  .bad {
    color: $color-bad;
  }
}

@media screen and (max-width: $narrow) {
  .coupon {
    label {
      margin-right: 1em;
    }
  }
}
</style>
