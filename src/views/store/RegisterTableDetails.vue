<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/tables"
      method="post"
      description="Register a table in the store"
      :accessList="['OWNER only']"
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
      headerParams: [
        {
          param: "Authentication",
          type: "Bearer scheme",
          description: "Ex: Authorization: Bearer <token>",
        },
      ],
      bodyParams: [
        {
          param: "turn_direction",
          type: "left or right",
          description: "Junction turn direction of the table",
        },
        {
          param: "junction",
          type: "Integear",
          description: "Junction of the table",
        },
        {
          param: "table_number",
          type: "Integear",
          description: "Table number",
        },
      ],
      requestExample: {
        table_number: 3,
        junction: 2,
        turn_direction: "left",
      },
      responseExample: {
        data: {
          turn_direction: "left",
          _id: "6011e229f94ee1415029714d",
          property: "6009beb47b6077088836fca5",
          table_number: "3",
          junction: 2,
          createdAt: "2021-01-27T21:59:05.320Z",
          updatedAt: "2021-01-27T21:59:05.320Z",
          __v: 0,
        },
        message: "Table created successfully.",
        success: true,
      },
      responses: [
        {
          code: 201,
          description: "Table creation successfully completed!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only shop owner can perform this action)",
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
    this.$emit("update:layout", "StoreMain");
  },
};
</script>
