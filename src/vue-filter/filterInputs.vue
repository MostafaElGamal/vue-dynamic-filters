<template>
  <div class="vue-filter__input-holder">
    <check-box
      v-if="filterType == checkboxName"
      :options="options"
      :value="value"
      :checkboxName="checkboxName"
      :checkboxOutputKey="checkboxOutputKey"
      :checkboxLabelKey="checkboxLabelKey"
      @checkboxChanged="checkboxChanged"
    ></check-box>
  </div>
</template>
<script>
import checkBox from "./Inputs/checkbox";
export default {
  name: "filter-inputs",
  props: {
    value: {
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
    checkboxOutputKey: {
      type: String,
      default: "checkbox",
    },
    checkboxLabelKey: {
      type: String,
      default: "title",
    },
  },
  components: {
    checkBox,
  },

  methods: {
    checkboxChanged(value) {
      this.$emit("checkboxChanged", value);
    },
  },
};
</script>
