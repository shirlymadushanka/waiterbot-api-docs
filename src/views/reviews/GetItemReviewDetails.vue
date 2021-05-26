<template>
  <div>
    <EndPointComponent
      urlEndPoint="/foodreviews/:id"
      description="Retreive details of the review"
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
          _id: "6010a82b64e3aa2f8c09d156",
          by: "60099e9101e0282c44589fc7",
          item: "60100d74c1132d1a2877c6cf",
          stars: 5,
          comment: "This food is awesome!!",
          createdAt: "2021-01-26T23:41:35.887Z",
          updatedAt: "2021-01-26T23:41:35.887Z",
          __v: 0,
        },
        message: "Review fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Review details fetched successfully!",
        },
        {
          code: 404,
          description: "Food review not found!",
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
