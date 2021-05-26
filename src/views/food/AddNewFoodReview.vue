<template>
  <div>
    <EndPointComponent
      urlEndPoint="/items/:id/reviews"
      method="post"
      description="add new review for a food"
      :accessList="['clients after order creation']"
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
          param: "starts",
          type: "Integear",
          description: "rating for the food (1 - 5)",
        },
        {
          param: "comment",
          type: "String",
          description: "review for the food item",
        },
      ],
      requestExample: {
        stars: 3,
        comment: "This is awesome. Yummy!!!",
      },
      responseExample: {
        data: {
          stars: 3,
          comment: "This is awesome. Yummy!!!",
        },
        message: "Review added successfully.",
        success: true,
      },
      responses: [
        {
          code: 201,
          description: "Food review successfully added!",
        },
        {
          code: 404,
          description: "Food item not found!",
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
