<template>
  <div class="vue-filter__search-holder">
    <input type="text" @keyup="search" :value="filterValue[searchValueKey]" />
  </div>
</template>
<script>
export default {
  name: "search",
  props: {
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Array,
      default: () => [],
    },
    searchValueKey: {
      type: String,
      default: "search",
    },
  },
  methods: {
    search(event) {
      this.$emit("searchChangeToFilterInputs", event.target.value);
    },
  },
};
</script>
