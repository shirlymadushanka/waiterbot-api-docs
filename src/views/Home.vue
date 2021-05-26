<template>
  <div>
    <MainDetailArea title="Introduction">
      You can access your store data though our API. So have the power to plug
      your existing application with
      <span class="brandName">WAITER<span>BOT</span></span> system. <br />
      Before continue, you have to have property id which you can request from
      us upon registration.
    </MainDetailArea>
    <slot />
  </div>
</template>

<script>
import MainDetailArea from "@/components/MainDetailArea.vue";
export default {
  name: "Home",
  components: {
    MainDetailArea,
  },
  created() {
    this.$emit("update:layout", "div");
  },
};
</script>
