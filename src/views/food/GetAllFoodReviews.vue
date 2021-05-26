<template>
  <div>
    <EndPointComponent
      urlEndPoint="/items/:id/reviews"
      description="Retreive food item reviews"
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
        data: [
          {
            _id: "6010a7c164e3aa2f8c09d154",
            item: "60100d74c1132d1a2877c6cf",
            by: "60099e9101e0282c44589fc7",
            stars: 5,
            comment: "This food was absolutely wonderful",
            createdAt: "2021-01-26T23:37:37.602Z",
            updatedAt: "2021-01-26T23:37:37.602Z",
            __v: 0,
          },
          {
            _id: "6010a82b64e3aa2f8c09d156",
            by: "60099e9101e0282c44589fc7",
            item: "60100d74c1132d1a2877c6cf",
            stars: 4,
            comment: "Lovely lunch today",
            createdAt: "2021-01-26T23:46:13.124Z",
            updatedAt: "2021-01-26T23:46:13.124Z",
            __v: 0,
          },
        ],
        message: "Reviews fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "All reviews fetched successfully!",
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
