<template>
  <div class="vue-filter__checkbox-holder">
    <input
      type="checkbox"
      class="form-check-input"
      @change="checkboxChange"
      :value="checkbox"
      :id="`checkbox_${checkbox.id}`"
    />
    <label class="form-check-label" :for="`checkbox_${checkbox.id}`">
      {{ checkbox.title }}
    </label>
  </div>
</template>
<script>
export default {
  name: "checkbox",
  data() {
    return {
      value: {},
    };
  },
  props: {
    checkbox: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    checkboxChange(event) {
      this.$emit("checkboxChanged", event.target._value);
    },
  },
};
</script>
