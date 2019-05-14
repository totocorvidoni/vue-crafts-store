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
export default {
  name: "price-tag",
  props: {
    price: String,
    priceRegular: String
  },

  methods: {
    formatPrice(amount, decimalCount = 2, decimal = ".", thousands = ",") {
      try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(
          (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
        ).toString();
        let j = i.length > 3 ? i.length % 3 : 0;

        return (
          "$" +
          negativeSign +
          (j ? i.substr(0, j) + thousands : "") +
          i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
          (decimalCount
            ? decimal +
              Math.abs(amount - i)
                .toFixed(decimalCount)
                .slice(2)
            : "")
        );
      } catch (e) {
        console.log(e);
      }
    }
  }
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
