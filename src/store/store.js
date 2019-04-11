import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

import mutations from "@/store/mutations";
import actions from "@/store/actions";
import getters from "@/store/getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    mainCategories: []
  },
  mutations,
  actions,
  getters
});
