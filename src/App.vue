<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/" class="color-step">PUPE LEPÚ</router-link>
        <router-link to="/tienda" class="color-step">Tienda</router-link>
        <router-link to="/tienda" class="color-step">Pedidos</router-link>
        <router-link to="/tienda" class="color-step">Nosotros</router-link>
        <router-link to="/tienda" class="color-step">Contactanos</router-link>
      </nav>
    </header>
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

header {
  background-color: $color3;
  z-index: 10;
}

nav {
  display: grid;
  grid-auto-flow: column;
  justify-content: end;
  font-family: $font-title;
  a {
    text-decoration: none;
    color: $color-adaptable;
    padding: 5px;
    text-transform: uppercase;
    transition: $transition-list-item;
    &:hover {
      padding-left: 15px;
      padding-right: 15px;
    }
  }
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
  background: $color1;
  &:nth-child(3n + 1) {
    background: $color4;
  }
  &:nth-child(3n) {
    background: $color2;
  }
}

.border-color-step {
  border-color: $color1;
  &:nth-child(3n + 1) {
    border-color: $color4;
  }
  &:nth-child(3n) {
    border-color: $color2;
  }
}
</style>
