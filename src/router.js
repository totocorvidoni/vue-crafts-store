import Vue from "vue";
import Router from "vue-router";
import store from "@/store/store";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Product from "./views/Product.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0 };
    }
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/tienda",
      name: "shop",
      component: Shop,
      children: [
        {
          path: ":categoryId",
          beforeEnter(to, from, next) {
            store.commit("setActiveMenuCategory", to.params.categoryId);
            store.dispatch("setDisplayedProducts", to.params.categoryId);
            next();
          }
        }
      ]
    },
    {
      path: "/productos/:id",
      name: "products",
      component: Product
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
