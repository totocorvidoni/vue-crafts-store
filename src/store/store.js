import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeCategory: null,
    activeProduct: {},
    cart: [],
    categories: [],
    displayedProducts: [],
    displayedProductsAmount: null,
    featuredProducts: [],
    loadingProducts: true,
    loadingCategories: true,
    relatedProducts: null
  },
  mutations,
  actions,
  getters
});
