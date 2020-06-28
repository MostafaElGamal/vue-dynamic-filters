<template>
  <div id="app">
    {{ testCheckbox }}
    <div class="filter" v-for="filter in filters" :key="filter.id">
      <vue-filter
        selectValue="id"
        checkboxValue="id"
        methodType="m2"
        :filter="filter"
        :singleFilterValue="testCheckbox"
        @testMethod="testMethod"
      ></vue-filter>
    </div>
    <!-- {{ test }}

    <vue-filter
      :filters="filters"
      selectValue="id"
      checkboxValue="id"
      v-model="test"
    ></vue-filter> -->
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
