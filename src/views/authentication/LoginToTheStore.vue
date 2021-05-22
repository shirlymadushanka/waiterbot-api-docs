<template>
  <div>
    <EndPointComponent
      method="post"
      urlEndPoint="/auth/owner_login"
      description="Get access token"
    />
    <ParamsTable :params="params" title="Body parameters" />
    <ParamsTable :params="params" title="Body parameters" />
  </div>
</template>

<script>
import ParamsTable from "@/components/endpoint/ParamsTable.vue";
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";

export default {
  data() {
    return {
      params: [
        {
          param: "mobile",
          type: "must be a valid mobile number (07X XXXX XXX)",
          description: "Mobile number used upon the registration",
        },
        {
          param: "password",
          type: "",
          description: "Your super secret password",
        },
      ],
    };
  },
  components: {
    ParamsTable,
    EndPointComponent,
  },
  created() {
    this.$emit("update:layout", "AuthMain");
  },
};
</script>
