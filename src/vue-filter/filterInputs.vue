<template>
  <div class="vue-filter__input-holder">
    <check-box
      v-if="filterType == checkboxName"
      :options="options"
      :filterValue="filterValue"
      :checkboxName="checkboxName"
      :checkboxValueKey="checkboxValueKey"
      :checkboxLabelKey="checkboxLabelKey"
      :checkboxValue="checkboxValue"
      @checkboxChangeToFilterInputs="checkboxChangedToIndex"
    ></check-box>
  </div>
</template>
<script>
import checkBox from "./Inputs/checkbox";
export default {
  name: "filter-inputs",
  props: {
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
    checkboxValue: {
      type: String,
      default: "",
    },
  },
  components: {
    checkBox,
  },

  methods: {
    checkboxChangedToIndex(value) {
      this.$emit("checkboxChangedToVueFilter", value);
    },
  },
};
</script>
