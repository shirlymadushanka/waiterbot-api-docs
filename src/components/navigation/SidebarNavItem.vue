<template>
  <div
    :class="['sidebar-navigation__nav-container', expanded ? 'expanded' : '']"
  >
    <div
      class="sidebar-navigation__nav-container-nav"
      @click="expanded = !expanded"
    >
      <h3>{{ navigationData.name }}</h3>
      <v-icon dark v-if="navigationData.sublinks && !expanded">
        mdi-chevron-down
      </v-icon>
      <v-icon dark v-if="navigationData.sublinks && expanded">
        mdi-chevron-up
      </v-icon>
    </div>
    <div
      class="sidebar-navigation__nav-container-sub"
      v-if="navigationData.sublinks && expanded"
    >
      <template v-for="sublink in navigationData.sublinks">
        <router-link
          :key="sublink.name"
          :to="sublink.link"
          class="sidebar-navigation__nav-container-sub-item"
          exact-active-class="sidebar-navigation__nav-container-sub-item active"
        >
          <h5>
            {{ sublink.name }}
          </h5>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarNavItem",
  props: ["navigationData"],
  data: () => ({
    expanded: false,
  }),
};
</script>
