import axios from "axios";
import Vue from "vue";

const API = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

function findIndexById(collection, itemId) {
  const index = collection.findIndex(item => {
    return item.id == itemId;
  });
  return index;
}

export default {
  async setAllCategories({ commit }) {
    const response = await API.get("products/categories");
    commit("setAllCategories", response.data);
  },

  async setFeaturedProducts({ commit }) {
    const response = await API.get("products?featured=true");
    commit("setFeaturedProducts", response.data);
  },

  async setDisplayedProducts({ commit }, params) {
    commit("startLoadingProducts");
    try {
      const path = params.categoryId
        ? `products?category=${params.categoryId}`
        : "products";
      const response = await API.get(path);
      const products = response.data;
      commit("setDisplayedProducts", products);
    } catch (error) {
      console.log(error);
    }
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
  },

  addToCart(store, product) {
    Vue.set(product, "amount", 1);
    store.commit("addToCart", product);
  },

  removeFromCart(store, productId) {
    const index = findIndexById(store.state.cart, productId);
    store.commit("removeFromCart", index);
  },

  incrementItemInCart(store, productId) {
    const index = findIndexById(store.state.cart, productId);
    store.commit("incrementItemInCart", index);
  },

  decrementItemInCart(store, productId) {
    const index = findIndexById(store.state.cart, productId);
    store.commit("decrementItemInCart", index);
  }
};
