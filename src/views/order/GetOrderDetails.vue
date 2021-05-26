<template>
  <div>
    <EndPointComponent
      urlEndPoint="/orders/:id"
      description="Retreive details of a order"
      :accessList="['Public']"
    />
    <ExampleReqResObjects :responseExample="responseExample" />
    <ResponseTable :responses="responses" title="Expected responses" />
  </div>
</template>

<script>
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";
import ExampleReqResObjects from "@/components/endpoint/ExampleReqResObjects.vue";
import ResponseTable from "@/components/endpoint/ResponseTable.vue";

export default {
  data() {
    return {
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
        message: "Order fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Review details fetched successfully!",
        },
        {
          code: 404,
          description: "Food order not found!",
        },
      ],
    };
  },
  components: {
    EndPointComponent,
    ExampleReqResObjects,
    ResponseTable,
  },
};
</script>
