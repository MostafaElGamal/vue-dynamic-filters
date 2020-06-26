<template>
  <div class="vue-filter__input-holder">
    <check-box
      v-if="filterType == checkboxCheckName"
      :options="options"
      :filterValue="filterValue"
      :checkboxCheckName="checkboxCheckName"
      :checkboxValueKey="checkboxValueKey"
      :checkboxLabelKey="checkboxLabelKey"
      :checkboxValue="checkboxValue"
      @checkboxChangeToFilterInputs="checkboxChangedToIndex"
    />
    <custom-select
      v-if="filterType == selectCheckName"
      :options="options"
      :filterValue="filterValue"
      :selectValueKey="selectValueKey"
      :selectValue="selectValue"
      :selectDisplayNameKey="selectDisplayNameKey"
    />

    <search
      v-if="filterType == searchCheckName"
      :options="options"
      :filterValue="filterValue"
      :searchValueKey="searchValueKey"
    />
  </div>
</template>
<script>
import checkBox from "./Inputs/checkbox";
import customSelect from "./Inputs/customSelect";
import search from "./Inputs/search";
export default {
  name: "filter-inputs",
  props: {
    // Data Api's
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    filterType: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
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
    // Selecte Api's
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
  },
  components: {
    checkBox,
    customSelect,
    search,
  },

  methods: {
    checkboxChangedToIndex(value) {
      this.$emit("checkboxChangedToVueFilter", value);
    },
  },
};
</script>
