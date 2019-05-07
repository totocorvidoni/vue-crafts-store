<template>
  <div id="app">
    <header>
      <router-link to="/" class="logo grower">PUPE LEPÚ</router-link>
      <nav>
        <router-link to="/tienda" class="grower">Tienda</router-link>
        <router-link to="/tienda" class="grower">Pedidos</router-link>
        <router-link to="/tienda" class="grower">Nosotros</router-link>
        <router-link to="/tienda" class="grower">Contactanos</router-link>
      </nav>
    </header>
      <router-view/>
    <footer>
      <h1>Footer stuff soon to come</h1>
      <p>Just you wait...</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app",
  beforeCreate: function() {
    this.$store.dispatch("setAllCategories");
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
  display: flex;
  align-items: center;
  background-color: $color3;
  z-index: 10;
  font-family: $font-title;
  font-weight: 700;

  a {
    text-decoration: none;
    color: $color-adaptable;
    padding: 10px 15px;
    text-transform: uppercase;
  }
}

.logo {
  color: $color-light;
  white-space: nowrap;
  font-family: $font-title;
  font-size: 1.3em;
  font-weight: 400;
}

nav {
  display: grid;
  grid-auto-flow: column;
}

footer {
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1em;
  background: $color3;
  text-align: center;
  margin-top: 2em;
}

// ==== Used by more than one component ====

.title {
  text-align: center;
}

.image {
  object-fit: cover;
  transition: $slow-balanced;
}

.uppercase {
  text-transform: uppercase;
}

.price {
  background: $color-good;
  border-radius: 0.5em;
  color: $color-light;
  font-family: $font-title;
  font-weight: 700;
  padding: 0.25em 0.5em;
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

.grower {
  transition: $quick-out;
  &:hover {
    transform: scale(1.1) translateY(-2%);
  }
  &:active {
    transform: scale(0.9);
  }
}

.grower-childs {
  transition: $quick-out;
  &:hover > * {
    transform: scale(1.1) translateY(-2%);
  }
  &:active > * {
    transform: scale(0.9);
  }
}
</style>
