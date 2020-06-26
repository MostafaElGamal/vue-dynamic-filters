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
      testCheckbox: {},
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
