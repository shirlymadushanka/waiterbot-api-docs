<template>
  <div>
    <EndPointComponent urlEndPoint="/properties/:id" description="Retreive store data" />
    <ParamsTable :params="params" />
  </div>
</template>

<script>
import ParamsTable from "@/components/endpoint/ParamsTable.vue";
import EndPointComponent from "@/components/endpoint/EndPointComponent.vue";

export default {
  data() {
    return {
      params: [
        {
          param: "img-size",
          type: "integear",
          description:
            "(optional) image size: length of longest side in pixels",
        },
        {
          param: "img-size",
          type: "integear",
          description:
            "(optional) image size: length of longest side in pixels",
        },
      ],
      code: "x = 10 print(x)"
    };
  },
  components: {
    ParamsTable,
    EndPointComponent,
  },
  created() {
    this.$emit("update:layout", "StoreMain");  
  }
};
</script>
