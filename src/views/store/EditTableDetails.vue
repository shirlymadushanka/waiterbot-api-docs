<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:propertyId/tables/:tableId"
      description="Edit table data"
      method="patch"
      :accessList="['OWNER only']"
    />
    <ParamsTable :params="headerParams" title="Header parameters" />
    <ParamsTable :params="bodyParams" title="Body parameters" />
    <ExampleReqResObjects
      :requestExample="requestExample"
      :responseExample="responseExample"
    />
    <hr class="mb-4" />
    <EndPointComponent
      urlEndPoint="/properties/:propertyId/tables/:tableId"
      description="Delete table data"
      method="delete"
      :accessList="['OWNER only']"
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
          param: "turn_direction",
          type: "left or right",
          description: "Junction turn direction of the table (Optional)",
        },
        {
          param: "junction",
          type: "Integear",
          description: "Junction of the table (Optional)",
        },
        {
          param: "table_number",
          type: "Integear",
          description: "Table number (Optional)",
        },
      ],
      responseExample: {
        data: {
          turn_direction: "left",
          _id: "6011e229f94ee1415029714d",
          property: "6009beb47b6077088836fca5",
          table_number: "10",
          junction: 4,
          createdAt: "2021-01-27T21:59:05.320Z",
          updatedAt: "2021-01-27T23:21:53.759Z",
          __v: 0,
        },
        message: "Table updated successfully.",
        success: true,
      },
      requestExample: {
        table_number: 10,
        junction: 4,
      },
      responses: [
        {
          code: 200,
          description: "Stores updated/deleted successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store owner can perform this action)",
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
