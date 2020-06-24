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
      <!-- <filter-inputs
        :value="value"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxName="checkboxName"
        :checkboxOutputKey="checkboxOutputKey"
        :checkboxLabelKey="checkboxLabelKey"
        @checkboxChanged="checkboxChanged"
      ></filter-inputs> -->
      <div
        class="vue-filter__checkbox"
        v-for="checkbox in filter[filterOptionsKey]"
        :key="checkbox.id"
      >
        <input
          type="checkbox"
          class="vue-filter__checkbox-input"
          :id="`id_${_uid}${checkbox.id}`"
          @change="checkboxChange"
          :value="checkbox.id"
        />
        <label
          class="vue-filter__checkbox-label"
          :for="`id_${_uid}${checkbox.id}`"
        >
          {{ checkbox[checkboxLabelKey] }}
        </label>
      </div>
    </div>
  </div>
</template>
<script>
// import filterInputs from "./filterInputs";
export default {
  name: "vue-filter",
  props: {
    filters: {
      type: Array,
      default: () => [],
    },
    value: {
      type: Object,
      default: () => ({}),
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    methodType: {
      type: String,
      default: "m1",
    },
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
    checkboxName: {
      type: String,
      default: "checkbox",
    },
    checkboxLabelKey: {
      type: String,
      default: "title",
    },
    checkboxOutputKey: {
      type: String,
      default: "checkbox",
    },
  },
  components: {
    // filterInputs,
  },
  methods: {
    checkboxChanged(selectedCheckbox) {
      let value, checkboxOutputKey;
      value = this.value;
      checkboxOutputKey = this.checkboxOutputKey;

      // Check if there is a array in checkbox key if not asssign an new array.
      if (!value[checkboxOutputKey]) {
        value[checkboxOutputKey] = [];
      }
      // Check if this seleceted checkbox in array or not if not remove it.
      if (value[checkboxOutputKey].includes(selectedCheckbox)) {
        const index = value[checkboxOutputKey].indexOf(selectedCheckbox);
        value[checkboxOutputKey].splice(index, 1);
      } else {
        value[checkboxOutputKey].push(selectedCheckbox);
      }

      if (!value[checkboxOutputKey].length) {
        delete value[checkboxOutputKey];
      }

      this.$emit("test", this.value);
    },
    checkboxChange(event) {
      this.checkboxChanged(event.target.value);
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
