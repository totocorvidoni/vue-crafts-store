<template>
  <header>
    <router-link :to="{name: 'home'}" class="logo grower">PUPE LEPÚ</router-link>
    <nav>
      <router-link :to="{ name: 'shop', params: {page: 1}}" class="grower">Tienda</router-link>
      <main-category
        v-for="category in mainCategories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      >{{ category.name }}</main-category>
      <router-link :to="{ name: 'about'}" class="grower">Nosotros</router-link>
      <router-link :to="{ name: 'contact'}" class="grower">Contactanos</router-link>
    </nav>
    <router-link :to="{ name: 'cart' }" class="grower to-cart">
      <img src="@/assets/shopping-bag.svg">
      <div class="cart-counter" v-if="$store.state.cart.length">
        <p>{{ itemsInCart }}</p>
      </div>
    </router-link>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import MainCategory from "@/components/MainCategory.vue";

export default {
  name: "header-comp",
  components: { MainCategory },

  computed: {
    ...mapGetters(["mainCategories"])
  }
};
</script>

<style lang="scss">
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
  font-family: $font-title;
  font-weight: 700;
  padding: 0.25rem 1rem;
  z-index: 100;

  a {
    text-decoration: none;
    color: $color-adaptable;
    text-transform: uppercase;
  }

  .logo {
    color: $color-light;
    white-space: nowrap;
    font-family: $font-brand;
    font-size: 1.3em;
    font-weight: 400;
  }

  nav {
    justify-self: end;
    display: grid;
    grid-gap: 1rem;
    justify-content: start;
    grid-auto-flow: column;
  }

  .to-cart {
    align-self: start;
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
}
</style>
