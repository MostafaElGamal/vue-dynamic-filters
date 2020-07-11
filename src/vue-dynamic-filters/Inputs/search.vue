<template>
  <form v-on:submit.prevent="search" :class="`${searchFormClass}`">
    <input
      type="text"
      name="search"
      :value="filterValue[searchValueKey]"
      :class="`${searchInputClass}`"
    />
    <button type="submit" :class="`${searchBtnClass}`">
      {{ searchButtonName }}
    </button>
  </form>
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
    searchInputClass: {
      type: String,
      default: "vue-filter__search",
    },
    searchButtonName: {
      type: String,
      default: "Search",
    },
    searchFormClass: {
      type: String,
      default: "vue-filter__search-form",
    },
    searchBtnClass: {
      type: String,
      default: "vue-filter__search-btn",
    },
  },
  methods: {
    search(event) {
      this.$emit("searchChangeToFilterInputs", event.target.search.value);
    },
  },
};
</script>
<style>
.vue-filter__search-form {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vue-filter__search-btn {
  padding: 4px 32px;
  color: #fff;
  letter-spacing: 0.05em;
  border: 2px solid #12cad6;
  background-color: #12cad6;
  margin-top: 10px;
}
</style>
