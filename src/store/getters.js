export default {
  categoryNames: state => {
    return state.categories.map(category => {
      return category.name;
    });
  },

  itemsInCart: state => {
    return state.cart.length;
  },

  productInCart: state => id => {
    return state.cart.some(item => item.id == id);
  },

  isLoading: state => {
    return state.productsLoading;
  }
};
