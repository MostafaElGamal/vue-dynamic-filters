<template>
  <div class="vue-filter__search-holder">
    <input type="text" v-model="filterValue[searchValueKey]" />
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
};
</script>
