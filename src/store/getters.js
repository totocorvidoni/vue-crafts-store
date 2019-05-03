export default {
  mainCategories: state => {
    return state.allCategories.filter(category => {
      return category.parent == 0 && category.id !== 29; // The id of default category
    });
  },
  categoryNames: (state, getters) => {
    return getters.mainCategories.map(category => {
      return category.name;
    });
  },
  // TODO - Optimize search
  subCategoriesById: state => id => {
    return state.allCategories.filter(category => {
      return category.parent == id;
    });
  }
};

