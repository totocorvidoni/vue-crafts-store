<template>
  <div class="price-tag">
    <p class="discount" v-if="priceRegular != price">{{ formatPrice(priceRegular) }}</p>
    <p class="price">{{ formatPrice(price) }}</p>
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
  position: relative;
  display: grid;
  align-content: center;
  background: $color-good;
  color: $color-light;
  border-radius: 0.5em;
  font-family: $font-condensed;
  font-weight: 700;
  padding: 0.25em 0.5em;

  .discount {
    position: absolute;
    top: -1.1em;
    left: 0;
    right: 0;
    color: $color-dark-light;
    line-height: 1em;
    font-weight: 700;
    margin: auto;
    text-decoration: line-through $color-bad;
    text-align: center;
    z-index: -2;
  }
}
</style>
