import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

const stripRegex = /(<([^>]+)>)/gi;

export default {
  async setFeaturedCategories({ commit }) {
    const response = await API.get("products/categories");
    // const categories = response.data.filter(category => {
    //   return category.parent == 0 && category.id !== 29; // The id of uncategorized posts
    // });
    // const featuredCategories = [];
    // await categories.forEach(category => {
    //   featuredCategories.push({
    //     id: category.id,
    //     name: category.name
    //     // image: category.image.src
    //   });
    // });
    commit("setAllCategories", response.data);
  },
  async setDisplayedProducts({ commit }, categoryId) {
    commit("startLoadingProducts");
    const response = await API.get(`products/?category=${categoryId}`);
    const products = response.data;
    products.forEach(product => {
      product.description = product.description.replace(stripRegex, "");
      product.short_description = product.short_description.replace(
        stripRegex,
        ""
      );
    });
    commit("setDisplayedProducts", products);
    commit("stopLoadingProducts");
  }
};
