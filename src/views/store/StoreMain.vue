<template>
  <div>
    <MainDetailArea title="Store endpoints">
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
  name: "StoreMain",
  components: {
    MainDetailArea,
  },
};
</script>
