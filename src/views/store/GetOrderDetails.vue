<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/orders"
      description="Retreive orders in store"
      :accessList="['Owner', 'operator']"
    />
    <ParamsTable :params="params" title="Header parameters" />
    <ParamsTable :params="queryParams" title="Query parameters" />
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
      queryParams: [
        {
          param: "status",
          type:
            "Must be one of [Pending, Cancelled, Preparing, Delivering, Delivered]",
          description: "Status of the order",
        },
      ],
      responseExample: {
        data: [
          {
            status: "Pending",
            _id: "6012a5996a50c545f0fab180",
            user: "600fe8c3e1acd304fc78b50f",
            property: "6009beb47b6077088836fca5",
            amount: 158,
            table: {
              _id: "6046050da8996e00152ea87b",
              table_number: "2",
            },
            items: [
              {
                _id: "6012a5996a50c545f0fab181",
                item: "60100d74c1132d1a2877c6cf",
                portion: "60100d74c1132d1a2877c6d0",
                qty: 2,
              },
            ],
            createdAt: "2021-01-28T11:52:57.197Z",
            updatedAt: "2021-01-28T11:52:57.197Z",
            __v: 0,
          },
        ],
        message: "Orders fetched successfully.",
      },
      responses: [
        {
          code: 200,
          description: "Orders fetched successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store owner and operator can perform this action)",
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
