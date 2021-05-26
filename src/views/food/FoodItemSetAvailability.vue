<template>
  <div>
    <EndPointComponent
      urlEndPoint="/items/:id/setAvailability"
      description="set availability of the food"
      method="patch"
      :accessList="['OPERATOR only']"
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
          param: "available",
          type: "boolean",
          description: "Food availability (true or false)",
        },
      ],
      responseExample: {
        success: true,
        message: "Item state has been changed successfully.",
        data: {
          available: true,
        },
      },

      requestExample: {
        available: true,
      },
      responses: [
        {
          code: 200,
          description: "Item state changed successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store owner can perform this action)",
        },
        {
          code: 404,
          description: "Food item not found!",
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
