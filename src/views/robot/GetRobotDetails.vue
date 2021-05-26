<template>
  <div>
    <EndPointComponent
      urlEndPoint="/robots/:id"
      description="Retreive details of the robot"
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
          status: "Idle",
          _id: "6010727f6bdd77367cedce24",
          property: "6009beb47b6077088836fca5",
          createdAt: "2021-01-26T19:50:23.552Z",
          updatedAt: "2021-01-26T19:50:23.552Z",
          __v: 0,
        },
        message: "Robot fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Robot details fetched successfully!",
        },
        {
          code: 404,
          description: "Robot not found!",
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
