<template>
  <div class="products-wrapper">
    <div class="spinner-wrapper" v-show="isLoading">
      <looping-rhombuses-spinner class="spinner" :rhombus-size="70" :animation-duration="2000"/>
    </div>
    <div>
      <div v-for="product in productsToDisplay" :key="product.id">
        <h1>{{ product.name }}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import { LoopingRhombusesSpinner } from "epic-spinners";

export default {
  name: "product-gallery",
  components: {
    LoopingRhombusesSpinner
  },
  computed: {
    productsToDisplay() {
      return this.$store.state.displayedProducts;
    },
    isLoading() {
      return this.$store.state.productsLoading;
    }
  }
};
</script>

<style lang="scss">
.products-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.spinner-wrapper {
  position: absolute;
  display: grid;
  background: $color1;
  place-items: center;
  height: 100%;
  width: 100%;
}

// overwrites the epic spinner :color directive to use sass variables
.spinner > * {
  background-color: $color1 !important;
}
</style>
