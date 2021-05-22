import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/auth/loginToStore",
    name: "auth-login",
    component: () => import("../views/authentication/LoginToTheStore.vue"),
  },
  {
    path: "/store/getDetails",
    name: "store-get",
    component: () => import("../views/store/GetStoreDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
