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
        :filterValue="filterValue"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxName="checkboxName"
        :checkboxValueKey="checkboxValueKey"
        :checkboxLabelKey="checkboxLabelKey"
        @checkboxChangedToVueFilter="sentCheckbox"
      ></filter-inputs>
    </div>
  </div>
</template>
<script>
import filterInputs from "./filterInputs";
export default {
  name: "vue-filter",
  props: {
    // Data
    filters: {
      type: Array,
      default: () => [],
    },
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    // Methods Type
    methodType: {
      type: String,
      default: "m1",
    },
    // Filter Info
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
    // Checkbox Info
    checkboxName: {
      type: String,
      default: "checkbox",
    },
    checkboxLabelKey: {
      type: String,
      default: "title",
    },
    checkboxValueKey: {
      type: String,
      default: "checkbox",
    },
  },
  components: {
    filterInputs,
  },
  methods: {
    sentCheckbox(selectedCheckbox) {
      let value, checkboxValueKey;
      value = this.filterValue;
      checkboxValueKey = this.checkboxValueKey;
      // Check if there is a array in checkbox key if not asssign an new array.
      if (!value[checkboxValueKey]) {
        value[checkboxValueKey] = [];
      }
      // Check if this seleceted checkbox in array or not if not remove it.
      if (value[checkboxValueKey].includes(selectedCheckbox)) {
        const index = value[checkboxValueKey].indexOf(selectedCheckbox);
        value[checkboxValueKey].splice(index, 1);
      } else {
        value[checkboxValueKey].push(selectedCheckbox);
      }
      if (!value[checkboxValueKey].length) {
        delete value[checkboxValueKey];
      }
      this.$emit("input", { ...this.filterValue });
    },
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
