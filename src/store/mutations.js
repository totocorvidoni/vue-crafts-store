function findIndexById(collection, itemId) {
  const index = collection.findIndex(item => {
    return item.id == itemId;
  });
  return index;
}

export default {
  setAllCategories(state, payload) {
    state.allCategories = payload;
  },

  setFeaturedProducts(state, products) {
    state.featuredProducts = products;
  },

  setActiveMenuCategory(state, menuCategoryId) {
    state.activeMenuCategory = menuCategoryId;
  },

  setActiveProduct(state, productInfo) {
    state.activeProduct = productInfo;
  },

  setDisplayedCategory(state, categoryId) {
    state.displayedCategory = categoryId;
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
    product.amount = 1;
    state.cart.push(product);
  },

  removeFromCart(state, id) {
    const index = findIndexById(state.cart, id);
    state.cart.splice(index, 1);
  },

  incrementItemInCart(state, id) {
    const index = findIndexById(state.cart, id);
    state.cart[index].amount += 1;
  },

  decrementItemInCart(state, id) {
    const index = findIndexById(state.cart, id);
    state.cart[index].amount -= 1;
  }
};
