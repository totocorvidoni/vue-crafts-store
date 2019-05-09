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
    displayedCategory: null,
    displayedProducts: [],
    productsLoading: false,
    relatedProducts: null,
    cart: [
      {
        id: 97,
        name: "Rasputino",
        price: "1500",
        amount: 2,
        image: {
          id: 48,
          date_created: "2019-04-08T16:47:46",
          date_created_gmt: "2019-04-08T19:47:46",
          date_modified: "2019-05-06T16:50:21",
          date_modified_gmt: "2019-05-06T19:50:21",
          src:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          name: "animal-mammal-polar-bear-1640076",
          alt: "oso polar sacudiendose",
          large:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          medium:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          small:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          "custom-size":
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          woocommerce_thumbnail:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903-300x300.jpg",
          woocommerce_single:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          woocommerce_gallery_thumbnail:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903-100x100.jpg",
          shop_catalog:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903-300x300.jpg",
          shop_single:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903.jpg",
          shop_thumbnail:
            "https://localhost/pupeweb/wp-content/uploads/2019/04/animal-mammal-polar-bear-1640076-1-e1557172216903-100x100.jpg"
        }
      }
    ]
  },
  mutations,
  actions,
  getters
});
