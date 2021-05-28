<template>
  <div>
    <MainDetailArea title="Introduction">
      Welcome to <span class="brandName">WAITER<span>BOT</span></span> system.
      <br /><br />
      Robots have seen a wide array and continuous applications in various
      industries since their inception. The efficiency and versatility that
      robots possess can be molded into a vast area of services, and robots in
      restaurants can step up to be a huge breakthrough in terms of customer and
      owner satisfaction and improving the overall experience in diners.
    </MainDetailArea>
    <MainDetailArea>
      The <span class="brandName">WAITER<span>BOT</span></span> System is an
      automated system designed for placing and delivering orders in a
      restaurant. This system will replace the human waiters with robot waiters
      for an efficient delivery process and also give customers a new
      experience. Customers can place orders via the mobile application and once
      the orders are ready, the WaiterBots will deliver the orders to the
      customer.
    </MainDetailArea>
    <EndPointComponent
      urlEndPoint="http://waiterbot-api.us-east-1.elasticbeanstalk.com/api"
      description="This is the API base url"
      :accessList="['BASE url']"
      :showMethod="false"
    />
    <slot />
  </div>
</template>

<script>
import MainDetailArea from "@/components/MainDetailArea.vue";
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";
export default {
  name: "Home",
  components: {
    MainDetailArea,
    EndPointComponent,
  },
  created() {
    this.$emit("update:layout", "div");
  },
};
</script>
