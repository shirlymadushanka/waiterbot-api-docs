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
            name: "Store owner login",
            link: { name: "store-owner-login" },
          },
          {
            name: "Store Operator register",
            link: { name: "store-operator-register" },
          },
          {
            name: "Store operator login",
            link: { name: "store-operator-login" },
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
            link: { name: "store-edit" },
          },
          {
            name: "Add/remove store image",
            link: { name: "store-image-ops" },
          },
          {
            name: "Get all food items",
            link: { name: "store-get-items" },
          },
          {
            name: "Register a food item",
            link: { name: "store-register-items" },
          },
          {
            name: "Get all available robots",
            link: { name: "store-get-robots" },
          },
          {
            name: "Get all tables in store",
            link: { name: "store-get-tables" },
          },
          {
            name: "Add a new tables in store",
            link: { name: "store-register-tables" },
          },
          {
            name: "Edit/Delete tables in store",
            link: { name: "store-edit-del-tables" },
          },
          {
            name: "Get order details in store",
            link: { name: "store-get-orders" },
          },
        ],
      },
      {
        name: "FOOD ITEM ENDPOINTS",
        sublinks: [
          {
            name: "Get Food item",
            link: { name: "food-get" },
          },
          {
            name: "Edit/Remove food item",
            link: { name: "food-edit-remove" },
          },
          {
            name: "Update/remove food item image",
            link: { name: "food-image-add-remove" },
          },
          {
            name: "Change food availability",
            link: { name: "food-set-availability" },
          },
          {
            name: "Get all food reviews",
            link: { name: "food-get-reviews" },
          },
          {
            name: "Post a food review",
            link: { name: "food-post-reviews" },
          },
        ],
      },
      {
        name: "ROBOT ENDPOINTS",
        sublinks: [
          {
            name: "Get Robot details",
            link: { name: "robot-get" },
          },
          {
            name: "Change Robot status",
            link: { name: "robot-change-status" },
          },
        ],
      },
      {
        name: "Food review ENDPOINTS",
        sublinks: [
          {
            name: "Get food review details",
            link: { name: "food-review-get" },
          },
          {
            name: "Change food review details",
            link: { name: "food-review-change" },
          },
        ],
      },
      {
        name: "Food Order ENDPOINTS",
        sublinks: [
          {
            name: "Get food order details",
            link: { name: "food-order-get" },
          },
          {
            name: "Add new food order",
            link: { name: "food-order-new" },
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
