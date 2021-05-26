<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/tables"
      description="Retreive available tables in store"
      :accessList="['OWNER', 'OPERATOR']"
    />
    <ParamsTable :params="params" title="Header parameters" />
    <ExampleReqResObjects :responseExample="responseExample" />
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
          param: "Authentication",
          type: "Bearer scheme",
          description: "Ex: Authorization: Bearer <token>",
        },
      ],
      responseExample: {
        data: [
          {
            turn_direction: "left",
            _id: "6011e229f94ee1415029714d",
            property: "6009beb47b6077088836fca5",
            table_number: "10",
            junction: 4,
            createdAt: "2021-01-27T21:59:05.320Z",
            updatedAt: "2021-01-27T22:31:15.124Z",
            __v: 0,
          },
        ],
        message: "Table fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Robots fetched successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only shop owner or operator can perform this action)",
        },
        {
          code: 404,
          description: "Store not found!",
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
