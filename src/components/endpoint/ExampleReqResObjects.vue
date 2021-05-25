<template>
  <v-row class="pb-2">
    <v-col v-if="requestExample">
      <h5>Request Body Example (application/json)</h5>
      <json-viewer
        :value="requestExample"
        :expand-depth="2"
        copyable
        boxed
        sort
      ></json-viewer>
    </v-col>
    <v-col v-if="responseExample">
      <h5>Response Body Example (application/json)</h5>
      <json-viewer
        :value="responseExample"
        :expand-depth="2"
        copyable
        boxed
        sort
      ></json-viewer>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["requestExample", "responseExample"],
  data: () => ({}),
};
</script>

<style lang="scss" scoped></style>
