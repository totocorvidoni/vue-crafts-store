export default {
  setAllCategories(state, payload) {
    state.allCategories = payload;
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

  setExpandedCategory(state, id) {
    state.expandedCategory = id;
  },

  removeExpandedCategory(state) {
    state.expandedCategory = null;
  },

  setActiveProduct(state, productInfo) {
    state.activeProduct = productInfo;
  },

  setDisplayedProducts(state, payload) {
    state.displayedProducts = payload;
  },

  startLoadingProducts(state) {
    state.productsLoading = true;
  },

  stopLoadingProducts(state) {
    state.productsLoading = false;
  },

  setRelatedProducts(state, payload) {
    state.relatedProducts = payload;
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
