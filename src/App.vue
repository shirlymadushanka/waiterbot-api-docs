<template>
  <v-app>
    <v-navigation-drawer app width="300">
      <v-row class="ma-4" justify="center" align="center">
        <v-avatar color="primary" size="56">
          <img :src="getBrandImage" alt="waiterBot" />
        </v-avatar>
        <h3 class="brandName ml-2">WAITER<span>BOT</span> API Docs</h3>
      </v-row>
      <SidebarNavigations />
    </v-navigation-drawer>
    <v-main>
      <v-app-bar app></v-app-bar>
      <v-container fluid>
        <component :is="layout">
          <router-view :layout.sync="layout" />
        </component>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { BRAND_IMAGE_URL } from "./utils/constants.js";
import SidebarNavigations from "./components/SidebarNavigations.vue";

import StoreMain from "@/views/store/StoreMain.vue";
import AuthMain from "@/views/authentication/AuthMain.vue";
export default {
  name: "App",

  components: {
    SidebarNavigations,
    StoreMain,
    AuthMain,
  },

  computed: {
    getBrandImage: () => BRAND_IMAGE_URL,
  },

  data: () => ({
    layout: "div",
  }),
};
</script>

<style lang="scss">
body * {
  font-family: "Roboto", sans-serif !important;
}

.v-navigation-drawer__content {
  background-color: rgb(36, 36, 68);
}

.brandName {
  color: rgb(235, 255, 59);
  font-weight: 600;
  & span {
    color: white;
  }
}
</style>
