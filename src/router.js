import Vue from "vue";
import Router from "vue-router";
import NProgress from "nprogress";
import "@/scss/nprogress.scss";
import store from "@/store/store";
import Home from "./views/Home.vue";
import Shop from "./views/Shop.vue";
import Product from "./views/Product.vue";
import Cart from "./views/Cart.vue";
import About from "./views/About.vue";
import Contact from "./views/Contact.vue";

Vue.use(Router);

NProgress.configure({
  showSpinner: false
});

const router = new Router({
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
      path: "/tienda/:page/:categoryId?",
      name: "shop",
      component: Shop
    },
    {
      path: "/productos/:id",
      name: "products",
      component: Product
    },
    {
      path: "/pedido",
      name: "cart",
      component: Cart
    },
    {
      path: "/nosotros",
      name: "about",
      component: About
    },
    {
      path: "/contacto",
      name: "contact",
      component: Contact
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

router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
