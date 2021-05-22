<template>
  <div class="main-detail-area">
    <h1 class="main-detail-area__heading">{{ title }}</h1>
    <div class="main-detail-area__content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "MainDetailArea",
  props: ["title"],
};
</script>

<style lang="scss" scoped>
.main-detail-area {
  &__heading {
    text-transform: uppercase;
    color: grey;
  }

  &__content {
    background-color: rgba(0, 0, 0, 0.603);
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 15px;
  }

  & a {
    color: white;
    font-weight: 700;
  }
}
</style>
