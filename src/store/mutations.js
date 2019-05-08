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
    state.cart.push(product);
  },
  removeFromCart(state, product) {
    const index = state.cart.findIndex(item => {
      return item.id == product.id;
    });
    if (index == -1) {
      console.log("unable to find the product to delete");
    } else {
      state.cart.splice(index, 1);
    }
  }
};
