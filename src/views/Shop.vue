<template>
  <div id="store">
    <div class="store-categories">
      this will be my categories
    </div>
    <div class="store-products">
      this will be my products
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss">

#store {
  display: grid;
  grid-template-columns: auto 1fr;
}

.store-categories {
  background: blue;
}

.store-products {
  background: green;
}

</style>
