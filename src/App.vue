<template>
  <div id="app">
    {{ testCheckbox }}
    <vue-filter
      :filters="filters"
      :filterValue="testCheckbox"
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
        checkbox: [2, 4, 6],
      },
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
