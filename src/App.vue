<template>
  <v-app>
    <v-navigation-drawer app>
      <h3>WaiterBot Docs</h3>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app> </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style>
.v-navigation-drawer__content {
  padding: 2rem;
}
</style>
