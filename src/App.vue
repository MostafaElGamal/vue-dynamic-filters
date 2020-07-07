<template>
  <div id="app">
    Filter One :{{ filterOneValues }}
    <br />
    Filter Two {{ filterTwoValues }}
    <vue-filter
      :filters="filters"
      :displayType="false"
      checkboxValue="id"
      v-model="filterOneValues"
    ></vue-filter>
    <hr />
    <hr />
    <hr />

    <div v-for="filter in filters" :key="filter.id">
      <vue-filter
        selectValue="id"
        checkboxValue="id"
        methodType="m2"
        :displayType="false"
        :filter="filter"
        :singleFilterValue="filterTwoValues"
        @methodTwoValueChaned="changeValue"
      ></vue-filter>
    </div>
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
      filterOneValues: {},
      filterTwoValues: {},
    };
  },
  methods: {
    changeValue(value) {
      this.filterTwoValues = value;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
