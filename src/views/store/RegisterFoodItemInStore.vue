<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/items"
      method="post"
      description="store food items in store"
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
          param: "name",
          type: "String",
          description: "Food item name",
        },
        {
          param: "description",
          type: "String",
          description: "Food item description",
        },
        {
          param: "category",
          type: "String",
          description: "Food item category",
        },
        {
          param: "portions",
          type: "Array of { name: String, price: Number }",
          description: "Food item portions",
        },
        {
          param: "ingredients",
          type: "String[]",
          description: "Food item ingredients (Optional)",
        },
      ],
      requestExample: {
        name: "chicken rice",
        description: "some description",
        category: "rice",
        portions: [
          {
            name: "budget-pack",
            price: "130",
          },
        ],
        ingredients: ["Ginger", "garlic", "shiitake mushrooms"],
      },
      responseExample: {
        data: {
          imgUrl:
            "https://via.placeholder.com/500?text=Image%20not%20available",
          review_count: 0,
          stars: 0,
          ingredients: ["Ginger", "garlic", "shiitake mushrooms"],
          status: "available",
          _id: "6012479ad4b3a00d70826d6c",
          name: "chicken rice",
          description: "some description",
          category: "rice",
          portions: [
            {
              _id: "6012479ad4b3a00d70826d6d",
              name: "budget-pack",
              price: 130,
            },
          ],
          property: "6009beb47b6077088836fca5",
          createdAt: "2021-01-28T05:11:54.684Z",
          updatedAt: "2021-01-28T05:11:54.684Z",
          __v: 0,
        },
        message: "Item added successfully.",
        success: true,
      },
      responses: [
        {
          code: 201,
          description: "Food item registration successfully completed!",
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
