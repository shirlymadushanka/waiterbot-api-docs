<template>
  <div>
    <EndPointComponent
      urlEndPoint="/robots/:id"
      description="set robot state"
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
          param: "status",
          type: "must be one of [Idle, Assigned, Delivering, Delivered]",
          description: "Current status of the robot",
        },
        {
          param: "table",
          type: "must be a valid table Id",
          description: "current assigned table of the robot",
        },
      ],
      responseExample: {
        data: {
          status: "Delivered",
          _id: "60120196fd6da149a4ad1ecc",
          property: "6009beb47b6077088836fca5",
          createdAt: "2021-01-28T00:13:10.688Z",
          updatedAt: "2021-01-28T00:48:56.595Z",
          __v: 0,
          table: "601203069ad16209b8d5498b",
        },
        message: "Robot updated successfully.",
        success: true,
      },

      requestExample: {
        status: "Delivered",
        table: "601203069ad16209b8d5498b",
      },
      responses: [
        {
          code: 200,
          description: "Robot state changed successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store operator can perform this action)",
        },
        {
          code: 404,
          description: "Robot/Table not found!",
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
