<template>
  <div>
    <EndPointComponent
      method="post"
      urlEndPoint="/auth/operator_register"
      description="Register an operator"
      :accessList="['OWNER ONLY']"
    />
    <ParamsTable :params="headerParams" title="Header parameters" />
    <ParamsTable :params="bodyParams" title="Body parameters" />
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
      bodyParams: [
        {
          param: "first_name",
          type: "String",
          description: "Your awesome first name",
        },
        {
          param: "last_name",
          type: "String",
          description: "Your awesome last name",
        },
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
      headerParams: [
        {
          param: "Authentication",
          type: "Bearer scheme",
          description: "Ex: Authorization: Bearer <token>",
        },
      ],
      requestExample: {
        first_name: "john",
        last_name: "snow",
        mobile: "07XXXXXXXX",
        password: "@A12345678b",
      },
      responseExample: {
        message: "operator created successfully.",
        success: true,
        data: {
          _id: "60ad01cf0c57b30e1394bac0",
          first_name: "john",
          last_name: "snow",
          mobile: "07XXXXXXXX",
          role: "operator",
        },
      },
      responses: [
        {
          code: 201,
          description: "Operator registration successfully completed!",
        },
        {
          code: 422,
          description: "Unprocessable entity!",
        },
        {
          code: 409,
          description: "Data conflict!",
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
