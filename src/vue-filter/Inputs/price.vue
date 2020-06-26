<template>
  <div class="vue-filter__price-holder">
    <form>
      <div class="vue-filter__min-holder">
        <label :for="`min_${_uid}`">
          {{ minLabel }}
        </label>
        <input
          type="number"
          :id="`min_${_uid}`"
          v-model="filterValue[minPriceValueKey]"
        />
      </div>
      <div class="vue-filter__max-holder">
        <label :for="`max_${_uid}`">
          {{ maxLabel }}
        </label>
        <input
          type="number"
          :id="`max_${_uid}`"
          v-model="filterValue[maxPriceValueKey]"
        />
      </div>
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
  },
};
</script>
