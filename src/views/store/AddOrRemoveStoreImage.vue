<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id/image"
      description="Add store image"
      method="post"
      :accessList="['OWNER only']"
    />
    <ParamsTable :params="formDataParams" title="form-data parameters" />
    <ExampleReqResObjects
      :requestExample="requestExample"
      :responseExample="responseExample"
    >
      <template #requestHead>
        <h5>Form Data Example (multipart/form-data)</h5>
      </template>
    </ExampleReqResObjects>
    <ResponseTable :responses="responses" title="Expected responses" />
    <hr class="mb-4" />
    <EndPointComponent
      urlEndPoint="/properties/:id/image"
      description="Remove store image"
      method="delete"
      :accessList="['OWNER only']"
    />
    <ExampleReqResObjects :responseExample="responseExampleImageDelete">
      <template #requestHead>
        <h5>Form Data Example (multipart/form-data)</h5>
      </template>
    </ExampleReqResObjects>
    <ResponseTable
      :responses="responsesImageRemove"
      title="Expected responses"
    />
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
      formDataParams: [
        {
          param: "image",
          type: "File",
          description: "Store image",
        },
      ],
      responseExample: {
        success: true,
        message: "image uploaded successfully.",
        data: {
          location: "uploaded/image/url",
        },
      },
      responseExampleImageDelete: {
        success: true,
        message: "image removed successfully.",
      },

      requestExample: {
        image: "File",
      },
      responses: [
        {
          code: 200,
          description: "Stores image updated successfully!",
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
      responsesImageRemove: [
        {
          code: 200,
          description: "Stores image removed successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store owner can performe this action)",
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
