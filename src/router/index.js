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
    path: "/auth/owner-login",
    name: "store-owner-login",
    component: () => import("../views/authentication/StoreOwnerLogin.vue"),
  },
  {
    path: "/auth/operator-login",
    name: "store-operator-login",
    component: () => import("../views/authentication/StoreOperatorLogin.vue"),
  },
  {
    path: "/auth/operator-register",
    name: "store-operator-register",
    component: () =>
      import("../views/authentication/StoreOperatorRegister.vue"),
  },
  {
    path: "/store/getDetails",
    name: "store-get",
    component: () => import("../views/store/GetStoreDetails.vue"),
  },
  {
    path: "/store/editDetails",
    name: "store-edit",
    component: () => import("../views/store/EditStoreDetails.vue"),
  },
  {
    path: "/store/addOrRemoveImage",
    name: "store-image-ops",
    component: () => import("../views/store/AddOrRemoveStoreImage.vue"),
  },
  {
    path: "/store/get-items",
    name: "store-get-items",
    component: () => import("../views/store/GetFoodItemsInStore.vue"),
  },
  {
    path: "/store/register-items",
    name: "store-register-items",
    component: () => import("../views/store/RegisterFoodItemInStore.vue"),
  },
  {
    path: "/store/get-robots",
    name: "store-get-robots",
    component: () => import("../views/store/GetRobotDetails.vue"),
  },
  {
    path: "/store/get-tables",
    name: "store-get-tables",
    component: () => import("../views/store/GetTableDetails.vue"),
  },
  {
    path: "/store/register-tables",
    name: "store-register-tables",
    component: () => import("../views/store/RegisterTableDetails.vue"),
  },
  {
    path: "/store/edit-del-tables",
    name: "store-edit-del-tables",
    component: () => import("../views/store/EditTableDetails.vue"),
  },
  {
    path: "/store/get-orders",
    name: "store-get-orders",
    component: () => import("../views/store/GetOrderDetails.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
