<template>
  <section class="sidebar-navigation">
    <SidebarNavItem
      v-for="(navItem, i) in navItems"
      :key="i"
      :navigationData="navItem"
    />
  </section>
</template>

<script>
import SidebarNavItem from "@/components/navigation/SidebarNavItem.vue";
export default {
  name: "SidebarNavigations",
  components: {
    SidebarNavItem,
  },
  data: () => ({
    navItems: [
      {
        name: "OVERVIEW",
        link: "/",
        sublinks: [
          {
            name: "Introduction",
            link: "/",
          },
        ],
      },
      {
        name: "AUTHENTICATION",
        link: "/",
        sublinks: [
          {
            name: "Store login",
            link: { name: "auth-login" },
          },
        ],
      },
      {
        name: "STORE ENDPOINTS",
        link: "/",
        sublinks: [
          {
            name: "Get store details",
            link: { name: "store-get" },
          },
          {
            name: "Edit store details",
            link: "/about",
          },
          {
            name: "Get all food items",
            link: "/fdfsd",
          },
          {
            name: "Register a food item",
            link: "/fds",
          },
          {
            name: "Get all tables in store",
            link: "/dfsf",
          },
        ],
      },
      {
        name: "OPERATOR ENDPOINTS",
        link: "/",
        sublinks: [
          {
            name: "Introduction",
            link: "/",
          },
          {
            name: "Authentication methods",
            link: "/about",
          },
        ],
      },
    ],
  }),
};
</script>

<style lang="scss">
.sidebar-navigation {
  padding: 2rem 0;
  overflow: auto;

  &__nav-container {
    color: rgb(216, 216, 216);
    text-transform: uppercase;
    padding: 0 1rem;
    margin: 0.5rem 0;

    &.expanded {
      background-color: rgb(69, 69, 70);
    }

    &-nav {
      display: flex;
      justify-content: space-between;
      cursor: pointer;
    }

    &:hover {
      background-color: rgb(41, 41, 41);
    }

    &-sub {
      cursor: pointer;
      padding-bottom: 1rem;
      &-item {
        padding: 0 0.5rem;
        border-left: 1px solid black;
        display: flex;
        text-decoration: none;
        & > * {
          color: rgb(207, 207, 207);
        }

        &.active {
          border-left: 4px solid black;
        }
      }
    }
  }
}
</style>
