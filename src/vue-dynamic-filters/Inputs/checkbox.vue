<template>
  <div :class="`${checkboxHolderClass}`" v-if="checkboxValue">
    <div :class="`${checkboxClass}`" v-for="(checkbox, i) in options" :key="i">
      <input
        type="checkbox"
        :class="`${checkboxInputClass}`"
        :id="`id_${_uid}${i}`"
        :value="checkbox[checkboxValue]"
        @change="checkboxChange"
        :checked="
          filterValue[checkboxValueKey]
            ? filterValue[checkboxValueKey].includes(checkbox[checkboxValue])
            : false
        "
      />
      <label :class="`${checkboxLabelClass}`" :for="`id_${_uid}${i}`">
        {{ checkbox[checkboxLabelKey] }}
      </label>
    </div>
  </div>
  <div :class="`${checkboxHolderClass}`" v-else>
    <div :class="`${checkboxClass}`" v-for="(checkbox, i) in options" :key="i">
      <input
        type="checkbox"
        :class="`${checkboxInputClass}`"
        :id="`id_${_uid}${i}`"
        :value="checkbox"
        @change="checkboxChange"
        :checked="
          filterValue[checkboxValueKey]
            ? filterValue[checkboxValueKey].includes(checkbox)
            : false
        "
      />
      <label :class="`${checkboxLabelClass}`" :for="`id_${_uid}${i}`">
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
    // Checkbox Classes
    checkboxHolderClass: {
      type: String,
      default: "vue-filter__checkboxes-holder",
    },
    checkboxClass: {
      type: String,
      default: "vue-filter__checkbox",
    },
    checkboxLabelClass: {
      type: String,
      default: "vue-filter__checkbox-label",
    },
    checkboxInputClass: {
      type: String,
      default: "vue-filter__checkbox-input",
    },
  },

  methods: {
    checkboxChange(event) {
      this.$emit("checkboxChangeToFilterInputs", event.target._value);
    },
  },
};
</script>
