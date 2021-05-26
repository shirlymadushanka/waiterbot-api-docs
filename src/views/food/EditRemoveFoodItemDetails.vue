<template>
  <div>
    <EndPointComponent
      urlEndPoint="/items/:id"
      method="patch"
      description="Edit food item details"
      :accessList="['OWNER only']"
    />
    <ParamsTable :params="headerParams" title="Header parameters" />
    <ParamsTable :params="bodyParams" title="Body parameters" />
    <ExampleReqResObjects
      :requestExample="requestExample"
      :responseExample="responseExample"
    />
    <ResponseTable :responses="responses" title="Expected responses" />
    <hr class="mb-4" />
    <EndPointComponent
      urlEndPoint="/items/:id"
      method="delete"
      description="Remove food item"
      :accessList="['OWNER only']"
    />
    <ExampleReqResObjects :responseExample="deleteResponseExample" />
    <ResponseTable :responses="deleteResponses" title="Expected responses" />
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
          param: "name",
          type: "String",
          description: "Food item name (Optional)",
        },
        {
          param: "description",
          type: "String",
          description: "Food item description (Optional)",
        },
        {
          param: "category",
          type: "String",
          description: "Food item category (Optional)",
        },
        {
          param: "portions",
          type: "Array of { name: String, price: Number }",
          description: "Food item portions (Optional)",
        },
        {
          param: "ingredients",
          type: "String[]",
          description: "Food item ingredients (Optional)",
        },
      ],
      requestExample: {
        description: "This should be updated!",
      },
      responseExample: {
        data: {
          imgUrl:
            "https://via.placeholder.com/500?text=Image%20not%20available",
          review_count: 0,
          stars: 0,
          status: "available",
          _id: "600ae7c41d1d074010fadd91",
          name: "chicken rice",
          description: "This should be updated!",
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
          updatedAt: "2021-01-26T11:41:36.044Z",
          __v: 0,
        },
        message: "Item updated successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Food item update successfully completed!",
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
      deleteResponses: [
        {
          code: 200,
          description: "Food item delete successfully completed!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only shop owner can perform this action)",
        },
        {
          code: 404,
          description: "Food item not found!",
        },
      ],
      deleteResponseExample: {
        data: {},
        message: "Item deleted successfully.",
        success: true,
      },
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
