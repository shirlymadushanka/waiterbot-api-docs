<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/items"
      description="Retreive food items in store"
      :accessList="['Public']"
    />
    <!-- <ParamsTable :params="params" title="Header parameters" /> -->
    <ExampleReqResObjects :responseExample="responseExample" />
    <ResponseTable :responses="responses" title="Expected responses" />
  </div>
</template>

<script>
// import ParamsTable from "@/components/endpoint/ParamsTable.vue";
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
            imgUrl:
              "https://via.placeholder.com/500?text=Image%20not%20available",
            review_count: 0,
            stars: 0,
            status: "available",
            _id: "60100d74c1132d1a2877c6cf",
            name: "chicken rice",
            description: "some description",
            category: "rice",
            portions: [
              {
                _id: "60100d74c1132d1a2877c6d0",
                name: "budget-pack",
                price: 130,
              },
            ],
            ingredients: [],
            property: "6009beb47b6077088836fca5",
            createdAt: "2021-01-26T12:39:16.604Z",
            updatedAt: "2021-01-26T12:39:16.604Z",
            __v: 0,
          },
        ],
        message: "Food item fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Items fetched successfully!",
        },
        {
          code: 404,
          description: "Store not found!",
        },
      ],
    };
  },
  components: {
    // ParamsTable,
    EndPointComponent,
    ExampleReqResObjects,
    ResponseTable,
  },
  created() {
    this.$emit("update:layout", "StoreMain");
  },
};
</script>
