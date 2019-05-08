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
    const path = categoryId ? `products?category=${categoryId}` : "products";
    const response = await API.get(path);
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
  },

  addProduct(store, product) {
    const index = store.cart.findIndex(item => {
      return item.id == product.id;
    });
    if (index == -1) {
      store.commit("addToCart", product);
    } else {
      store.commit("incrementItemInCart", index);
    }
  },

  removeProduct(store, product) {
    const index = store.cart.findIndex(item => {
      return item.id == product.id;
    });
    if (store.cart[index].amount == 1) {
      store.commit("removeFromCart", index);
    } else {
      store.commit("decrementItemInCart", index);
    }
  }
};
