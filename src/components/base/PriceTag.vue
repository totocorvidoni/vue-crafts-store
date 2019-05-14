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
import priceFormatter from '@/mixins/priceFormatter'

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
  font-family: $font-condensed;
  font-weight: 700;

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
    color: $color-light;
    padding: 0.10em 0.2em;
  }
}
</style>
