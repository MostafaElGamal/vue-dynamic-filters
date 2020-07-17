<template>
  <div :class="`${vueFilterClassMethodOne}`" v-if="methodType == 'm1'">
    <div
      :class="`${filterHolderClass}`"
      v-for="(filter, i) in filters"
      :key="i"
    >
      <button
        @click="toggleFilterMethodOne(i)"
        :class="`${filterCollapseBtnClass}`"
      >
        {{ filter[filterTitleKey] }}
      </button>

      <filter-inputs
        :class="{ show: displayType }"
        :id="`vue_filter_method_one_${i + 1}`"
        :filterValue="value"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxValue="checkboxValue"
        :checkboxValueKey="checkboxValueKey"
        :checkboxCheckName="checkboxCheckName"
        :checkboxLabelKey="checkboxLabelKey"
        :selectCheckName="selectCheckName"
        :selectValue="selectValue"
        :selectValueKey="selectValueKey"
        :selectDisplayNameKey="selectDisplayNameKey"
        :searchValueKey="searchValueKey"
        :searchCheckName="searchCheckName"
        :priceCheckName="priceCheckName"
        :minLabel="minLabel"
        :maxLabel="maxLabel"
        :maxPriceValueKey="maxPriceValueKey"
        :pricebuttonName="pricebuttonName"
        :filterInputHolderClass="filterInputHolderClass"
        :searchInputClass="searchInputClass"
        :searchButtonName="searchButtonName"
        :searchFormClass="searchFormClass"
        :searchBtnClass="searchBtnClass"
        :priceFormClass="priceFormClass"
        :minHolderClass="minHolderClass"
        :maxHolderClass="maxHolderClass"
        :priceLabelClass="priceLabelClass"
        :priceInputClass="priceInputClass"
        :priceBtnClass="priceBtnClass"
        :selectClass="selectClass"
        :checkboxHolderClass="checkboxHolderClass"
        :checkboxClass="checkboxClass"
        :checkboxLabelClass="checkboxLabelClass"
        :checkboxInputClass="checkboxInputClass"
        @checkboxChangedToVueFilter="sentCheckbox"
        @searchChangedToVueFilter="sentSearch"
        @priceChangedToVueFilter="sentPrice"
      ></filter-inputs>
    </div>
  </div>
  <div :class="`${vueFilterClassMethodTwo}`" v-else>
    <div :class="`${filterHolderClass}`">
      <button
        @click="toggleFilterMethodTwo"
        :class="`${filterCollapseBtnClass}`"
      >
        {{ filter[filterTitleKey] }}
      </button>
      <filter-inputs
        :class="{ show: displayType }"
        :id="`vue_filter_method_two_${_uid}`"
        :filterValue="singleFilterValue"
        :filterType="filter[filterTypeKey]"
        :options="filter[filterOptionsKey]"
        :checkboxValue="checkboxValue"
        :checkboxValueKey="checkboxValueKey"
        :checkboxCheckName="checkboxCheckName"
        :checkboxLabelKey="checkboxLabelKey"
        :selectCheckName="selectCheckName"
        :selectValue="selectValue"
        :selectValueKey="selectValueKey"
        :selectDisplayNameKey="selectDisplayNameKey"
        :searchValueKey="searchValueKey"
        :searchCheckName="searchCheckName"
        :priceCheckName="priceCheckName"
        :minLabel="minLabel"
        :maxLabel="maxLabel"
        :maxPriceValueKey="maxPriceValueKey"
        :pricebuttonName="pricebuttonName"
        :filterInputHolderClass="filterInputHolderClass"
        :searchInputClass="searchInputClass"
        :searchButtonName="searchButtonName"
        :searchFormClass="searchFormClass"
        :searchBtnClass="searchBtnClass"
        :priceFormClass="priceFormClass"
        :minHolderClass="minHolderClass"
        :maxHolderClass="maxHolderClass"
        :priceLabelClass="priceLabelClass"
        :priceInputClass="priceInputClass"
        :priceBtnClass="priceBtnClass"
        :selectClass="selectClass"
        :checkboxHolderClass="checkboxHolderClass"
        :checkboxClass="checkboxClass"
        :checkboxLabelClass="checkboxLabelClass"
        :checkboxInputClass="checkboxInputClass"
        @checkboxChangedToVueFilter="sentCheckbox"
        @searchChangedToVueFilter="sentSearch"
        @priceChangedToVueFilter="sentPrice"
        @selectChangedToVueFilter="sentSelect"
      ></filter-inputs>
    </div>
  </div>
