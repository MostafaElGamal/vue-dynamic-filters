<template>
  <div class="vue-filter__main-filter-holder">
    <div
      v-for="checkbox in options"
      :key="checkbox.id"
      class="vue-filter__input-holder"
    >
      <checkbox :checkbox="checkbox" @checkboxChanged="checkboxChange" />
    </div>
    <p>
      {{ filterValues.checkboxs }}
    </p>
  </div>
</template>
<script>
import checkbox from "./Inputs/checkbox";
export default {
  name: "vue-filter",

  props: {
    type: {
      type: String,
      default: () => "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    filterValues: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    checkbox,
  },
  methods: {
    updateFilrerValues() {
      this.$emit("updateFilrerValues", this.filterValues);
    },
    checkboxChange(value) {
      if (this.filterValues.checkboxs.includes(value)) {
        const index = this.filterValues.checkboxs.indexOf(value);
        this.filterValues.checkboxs.splice(index, 1);
      } else {
        this.filterValues.checkboxs.push(value);
      }
      this.updateFilrerValues();
    },
  },
};
</script>
