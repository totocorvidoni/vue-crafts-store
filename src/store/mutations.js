export default {
  setCategories(state, payload) {
    state.categories = payload;
  },

  setFeaturedProducts(state, products) {
    state.featuredProducts = products;
  },

  setActiveCategory(state, category) {
    state.activeCategory = category;
  },

  removeActiveCategory(state) {
    state.activeCategory = null;
  },

  setActiveProduct(state, productInfo) {
    state.activeProduct = productInfo;
  },

  setDisplayedProducts(state, payload) {
    state.displayedProducts = payload;
  },

  setDisplayedProductsAmount(state, payload) {
    state.displayedProductsAmount = payload;
  },

  startLoadingCategories(state) {
    state.loadingCategories = true;
  },

  stopLoadingCategories(state) {
    state.loadingCategories = false;
  },

  startLoadingProducts(state) {
    state.loadingProducts = true;
  },

  stopLoadingProducts(state) {
    state.loadingProducts = false;
  },

  setRelatedProducts(state, payload) {
    state.relatedProducts = payload;
  },

  setCart(state, payload) {
    state.cart = payload;
  },

  addToCart(state, product) {
    state.cart.push(product);
  },

  removeFromCart(state, index) {
    state.cart.splice(index, 1);
  },

  incrementItemInCart(state, index) {
    state.cart[index].amount++;
  },

  decrementItemInCart(state, index) {
    state.cart[index].amount--;
  }
};
