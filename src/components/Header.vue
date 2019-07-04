<template>
  <header>
    <router-link :to="{name: 'home'}" class="logo link">PUPE LEPÚ</router-link>
    <nav>
      <router-link :to="{ name: 'shop', params: {page: 1}}" class="page-link link">Catálogo</router-link>
      <little-spinner v-if="loadingCategories" :classTweak="['la-sm']" />
      <main-category
        v-else
        v-for="category in categories"
        :key="category.id"
        :id="category.id"
        :name="category.name"
      >{{ category.name }}</main-category>
      <router-link :to="{ name: 'about'}" class="page-link link">Nosotros</router-link>
      <router-link :to="{ name: 'contact'}" class="page-link link">Contactanos</router-link>
    </nav>
    <router-link :to="{ name: 'cart' }" class="to-cart link">
      <img src="@/assets/shopping-bag.svg" />
      <div class="cart-counter" v-if="$store.state.cart.length">
        <p>{{ itemsInCart }}</p>
      </div>
    </router-link>
  </header>
</template>

<script>
import { mapGetters } from "vuex";
import MainCategory from "@/components/MainCategory.vue";
import LittleSpinner from "@/components/LittleSpinner.vue";

export default {
  name: "header-comp",
  components: { MainCategory, LittleSpinner },

  computed: {
    ...mapGetters(["itemsInCart"]),
    categories() {
      return this.$store.state.categories;
    },

    loadingCategories() {
      return this.$store.state.loadingCategories;
    }
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
  grid-gap: 2rem;
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
    transition: $quick-out;

    &:hover {
      color: $color-adaptable;
    }
  }

  nav {
    justify-self: end;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 1rem;
    align-items: center;
    justify-content: start;
  }

  .page-link {
    transition: $quick-out;

    &:hover {
      box-shadow: 0 3px 0 0 rgba($color: $color-dark, $alpha: 0.9);
    }
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
      background: $color4-strong;
      border: 4px solid $color-light;
      color: $color-light;
      border-radius: 50%;
      padding: 0.6rem;
      line-height: 0;
      left: -15%;
      bottom: -10%;
      font-weight: 700;
    }
  }
}
</style>
