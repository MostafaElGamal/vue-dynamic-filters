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
        :filterValue="value"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxValue="checkboxValue"
        :checkboxValueKey="checkboxValueKey"
        :checkboxCheckName="checkboxCheckName"
        :checkboxLabelKey="checkboxLabelKey"
        :selectCheckName="selectCheckName"
        :selectValue="selectValue"
        :selectValueKey="selectValueKey"
        :selectDisplayNameKey="selectDisplayNameKey"
        :searchValueKey="searchValueKey"
        :searchCheckName="searchCheckName"
        :priceCheckName="priceCheckName"
        :minLabel="minLabel"
        :maxLabel="maxLabel"
        :maxPriceValueKey="maxPriceValueKey"
        @checkboxChangedToVueFilter="sentCheckbox"
        @searchChangedToVueFilter="sentSearch"
        @priceChangedToVueFilter="sentPrice"
      ></filter-inputs>
    </div>
  </div>
</template>
<script>
import filterInputs from "./filterInputs";
export default {
  name: "vue-filter",
  props: {
    // Data Api's
    filters: {
      type: Array,
      default: () => [],
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
      required: true,
    },

    // Methods Api's
    methodType: {
      type: String,
      default: "m1",
    },

    // Filter Api's
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
      type: Boolean,
      default: true,
    },

    // Checkbox Api's
    checkboxCheckName: {
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
    checkboxValue: {
      type: String,
      default: "",
    },

    // Select Api's
    selectCheckName: {
      type: String,
      default: "select",
    },
    selectValueKey: {
      type: String,
      default: "select",
    },
    selectDisplayNameKey: {
      type: String,
      default: "title",
    },
    selectValue: {
      type: String,
      default: "",
    },

    // Search Api's
    searchValueKey: {
      type: String,
      default: "search",
    },
    searchCheckName: {
      type: String,
      default: "text",
    },

    // Price Api's
    priceCheckName: {
      type: String,
      default: "price",
    },
    minLabel: {
      type: String,
      default: "min",
    },
    maxLabel: {
      type: String,
      default: "max",
    },
    minPriceValueKey: {
      type: String,
      default: "min",
    },
    maxPriceValueKey: {
      type: String,
      default: "max",
    },
  },
  components: {
    filterInputs,
  },
  methods: {
    sentInput() {
      this.$emit("input", { ...this.value });
    },
    filterValueAndKey(valueKey) {
      return [this.value, valueKey];
    },
    deleteEmptyFilter(filterCondition, valueKey) {
      let [value] = this.filterValueAndKey();

      if (!filterCondition) {
        delete value[valueKey];
      }
    },
    checkIfEmptyAndSent(condition, valueKey) {
      this.deleteEmptyFilter(condition, valueKey);
      this.sentInput();
    },
    sentSearch(test) {
      let [value, searchValueKey] = this.filterValueAndKey(this.searchValueKey);
      value[searchValueKey] = test;
      this.checkIfEmptyAndSent(value[searchValueKey], searchValueKey);
    },
    sentPrice({ min, max }) {
      this.value[this.minPriceValueKey] = min;
      this.value[this.maxPriceValueKey] = max;

      this.checkIfEmptyAndSent(
        this.value[this.minPriceValueKey],
        this.minPriceValueKey,
      );
      this.checkIfEmptyAndSent(
        this.value[this.maxPriceValueKey],
        this.maxPriceValueKey,
      );
    },
    sentCheckbox(selectedCheckbox) {
      let [value, checkboxValueKey] = this.filterValueAndKey(
        this.checkboxValueKey,
      );

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

      this.checkIfEmptyAndSent(
        value[checkboxValueKey].length,
        checkboxValueKey,
      );
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
