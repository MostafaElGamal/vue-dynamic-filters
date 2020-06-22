<template>
  <div class="vue-filter">
    <div
      class="vue-filter__filter-holder"
      v-for="filter in filters"
      :key="filter.id"
    >
      <h4 class="vue-filter__title">
        {{ filter[filterTitleKey] }}
      </h4>
      <filter-input
        :type="filter[filterTypeKey]"
        :options="filter[optionsKey]"
        :filterInput="filter"
        :filterValues="filterValues"
        @updateFilrerValues="updateFilrerValues"
      ></filter-input>
    </div>
  </div>
</template>
<script>
import filterInput from "./filterInput";
export default {
  name: "vue-filters",
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    filterValues: {
      type: Object,
      default: () => ({}),
    },
    filterTitleKey: {
      type: String,
      default: () => "title",
    },
    filterTypeKey: {
      type: String,
      default: () => "filter_type",
    },
    optionsKey: {
      type: String,
      default: () => "options",
    },
  },
  components: {
    filterInput,
  },
  methods: {
    updateFilrerValues(data) {
      console.log(data);
      this.$emit("update", data);
    },
  },
};
</script>
