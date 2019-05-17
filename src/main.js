import Vue from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import store from "./store/store";
import VTooltip from "v-tooltip";

import "@/scss/popper.scss";

Vue.config.productionTip = false;
Vue.use(VTooltip);
Vue.prototype.axios = axios.create({
  baseURL: process.env.VUE_APP_WOO_URL,
  auth: {
    username: process.env.VUE_APP_WOO_KEY,
    password: process.env.VUE_APP_WOO_PASS
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
