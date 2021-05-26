<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/robots"
      description="Retreive available robots in store"
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
            status: "Delivered",
            _id: "60120196fd6da149a4ad1ecc",
            property: "6009beb47b6077088836fca5",
            createdAt: "2021-01-28T00:13:10.688Z",
            updatedAt: "2021-01-28T00:32:19.904Z",
            __v: 0,
            table: {
              _id: "601203069ad16209b8d5498b",
              table_number: "3",
            },
          },
        ],
        message: "Robot fetched successfully.",
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
