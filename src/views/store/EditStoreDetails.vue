<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id"
      description="Edit store data"
      method="patch"
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
          description: "Name of the store (Optional)",
        },
        {
          param: "description",
          type: "String",
          description: "Description of the store (Optional)",
        },
        {
          param: "address",
          type: "String",
          description: "Address of the store (Optional)",
        },
        {
          param: "location",
          type: "Object : { type : String, coordinates: [Integear, Integear]}",
          description: "Geo-coordinates of the store (Optional)",
        },
      ],
      responseExample: {
        data: {
          _id: "6009beb47b6077088836fca5",
          name: "New Lindu Hotel",
          description: "New description of the store",
          address: "Peradeniya,Kandy",
          location: {
            type: "Point",
            coordinates: [-127.5, 30.7],
          },
          imgUrl: "store/image/url",
        },
        message: "Property updated successfully.",
        success: true,
      },

      requestExample: {
        description: "New description of the store",
      },
      responses: [
        {
          code: 200,
          description: "Stores updated successfully!",
        },
        {
          code: 401,
          description:
            "Unauthorized! (Only store owner can perform this action)",
        },
        {
          code: 404,
          description: "Store not found!",
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
