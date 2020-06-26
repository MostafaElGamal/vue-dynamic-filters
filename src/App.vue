<template>
  <div id="app">
    {{ testCheckbox }}
    <vue-filter
      :filters="filters"
      :filterValue="testCheckbox"
      selectValue="id"
      checkboxValue="id"
      v-model="testCheckbox"
    ></vue-filter>
  </div>
</template>

<script>
import vueFilter from "./vue-filter";
import filters from "./filters";
export default {
  name: "App",
  components: {
    vueFilter,
  },
  data() {
    return {
      filters: filters,
      test: {},
      testCheckbox: {
        min: 1,
        max: 21,
      },
      // testCheckbox: {
      //   min: 1,
      //   max: 21,
      //   search: "asdasd",
      //   checkbox: [2, 4],
      //   select: 2,
      // },
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
