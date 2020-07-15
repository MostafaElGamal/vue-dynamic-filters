<template>
  <form v-on:submit.prevent="sentMinMax" :class="`${priceFormClass}`">
    <div :class="`${minHolderClass}`">
      <label :for="`min_${_uid}`" :class="`${priceLabelClass}`">
        {{ minLabel }}
      </label>
      <input
        :class="`${priceInputClass}`"
        type="number"
        name="min"
        :id="`min_${_uid}`"
        :value="filterValue[minPriceValueKey]"
      />
    </div>
    <div class="vue-filter__max-holder" :class="`${maxHolderClass}`">
      <label :for="`max_${_uid}`" :class="`${priceLabelClass}`">
        {{ maxLabel }}
      </label>
      <input
        :class="`${priceInputClass}`"
        type="number"
        name="max"
        :id="`max_${_uid}`"
        :value="filterValue[maxPriceValueKey]"
      />
    </div>
    <button type="submit" :class="`${priceBtnClass}`">
      {{ pricebuttonName }}
    </button>
  </form>
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
    pricebuttonName: {
      type: String,
      default: "Search",
    },
    priceFormClass: {
      type: String,
      default: "vue-filter__price-form",
    },
    minHolderClass: {
      type: String,
      default: "vue-filter__min-holder",
    },
    maxHolderClass: {
      type: String,
      default: "vue-filter__max-holder",
    },
    priceLabelClass: {
      type: String,
      default: "vue-filter__price-label",
    },
    priceInputClass: {
      type: String,
      default: "vue-filter__price-input",
    },
    priceBtnClass: {
      type: String,
      default: "vue-filter__price-btn",
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
<style>
.vue-filter__price-form {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.vue-filter__min-holder,
.vue-filter__max-holder {
  display: flex;
  flex-direction: column;
}
.vue-filter__price-btn {
  padding: 4px 32px;
  color: #fff;
  letter-spacing: 0.05em;
  border: 2px solid #fa1616;
  background-color: #fa1616;
  margin-top: 10px;
}
</style>
