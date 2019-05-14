<template>
  <div id="app">
    <header>
      <router-link to="/" class="logo grower">PUPE LEPÚ</router-link>
      <nav>
        <router-link to="/tienda" class="grower">Tienda</router-link>
        <router-link to="/tienda" class="grower">Nosotros</router-link>
        <router-link to="/tienda" class="grower">Contactanos</router-link>
      </nav>
      <router-link to="/pedido" class="grower to-cart">
        <img src="@/assets/shopping-bag.svg">
        <div class="cart-counter" v-if="$store.state.cart.length">
          <p>{{ itemsInCart }}</p>
        </div>
      </router-link>
    </header>
    <router-view/>
    <footer>
      <h1>Footer stuff soon to come</h1>
      <p>Just you wait...</p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "app",
  beforeCreate() {
    this.$store.dispatch("setAllCategories");
    this.$store.dispatch("setDisplayedProducts");
  },

  computed: {
    ...mapGetters(["itemsInCart"])
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
  font-family: $font-regular;
  color: $color-dark;
  font-size: 16pt;
}

header {
  position: sticky;
  top: 0;
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-auto-flow: column;
  grid-gap: 1rem;
  justify-content: start;
  align-content: center;
  align-items: center;
  background-color: $color3;
  font-family: $font-condensed;
  font-weight: 700;
  padding: 1rem 2rem;
  z-index: 100;

  a {
    text-decoration: none;
    color: $color-adaptable;
    text-transform: uppercase;
  }
}

.logo {
  color: $color-light;
  white-space: nowrap;
  font-family: $font-condensed;
  font-size: 1.3em;
  font-weight: 400;
}

nav {
  display: grid;
  grid-gap: 1rem;
  justify-content: start;
  grid-auto-flow: column;
}

.to-cart {
  align-self:start;
  position: relative;
  height: 1.75em;
  width: 1.75em;
  
  img {
    width: 100%;
    height: 100%;
  }

  .cart-counter {
    position: absolute;
    display: flex;
    justify-content: center;
    height: 1rem;
    width: 1rem;
    background: $color-dark-light;
    border: 4px solid $color-light;
    color: $color-light;
    border-radius: 50%;
    padding: 0.8rem;
    line-height: 0;
    left: -33%;
    bottom: -25%;
    font-size: 1.2rem;
    font-weight: 700;
  }
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

.button {
  border-radius: 0.25em;
  font-weight: 700;
  transition: $quick-out;
  &[disabled="disabled"] {
    opacity: 0.5;
    &:hover {
      transform: none;
      filter: none;
      cursor: not-allowed;
    }
  }
  &:hover {
    filter: contrast(130%);
    cursor: pointer;
  }
  &:active {
    transform: $press;
  }
  &:active,
  &:focus {
    outline: none;
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

.grower {
  transition: $quick-out;
  &:hover {
    transform: scale(1.1) translateY(-2%);
  }
  &:active {
    transform: $press;
  }
}

.grower-childs {
  transition: $quick-out;
  &:hover > * {
    transform: scale(1.1) translateY(-2%);
  }
  &:active > * {
    transform: $press;
  }
}
</style>
