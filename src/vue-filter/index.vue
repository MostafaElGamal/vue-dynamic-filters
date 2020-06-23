<template>
  <div class="vue-filter">
    <div
      class="vue-filter__filter-holder"
      v-for="filter in filters"
      :key="filter.id"
    >
      <p class="vue-filter__title">
        {{ filter[filterTitleKey] }}
      </p>
      <filter-inputs
        :value="value"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxName="checkboxName"
        :checkboxOutputKey="checkboxOutputKey"
        :checkboxLabelKey="checkboxLabelKey"
      ></filter-inputs>
    </div>
  </div>
</template>
<script>
import filterInputs from "./filterInputs";
export default {
  name: "vue-filter",
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    methodType: {
      type: String,
      default: "m1",
    },
    filterTitleKey: {
      type: String,
      default: "title",
    },
    filterTypeKey: {
      type: String,
      default: "filter_type",
    },
    filterOptionsKey: {
      type: String,
      default: "options",
    },
    displayTypeKey: {
      type: String,
      default: "filter_type",
    },
    checkboxName: {
      type: String,
      default: "checkbox",
    },
    checkboxLabelKey: {
      type: String,
      default: "title",
    },
    checkboxOutputKey: {
      type: String,
      default: "checkbox",
    },
  },
  components: {
    filterInputs,
  },
};
</script>
<style scoped>
.vue-filter__filter-holder {
  border-bottom: solid black 1px;
  margin-bottom: 10px;
  padding: 10px;
}
</style>
