<template>
  <div id="app">
    <!-- {{ testCheckbox }}
    <div v-for="filter in filters" :key="filter.id">
      <vue-filter
        selectValue="id"
        checkboxValue="id"
        methodType="m2"
        :displayType="false"
        filterInputHolderClass="asdasd"
        searchInputClass="testsearcch"
        :filter="filter"
        :singleFilterValue="testCheckbox"
        @testMethod="testMethod"
      ></vue-filter>
    </div>
    <hr />
    <hr />
    <hr /> -->
    {{ test }}
    <vue-filter
      :filters="filters"
      :displayType="false"
      checkboxValue="id"
      v-model="test"
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
        search: "wdasdasd",
        checkbox: [4, 2],
        min: 11,
        max: 123,
        select: 2,
      },
    };
  },
  methods: {
    testMethod(value) {
      this.testCheckbox = value;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
