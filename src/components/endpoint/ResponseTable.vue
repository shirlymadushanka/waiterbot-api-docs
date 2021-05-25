<template>
  <div class="param-table">
    <h5 class="param-table__title">{{ title }}</h5>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Response Code
            </th>
            <th class="text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in responses" :key="item.name">
            <td>{{ item.code }}</td>
            <td>
              {{ item.description }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </div>
</template>

<script>
export default {
  props: {
    responses: {
      default: [],
    },
    title: {
      defalt: "",
    },
  },
};
</script>

<style lang="scss" scoped>
.v-data-table {
  border: 1px solid rgb(223, 201, 81);
  border-radius: 10px;
  padding: 5px;
}
.param-table {
  position: relative;
  margin-bottom: 10px;

  &__title {
    position: absolute;
    top: -5px;
    left: 10px;
    z-index: 4;
    background-color: rgb(143, 124, 20);
    padding: 0 10px;
    border-radius: 10px;
    color: white;
  }
}
</style>
