<template>
  <div :class="`vue-filter__input-holder ${filterInputHolderClass} `">
    <check-box
      v-if="filterType == checkboxCheckName"
      :options="options"
      :filterValue="filterValue"
      :checkboxCheckName="checkboxCheckName"
      :checkboxValueKey="checkboxValueKey"
      :checkboxLabelKey="checkboxLabelKey"
      :checkboxValue="checkboxValue"
      :checkboxHolderClass="checkboxHolderClass"
      :checkboxClass="checkboxClass"
      :checkboxLabelClass="checkboxLabelClass"
      :checkboxInputClass="checkboxInputClass"
      @checkboxChangeToFilterInputs="checkboxChangedToIndex"
    />
    <custom-select
      v-if="filterType == selectCheckName"
      :options="options"
      :filterValue="filterValue"
      :selectValueKey="selectValueKey"
      :selectValue="selectValue"
      :selectClass="selectClass"
      :selectDisplayNameKey="selectDisplayNameKey"
    />
    <search
      v-if="filterType == searchCheckName"
      :options="options"
      :filterValue="filterValue"
      :searchValueKey="searchValueKey"
      :searchInputClass="searchInputClass"
      :searchButtonName="searchButtonName"
      :searchFormClass="searchFormClass"
      :searchBtnClass="searchBtnClass"
      @searchChangeToFilterInputs="searchChangedToIndex"
    />

    <price
      v-if="filterType == priceCheckName"
      :filterValue="filterValue"
      :minLabel="minLabel"
      :maxLabel="maxLabel"
      :minPriceValueKey="minPriceValueKey"
      :maxPriceValueKey="maxPriceValueKey"
      :pricebuttonName="pricebuttonName"
      :priceFormClass="priceFormClass"
      :minHolderClass="minHolderClass"
      :maxHolderClass="maxHolderClass"
      :priceLabelClass="priceLabelClass"
      :priceInputClass="priceInputClass"
      :priceBtnClass="priceBtnClass"
      @priceChangeToFilterInputs="priceChangedToIndex"
    />
  </div>
</template>
<script>
import checkBox from "./Inputs/checkbox.vue";
import customSelect from "./Inputs/customSelect.vue";
import search from "./Inputs/search.vue";
import price from "./Inputs/price.vue";
export default {
  name: "filter-inputs",
  props: {
    // Data Api's
    filterValue: {
      type: Object,
      default: () => ({}),
    },
    filterType: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
    // Checkbox Api's
    checkboxCheckName: {
      type: String,
      default: "checkbox",
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
    // Selecte Api's
    selectCheckName: {
      type: String,
      default: "select",
    },
    selectValueKey: {
      type: String,
      default: "select",
    },
    selectDisplayNameKey: {
      type: String,
      default: "title",
    },
    selectValue: {
      type: String,
      default: "",
    },
    // Search Api's
    searchCheckName: {
      type: String,
      default: "text",
    },
    searchValueKey: {
      type: String,
      default: "search",
    },

    // Price Api's
    priceCheckName: {
      type: String,
      default: "price",
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

    // Classes Api's
    filterInputHolderClass: {
      type: String,
      default: "vue-filter__input-holder",
    },
    // Search & Select Classes
    searchInputClass: {
      type: String,
      default: "vue-filter__search",
    },
    selectClass: {
      type: String,
      default: "vue-filter__select",
    },
    searchButtonName: {
      type: String,
      default: "Search",
    },
    searchFormClass: {
      type: String,
      default: "vue-filter__search-form",
    },
    searchBtnClass: {
      type: String,
      default: "vue-filter__search-btn",
    },

    // Price Classes
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
  components: {
    checkBox,
    customSelect,
    search,
    price,
  },

  methods: {
    checkboxChangedToIndex(value) {
      this.$emit("checkboxChangedToVueFilter", value);
    },
    searchChangedToIndex(value) {
      this.$emit("searchChangedToVueFilter", value);
    },
    priceChangedToIndex({ min, max }) {
      this.$emit("priceChangedToVueFilter", { min, max });
    },
  },
};
</script>