</template>
<script>
import filterInputs from "./filterInputs.vue";
export default {
  name: "vue-filter",
  props: {
    // Data Api's
    filters: {
      type: Array,
      default: () => [],
    },
    filter: {
      type: Object,
      default: () => ({}),
    },
    value: {
      type: Object,
    },
    singleFilterValue: {
      type: Object,
      default: () => ({}),
    },
    // Methods Api's
    methodType: {
      type: String,
      default: "m1",
    },

    // Filter Api's
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
    displayType: {
      type: Boolean,
      default: true,
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

    // Select Api's
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
    searchButtonName: {
      type: String,
      default: "Search",
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
    // -------Main Classes
    vueFilterClassMethodOne: {
      type: String,
      default: "vue-filter__method-one",
    },
    vueFilterClassMethodTwo: {
      type: String,
      default: "vue-filter__method-two",
    },
    filterHolderClass: {
      type: String,
      default: "vue-filter__filter-holder",
    },
    filterCollapseBtnClass: {
      type: String,
      default: "vue-filter__filter-btn",
    },
    filterInputHolderClass: {
      type: String,
      default: "vue-filter__input-holder",
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

    // Search Classes
    searchInputClass: {
      type: String,
      default: "vue-filter__search",
    },

    searchFormClass: {
      type: String,
      default: "vue-filter__search-form",
    },
    searchBtnClass: {
      type: String,
      default: "vue-filter__search-btn",
    },

    // Select Classes
    selectClass: {
      type: String,
      default: "vue-filter__select",
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
  },
  components: {
    filterInputs,
  },
  computed: {
    checkFirstMethod() {
      return this.methodType == "m1";
    },
  },
  methods: {
    sentSearch(test) {
      let [value, searchValueKey] = this.filterValueAndKey(this.searchValueKey);
      value[searchValueKey] = test;
      this.checkIfEmptyAndSent(value[searchValueKey], searchValueKey);
    },
    sentPrice({ min, max }) {
      let maxPriceValueKey = this.maxPriceValueKey;
      let [value, minPriceValueKey] = this.filterValueAndKey(
        this.minPriceValueKey,
      );
      value[minPriceValueKey] = min;
      value[maxPriceValueKey] = max;

      this.checkIfEmptyAndSent(value[minPriceValueKey], minPriceValueKey);
      this.checkIfEmptyAndSent(value[maxPriceValueKey], maxPriceValueKey);
    },
    sentCheckbox(selectedCheckbox) {
      let [value, checkboxValueKey] = this.filterValueAndKey(
        this.checkboxValueKey,
      );

      // Check if there is a array in checkbox key if not asssign an new array.
      if (!value[checkboxValueKey]) {
        value[checkboxValueKey] = [];
      }
      // Check if this seleceted checkbox in array or not if not remove it.
      if (value[checkboxValueKey].includes(selectedCheckbox)) {
        const index = value[checkboxValueKey].indexOf(selectedCheckbox);
        value[checkboxValueKey].splice(index, 1);
      } else {
        value[checkboxValueKey].push(selectedCheckbox);
      }

      this.checkIfEmptyAndSent(
        value[checkboxValueKey].length,
        checkboxValueKey,
      );
    },
    sentSelect() {
      this.sentInput();
    },

    sentInput() {
      if (this.checkFirstMethod) {
        this.$emit("input", Object.assign({}, this.value));
      } else {
        this.$emit(
          "methodTwoValueChanged",
          Object.assign({}, this.singleFilterValue),
        );
      }
    },
    filterValueAndKey(valueKey) {
      if (this.checkFirstMethod) {
        return [this.value, valueKey];
      } else {
        return [this.singleFilterValue, valueKey];
      }
    },
    deleteEmptyFilter(filterCondition, valueKey) {
      let [value] = this.filterValueAndKey();

      if (!filterCondition) {
        delete value[valueKey];
      }
    },
    checkIfEmptyAndSent(condition, valueKey) {
      this.deleteEmptyFilter(condition, valueKey);
      this.sentInput();
    },

    toggleFilterMethodTwo() {
      var content = document.getElementById(
        `vue_filter_method_two_${this._uid}`,
      );
      content.classList.toggle("show");
    },
    toggleFilterMethodOne(index) {
      var content = document.getElementById(
        `vue_filter_method_one_${index + 1}`,
      );
      content.classList.toggle("show");
    },
  },
  watch: {
    value: {
      handler: function() {
        const [value] = this.filterValueAndKey();
        this.$emit("change", Object.assign({}, value));
      },
      deep: true,
    },
  },
};
</script>
<style>
.vue-filter__input-holder {
  height: 0;
  margin-bottom: 10px;
  overflow: hidden;
  padding: 0 10px;
  transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -ms-transition: all 0.3s;
  -o-transition: all 0.3s;
}
.show {
  height: auto;
  padding: 10px 10px;
}
.vue-filter__filter-btn {
  position: relative;
  cursor: pointer;
  text-transform: uppercase;
  color: #444;
  font-weight: 600;
  margin: 30px 0 0;
  width: 100%;
  background: transparent;
  border: 0;
}
.vue-filter__filter-btn:after {
  position: absolute;
  display: block;
  top: 0;
  right: -3px;
  content: "\f0d7";
  font-family: FontAwesome;
  color: #444;
  font-size: 17px;
}
</style>
