import axios from "axios";

const API = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

export default {
  async setAllCategories({ commit }) {
    const response = await API.get("products/categories");
    commit("setAllCategories", response.data);
  },

  async setFeaturedProducts({ commit }) {
    const response = await API.get("products?featured=true");
    commit("setFeaturedProducts", response.data);
  },

  async setDisplayedProducts({ commit }, categoryId) {
    commit("startLoadingProducts");
    const response = await API.get(`products/?category=${categoryId}`);
    const products = response.data;
    commit("setDisplayedProducts", products);
    commit("stopLoadingProducts");
  },

  async setActiveProduct({ commit }, productId) {
    const response = await API.get(`products/${productId}`);
    commit("setActiveProduct", response.data);
  },

  setRelatedProducts({ commit }, relatedIds) {
    const relatedProducts = [];
    relatedIds.forEach(async id => {
      const response = await API.get(`products/${id}`);
      relatedProducts.push(response.data);
    });
    commit("setRelatedProducts", relatedProducts);
  }
};
