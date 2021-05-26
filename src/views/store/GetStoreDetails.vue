<template>
  <div>
    <EndPointComponent
      urlEndPoint="/properties/:id"
      description="Retreive store data"
      :accessList="['public']"
    />
    <!-- <ParamsTable :params="params" title="Header parameters" /> -->
    <ExampleReqResObjects :responseExample="responseExample" />
    <ResponseTable :responses="responses" title="Expected responses" />
  </div>
</template>

<script>
// import ParamsTable from "@/components/endpoint/ParamsTable.vue";
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";
import ExampleReqResObjects from "@/components/endpoint/ExampleReqResObjects.vue";
import ResponseTable from "@/components/endpoint/ResponseTable.vue";

export default {
  data() {
    return {
      params: [
        {
          param: "Authentication",
          type: "Bearer scheme",
          description: "Ex: Authorization: Bearer <token>",
        },
      ],
      responseExample: {
        data: {
          _id: "6009beb47b6077088836fca5",
          name: "New Lindu Hotel",
          description: "New Lindu Hotel description",
          address: "Peradeniya,Kandy",
          location: {
            type: "Point",
            coordinates: [-127.5, 30.7],
          },
          imgUrl: "store image url",
          owner: {
            userType: "Owner",
            first_name: "kavindu",
            last_name: "chamith",
          },
        },
        message: "Properties fetched successfully.",
        success: true,
      },
      responses: [
        {
          code: 200,
          description: "Stores fetched successfully!",
        },
        {
          code: 404,
          description: "Store not found!",
        },
      ],
    };
  },
  components: {
    // ParamsTable,
    EndPointComponent,
    ExampleReqResObjects,
    ResponseTable,
  },
  created() {
    this.$emit("update:layout", "StoreMain");
  },
};
</script>
