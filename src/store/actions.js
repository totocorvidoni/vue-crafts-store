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
  async setCategories({ commit }) {
    const response = await API.get("products/categories");
    const categories = response.data.sort((a, b) => {
      return a.menu_order - b.menu_order;
    });
    commit("setCategories", categories);
  },

  setActiveCategory({ commit, state }, id) {
    const category = state.categories.find(category => category.id == id);
    commit("setActiveCategory", category);
  },

  removeActiveCategory({ commit }) {
    commit("removeActiveCategory");
  },

  async setFeaturedProducts({ commit }) {
    const response = await API.get("products?featured=true&per_page=4");
    commit("setFeaturedProducts", response.data);
  },

  async setDisplayedProducts({ commit }, params) {
    commit("startLoadingProducts");
    try {
      const path = params.categoryId
        ? `products?category=${params.categoryId}&page=${params.page}`
        : `products?page=${params.page}`;
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
    commit("startLoadingProducts");
    try {
      const relatedProducts = [];
      relatedIds.forEach(async id => {
        const response = await API.get(`products/${id}`);
        relatedProducts.push(response.data);
        commit("stopLoadingProducts");
      });
      commit("setRelatedProducts", relatedProducts);
    } catch (error) {
      console.log(error);
    }
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
