<template>
  <div>
    <EndPointComponent
      method="post"
      urlEndPoint="/auth/operator_login"
      description="Get access token"
      :accessList="['public']"
    />
    <ParamsTable :params="params" title="Body parameters" />
    <ExampleReqResObjects
      :requestExample="requestExample"
      :responseExample="responseExample"
    />
    <ResponseTable :responses="responses" title="Expected responses" />
  </div>
</template>

<script>
import ParamsTable from "@/components/endpoint/ParamsTable.vue";
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";
import ExampleReqResObjects from "@/components/endpoint/ExampleReqResObjects.vue";
import ResponseTable from "@/components/endpoint/ResponseTable.vue";

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
      requestExample: {
        mobile: "07XXXXXXXX",
        password: "@A12345678b",
      },
      responseExample: {
        data: {
          first_name: "T'Challa",
          last_name: "",
          role: "owner",
        },
        message: "Login successful for the user 07XXXXXXXX",
        success: true,
        token: "Your access token",
        expiresIn: "24",
      },
      responses: [
        {
          code: 200,
          description: "Authentication successfully completed!",
        },
        {
          code: 401,
          description: "Authentication faild!",
        },
        {
          code: 422,
          description: "Unprocessable entity!",
        },
      ],
    };
  },
  components: {
    ParamsTable,
    EndPointComponent,
    ExampleReqResObjects,
    ResponseTable,
  },
  created() {
    this.$emit("update:layout", "AuthMain");
  },
};
</script>
