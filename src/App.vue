<template>
  <div id="app">
    <nav>
      <router-link to="/">PUPE LEPÚ</router-link>
      <router-link to="/tienda">Tienda</router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeCreate: function() {
    this.$store.dispatch("setFeaturedCategories");
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Oswald:300,400,700|Poppins:300,400,700&subset=latin-ext");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: $font-body;
  color: $color-dark;
  font-size: 16pt;
}
nav {
  background-color: $color1-strong;
}

// ==== Used by more than one component ====
.title {
  font-family: $font-title;
  text-align: center;
}

.category {
  font-family: $font-title;
  h1 {
    color: $color-adaptable;
    text-transform: uppercase;
  }
}

.color-step {
  background: $color3;
  &:nth-child(3n + 1) {
    background: $color4;
  }
  &:nth-child(3n) {
    background: $color2;
  }
}

.border-color-step {
  border-color: $color3;
  &:nth-child(3n + 1) {
    border-color: $color4;
  }
  &:nth-child(3n) {
    border-color: $color2;
  }
}

.flex {
  display: flex;
}
</style>
