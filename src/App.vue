<template>
  <div id="app">
    <nav>
      <router-link to="/">PUPE LEPÚ</router-link> 
      <router-link to="/tienda">Tienda</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  beforeCreate: function() {
    this.$store.dispatch('setFeaturedCategories');
  }
}
</script>


<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Oswald:300,400,700|Raleway:300,400,700&subset=latin-ext');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: $font-body;
  color: $color-text;
}
nav {
  background-color: $color1;
}
</style>
