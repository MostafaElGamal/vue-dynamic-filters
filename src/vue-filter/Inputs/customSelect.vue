<template>
  <div class="vue-filter__select-holder">
    <select
      v-if="selectValue"
      class="vue-filter__select-input"
      v-model="filterValue[selectValueKey]"
    >
      <option
        v-for="(option, i) in options"
        :key="i"
        :value="option[selectValue]"
      >
        {{ option[selectDisplayNameKey] }}
      </option>
    </select>
    <select
      v-else
      class="vue-filter__select-input"
      v-model="filterValue[selectValueKey]"
    >
      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option[selectDisplayNameKey] }}
      </option>
    </select>
  </div>
</template>
<script>
export default {
  name: "custom-select",
  props: {
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Array,
      default: () => [],
    },
    selectDisplayNameKey: {
      type: String,
      default: "title",
    },
    selectValueKey: {
      type: String,
      default: "select",
    },
    selectValue: {
      type: String,
      default: "",
    },
  },
};
</script>
<style scoped>
.vue-filter__select-holder {
  display: flex;
  flex-direction: column;
}
</style>
