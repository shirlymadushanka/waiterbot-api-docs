<template>
  <div>
    <MainDetailArea title="Authentication">
      In the <span class="brandName">WAITER<span>BOT</span></span> system,
      authentication done via
      <a href="https://jwt.io/introduction" target="blank">
        JWT authentication </a
      ><br />
      You'll recieve your initial password after registration. Your username
      will be the mobile number which you used to register for the service
    </MainDetailArea>
    <slot />
  </div>
</template>

<script>
import MainDetailArea from "@/components/MainDetailArea.vue";
export default {
  name: "AuthMain",
  components: {
    MainDetailArea,
  },
};
</script>
