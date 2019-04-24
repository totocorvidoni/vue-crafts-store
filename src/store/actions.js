import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

function stripHTML(product) {
  const stripRegex = /(<([^>]+)>)/gi;
  product.description = product.description.replace(stripRegex, "");
  product.short_description = product.short_description.replace(stripRegex, "");
  return product;
}

export default {
  async setFeaturedCategories({ commit }) {
    const response = await API.get("products/categories");
    commit("setAllCategories", response.data);
  },

  async setDisplayedProducts({ commit }, categoryId) {
    commit("startLoadingProducts");
    const response = await API.get(`products/?category=${categoryId}`);
    const products = response.data;
    products.forEach(product => {
      stripHTML(product);
    });
    commit("setDisplayedProducts", products);
    commit("stopLoadingProducts");
  },

  async setActiveProduct({ commit }, productId) {
    const response = await API.get(`products/${productId}`);
    const product = stripHTML(response.data);
    commit("setActiveProduct", product);
  }
};
