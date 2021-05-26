<template>
  <div>
    <EndPointComponent
      urlEndPoint="/items/:id"
      description="Retreive food item details"
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
          imgUrl:
            "https://via.placeholder.com/500?text=Image%20not%20available",
          review_count: 0,
          stars: 0,
          status: "available",
          _id: "600ae7c41d1d074010fadd91",
          name: "chicken rice",
          description: "This is test description",
          category: "rice",
          portions: [
            {
              _id: "600ae7c41d1d074010fadd92",
              name: "budget-pack",
              price: 130,
            },
          ],
          ingredients: [],
          property: "6009beb47b6077088836fca5",
          createdAt: "2021-01-22T14:57:08.331Z",
          updatedAt: "2021-01-26T10:28:22.793Z",
          __v: 0,
        },
        message: "Item fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Item fetched successfully!",
        },
        {
          code: 404,
          description: "Food item not found!",
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
