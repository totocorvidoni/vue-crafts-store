import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCategories: [],
    featuredProducts: [],
    activeMenuCategory: null,
    activeProduct: {},
    displayedProducts: [],
    productsLoading: false,
    relatedProducts: null,
    cart: []
  },
  mutations,
  actions,
  getters
});
