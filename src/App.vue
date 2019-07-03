<template>
  <div id="app">
    <header-comp />
    <router-view />
    <footer>
      <h1>Footer stuff soon to come</h1>
      <p>Just you wait...</p>
    </footer>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import HeaderComp from "@/components/Header.vue";

export default {
  name: "app",
  components: { HeaderComp },

  beforeCreate() {
    this.$store.dispatch("setCategories");
  },

  computed: {
    ...mapGetters(["itemsInCart"])
  }
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Spinnaker|Dosis:400,700|Nunito:300,400,700");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body,
#app {
  min-height: 100vh;
}

#app {
  display: grid;
  grid-template-rows: 2.5rem 1fr auto;
  font-family: $font-regular;
  color: $color-dark;
  font-size: 14pt;
}

footer {
  padding: 1em;
  background: $color3;
  color: $color-light;
  text-align: center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $font-title;
}

// ==== Used by more than one component ====

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
      cursor: no-drop;
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

.link {
  text-decoration: none;
  transition: $quick-out;

  &:hover {
    filter: brightness(1.05);
  }

  &:active {
    filter: brightness(0.95);
  }
}

.spinner {
  padding: 1em;
  align-self: center;
  justify-self: center;
  margin: 0 auto;
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
    transform: scale(1.05);
  }
  &:active {
    transform: $press;
  }
}

.grower-childs {
  transition: $quick-out;
  &:hover > * {
    transform: scale(1.05);
  }
  &:active > * {
    transform: $press;
  }
}

.hidden {
  display: none;
}

// Transitions ---
.fade-enter-active,
.fade-leave-active {
  transition: $quick-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
