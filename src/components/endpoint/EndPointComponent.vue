<template>
  <v-container>
    <v-row align="center" :class="`endpoint ${method}`">
      <div class="endpoint__chip-container">
        <h6
          class="endpoint__chip-container-chip"
          v-for="access in accessList"
          :key="access"
        >
          {{ access.toUpperCase() }}
        </h6>
      </div>
      <v-btn v-if="showMethod" :class="`endpoint__btn ${method}`">
        {{ method.toUpperCase() }}
      </v-btn>
      <h4>{{ urlEndPoint }}</h4>
      <h4 class="endpoint__desc">{{ description }}</h4>
    </v-row>
  </v-container>
</template>
<script>
export default {
  props: {
    method: {
      default: "get",
      validator: (x) => ["get", "post", "patch", "put", "delete"].includes(x),
    },
    urlEndPoint: {
      default: "",
    },
    description: {
      default: "",
    },
    accessList: {
      default: [],
    },
    showMethod: {
      default: true,
    },
  },
};
</script>
<style lang="scss">
$get-color: #90caf9;
$get-color-lighter: #e3f2fd;

$post-color: #81c784;
$post-color-lighter: #c8e6c9;

$put-color: #fff176;
$put-color-lighter: #fff9c4;

$patch-color: #4db6ac;
$patch-color-lighter: #b2dfdb;

$delete-color: #e57373;
$delete-color-lighter: #ffcdd2;

.endpoint {
  padding: 5px;
  border-radius: 5px;
  margin-bottom: 5px;
  position: relative;

  &.get {
    background-color: $get-color-lighter;
  }
  &.post {
    background-color: $post-color-lighter;
  }
  &.put {
    background-color: $put-color-lighter;
  }
  &.patch {
    background-color: $patch-color-lighter;
  }
  &.delete {
    background-color: $delete-color-lighter;
  }

  &__btn {
    pointer-events: none;
    margin-right: 1rem;

    &.get {
      background-color: $get-color !important;
    }
    &.post {
      background-color: $post-color !important;
    }
    &.put {
      background-color: $put-color !important;
    }
    &.patch {
      background-color: $patch-color !important;
    }
    &.delete {
      background-color: $delete-color !important;
    }
  }

  &__desc {
    font-weight: 400;
    margin-left: 32px;
    color: grey;
    text-transform: uppercase;
  }

  &__chip-container {
    position: absolute;
    top: -10px;
    left: 90px;
    display: flex;
    gap: 10px;

    &-chip {
      z-index: 4;
      background-color: rgb(83, 85, 85);
      padding: 0 10px;
      border-radius: 10px;
      color: white;
    }
  }
}
</style>
