<template>
  <div class="price-tag">
    <div class="discount" v-if="priceRegular != price">
      <p>{{ formatPrice(priceRegular) }}</p>
    </div>
    <div class="price">
      <p class="price">{{ formatPrice(price) }}</p>
    </div>
  </div>
</template>

<script>
import priceFormatter from "@/mixins/priceFormatter";

export default {
  name: "price-tag",
  props: {
    price: String,
    priceRegular: String
  },
  mixins: [priceFormatter]
};
</script>

<style lang="scss">
.price-tag {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  justify-content: end;
  font-family: $font-title;
  font-weight: 700;
  font-size: 12pt;

  .discount {
    color: $color-dark-light;
    line-height: 1em;
    font-weight: 700;
    font-size: 0.8em;
    text-decoration: line-through $color-bad;
    text-align: center;
    margin-right: 0.25em;
  }

  .price {
    background: $color-good;
    border-radius: 0.25em;
    color: $color-light;
    padding: 0.1em 0.2em;
  }
}
</style>
