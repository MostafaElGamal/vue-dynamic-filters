<template>
  <div class="vue-filter__price-holder">
    <form v-on:submit.prevent="sentMinMax">
      <div class="vue-filter__min-holder">
        <label :for="`min_${_uid}`">
          {{ minLabel }}
        </label>
        <input
          type="number"
          name="min"
          :id="`min_${_uid}`"
          :value="filterValue[minPriceValueKey]"
        />
      </div>
      <div class="vue-filter__max-holder">
        <label :for="`max_${_uid}`">
          {{ maxLabel }}
        </label>
        <input
          type="number"
          name="max"
          :id="`max_${_uid}`"
          :value="filterValue[maxPriceValueKey]"
        />
      </div>
      <button type="submit">
        {{ buttonName }}
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "price",
  props: {
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    minLabel: {
      type: String,
      default: "min",
    },
    maxLabel: {
      type: String,
      default: "max",
    },
    minPriceValueKey: {
      type: String,
      default: "min",
    },
    maxPriceValueKey: {
      type: String,
      default: "max",
    },
    buttonName: {
      type: String,
      default: "Search",
    },
  },
  methods: {
    sentMinMax(event) {
      const min = event.target.min.value;
      const max = event.target.max.value;
      this.$emit("priceChangeToFilterInputs", { min, max });
    },
  },
};
</script>
