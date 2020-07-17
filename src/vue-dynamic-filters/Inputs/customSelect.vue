<template>
  <select
    v-if="selectValue"
    :class="`${selectClass}`"
    v-model="filterValue[selectValueKey]"
    @change="selectChange"
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
    :class="`${selectClass}`"
    v-model="filterValue[selectValueKey]"
  >
    <option v-for="(option, i) in options" :key="i" :value="option">
      {{ option[selectDisplayNameKey] }}
    </option>
  </select>
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
    selectClass: {
      type: String,
      default: "vue-filter__select",
    },
  },
  methods: {
    selectChange() {
      this.$emit("selectChangeToFilterInputs");
    },
  },
};
</script>
<style scoped>
.vue-filter__select-holder {
  display: flex;
  flex-direction: column;
}
.vue-filter__select {
  width: 100%;
}
</style>
