export default {
  setAllCategories(state, payload) {
    state.allCategories = payload;
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
  }
};
