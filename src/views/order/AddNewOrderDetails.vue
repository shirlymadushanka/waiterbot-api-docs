<template>
  <div>
    <EndPointComponent
      urlEndPoint="/orders"
      method="post"
      description="add new food order"
      :accessList="['clients']"
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
          param: "property",
          type: "String",
          description: "Store id which we place the order",
        },
        {
          param: "amount",
          type: "Number",
          description: "Total amount of the foods",
        },
        {
          param: "table",
          type: "String",
          description: "Table of the order",
        },
        {
          param: "items",
          type: "Array of { item: String, portion: String, qty: Integear }",
          description: "Order item details",
        },
      ],
      requestExample: {
        property: "6009beb47b6077088836fca5",
        amount: 158,
        table: "601203069ad16209b8d5498b",
        items: [
          {
            item: "60100d74c1132d1a2877c6cf",
            portion: "60100d74c1132d1a2877c6d0",
            qty: 2,
          },
          {
            item: "60100d74c1132d1a2877c6cf",
            portion: "60100d74c1132d1a2877c6d0",
            qty: 2,
          },
        ],
      },
      responseExample: {
        data: {
          status: "Pending",
          _id: "6012a5ab6a50c545f0fab182",
          user: "600fe8c3e1acd304fc78b50f",
          property: "6009beb47b6077088836fca5",
          amount: 158,
          table: "601203069ad16209b8d5498b",
          items: [
            {
              _id: "6012a5ab6a50c545f0fab183",
              item: "60100d74c1132d1a2877c6cf",
              portion: "60100d74c1132d1a2877c6d0",
              qty: 2,
            },
            {
              _id: "6012a5ab6a50c545f0fab184",
              item: "60100d74c1132d1a2877c6cf",
              portion: "60100d74c1132d1a2877c6d0",
              qty: 2,
            },
          ],
          createdAt: "2021-01-28T11:53:15.303Z",
          updatedAt: "2021-01-28T11:53:15.303Z",
          __v: 0,
        },
        message: "Order placed successfully.",
        success: true,
      },
      responses: [
        {
          code: 201,
          description: "Order placed successfully!",
        },
        {
          code: 404,
          description: "Food item / Table / Portion not found!",
        },
        {
          code: 401,
          description: "Unauthorized! (client must be logged In)",
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
};
</script>
