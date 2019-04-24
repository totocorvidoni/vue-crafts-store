import Vue from "vue";
import Vuex from "vuex";

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allCategories: [],
    activeMenuCategory: null,
    activeProduct: { id: "test", name: "test yes", description: "test no" },
    displayedCategory: null,
    displayedProducts: null,
    productsLoading: false
  },
  mutations,
  actions,
  getters
});
