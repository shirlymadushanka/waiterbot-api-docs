<template>
  <div class="param-table">
    <h5 class="param-table__title">{{ title }}</h5>
    <v-simple-table fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Param
            </th>
            <th class="text-left">
              Description
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in params" :key="item.name">
            <td>{{ item.param }}</td>
            <td>
              <template v-if="item.type">
                <b>{{ item.type }}</b
                ><br />
              </template>
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
    params: {
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
  border: 1px solid rgb(37, 37, 117);
  border-radius: 10px;
  padding: 5px;
}
.param-table {
  position: relative;

  &__title {
    position: absolute;
    top: -5px;
    left: 10px;
    z-index: 100;
    background: rgb(46, 46, 158);
    padding: 0 10px;
    border-radius: 10px;
    color: white;
  }
}
</style>
