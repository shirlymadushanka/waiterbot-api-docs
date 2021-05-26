<template>
  <div>
    <EndPointComponent
      urlEndPoint="/foodreviews/:id"
      method="patch"
      description="Edit food item review details"
      :accessList="['ONE who created only']"
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
          param: "stars",
          type: "Integear",
          description: "Food rating (1 - 5) (Optional)",
        },
        {
          param: "comment",
          type: "String",
          description: "Food review (Optional)",
        },
      ],
      requestExample: {
        stars: 4,
      },
      responseExample: {
        data: {
          _id: "6010a82b64e3aa2f8c09d156",
          by: "60099e9101e0282c44589fc7",
          item: "60100d74c1132d1a2877c6cf",
          stars: 4,
          comment: "This food is awesome!!",
          createdAt: "2021-01-26T23:46:13.124Z",
          updatedAt: "2021-01-26T23:46:13.124Z",
          __v: 0,
        },
        message: "Review updated successfully.",
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
            "Unauthorized! (Only one who created the review can change that)",
        },
        {
          code: 404,
          description: "Review not found!",
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
