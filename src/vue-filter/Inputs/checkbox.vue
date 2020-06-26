<template>
  <div class="vue-filter__checkboxs-holder">
    <div
      class="vue-filter__checkbox"
      v-for="checkbox in options"
      :key="checkbox.id"
    >
      <input
        v-if="checkboxValue"
        type="checkbox"
        class="vue-filter__checkbox-input"
        :id="`id_${_uid}${checkbox.id}`"
        :value="checkbox[checkboxValue]"
        @change="checkboxChange"
        :checked="
          filterValue[checkboxValueKey]
            ? filterValue[checkboxValueKey].includes(checkbox[checkboxValue])
            : false
        "
      />
      <input
        v-else
        type="checkbox"
        class="vue-filter__checkbox-input"
        :id="`id_${_uid}${checkbox.id}`"
        :value="checkbox"
        @change="checkboxChange"
        :checked="
          filterValue[checkboxValueKey]
            ? filterValue[checkboxValueKey].includes(checkbox)
            : false
        "
      />
      <label
        class="vue-filter__checkbox-label"
        :for="`id_${_uid}${checkbox.id}`"
      >
        {{ checkbox[checkboxLabelKey] }}
      </label>
    </div>
  </div>
</template>
<script>
export default {
  name: "check-boxs",
  props: {
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Array,
      default: () => [],
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

  methods: {
    checkboxChange(event) {
      this.$emit("checkboxChangeToFilterInputs", event.target._value);
    },
  },
};
</script>
