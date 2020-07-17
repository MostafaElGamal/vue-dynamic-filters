# vue-dynamic-filters

[![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-dynamic-filters)](https://www.npmjs.com/package/vue-dynamic-filters)

[DEMO](https://mostafaelgamal.github.io/vue-dynamics-filters/)

[Github](https://github.com/MostafaElGamal/vue-dynamic-filters)

#### :rocket:

Making dynamic filters was never this easy now with this package you can make filters like amazon,souq,etc... just like that :clap:!

## Installing

This package is availabel on npm.

Using npm:

```bash
npm i vue-dynamic-filters
```

if you want to use it globale
main.js

```js
import Vue from "vue";
import vueDynamicFilters from "vue-dynamic-filters";

Vue.component("vueDynamicFilters", vueDynamicFilters);
```

## Usage

vue-dynamic-filters can be used in two methods, the first method is to give `vue-dynamic-filters` all the filters like the first method.

### First Method

you don't have to worry about looping throw the filters `vue-dynamic-filters` will do all the work for you and the output value will also handle that for you, you can see the first example code right here -> [First Method Code](https://github.com/MostafaElGamal/vue-dynamics-filters/blob/master/src/Demo/firstExample.vue) the the products data is just for testing purposes.

```js
<template>
  <div>
    <vue-dynamic-filters
      :filters="filters"
      :displayType="false"
      checkboxValue="id"
      selectValue="id"
      v-model="filterValues"
    ></vue-dynamic-filters>
   </div>
</template>
import vueDynamicFilters from "vue-dynamic-filters";
<script>
  export default{
    components: {
    vueDynamicFilters,
    },
    data(){
      return{
        filterValues:{},
        filters:[
            {
              title: "Search",
              filter_type: "text",
            },
            {
              title: "Price",
              filter_type: "price",
              min: "0.000000",
              max: "9000.000000",
            },
            {
              title: "Brand",
              filter_type: "checkbox",
              options: [
                {
                  id: 2,
                  title: "Nokia",
                },
                {
                  id: 4,
                  title: "Iphone",
                },
              ],
            },
        ]
      }
    }
  }
  </script>
```

### Second Method

The second method lets you control in every input, the `vue-dynamic-filters` will handle to put all values in one property in this example is `filterValues` and also you can control of the output keys on every input, you can also check the second method example [Second Method Code](https://github.com/MostafaElGamal/vue-dynamics-filters/blob/master/src/Demo/secondExample.vue)

```js
<template>
  <div class="filters">
    <div v-for="filter in filters" :key="filter.id">
      <vue-dynamic-filters
        selectValue="id"
        checkboxValue="id"
        methodType="m2"
        :displayType="filter.display_type ? true : false"
        :filter="filter"
        :singleFilterValue="filterValues"
        :searchValueKey="filter.searchKey"
        :selectValueKey="filter.categoryKey"
        :checkboxValueKey="filter.checkboxKey"
        @methodTwoValueChaned="changeValue"
      ></vue-dynamic-filters>
    </div>
  </div>
</template>
<script>
import vueDynamicFilters from "vue-dynamic-filters";
export default{
  components: {
    vueDynamicFilters,
  },
  data() {
    return {
      filterValues: {
        textKey:'acc'
      },
      filters: [
        {
          title: "Search",
          filter_type: "text",
          searchKey: "textKey",
          display_type: 0,
        },
        {
          title: "Category",
          filter_type: "select",
          display_type: 0,
          categoryKey: "categoryKey",
          options: [
            {
              id: 2,
              title: "Mobiles",
            },
            {
              id: 3,
              title: "Cars",
            },
          ],
        },
        {
          title: "Brand",
          filter_type: "checkbox",
          checkboxKey: "checkboxKey",
          display_type: 1,
          options: [
            {
              id: 2,
              title: "Redmi",
            },
            {
              id: 4,
              title: "Iphone",
            },
          ],
        },
      ],
    };
  },
  methods: {
    changeValue(value) {
      this.filterValues = value;
    },
  },
}
</script>
```

as you can see in this example you can loop throw the `vue-dynamic-filters` and also you can control the output object key on every input if the filters are coming from some sort of API or something like that.

## Options

#### filters

That the array that includes the inputs like the first examples above, only used by default for the first method.

_Default:_ `[]`

#### filter

That the object that includes the input like the second examples above, only used by default for the second method.

_Default:_ `{}`

#### methodType

This property lets the `vue-dynamic-filters` know that you will work on the second method of the package and the developer will loop throw the component and use the `@methodTwoValueChaned` event and by default use the first method.

_Default:_ `m1`

#### singleFilterValue

This is property only use for method `m2` only this property you can update and add like `v-model` but only used for `m2` check the second example for more clarification.

_Default:_ `{}`

#### filterTitleKey

filter title key used for the text in the collapse button for example `search`, `category`, etc..., you specify the key that inside the `filters` array or the `filter` object by default is a title.

_Default:_ `title`

#### filterTypeKey

This allows you to control the key that checks for the object that inside `filters` array or `filter` object that responsible for check filter type object for example `filter_type: 'select'`, you can check the examples above for more clarification.

_Default:_ `filter_type`

#### filterOptionsKey

This property only used for the `select` input and `checkbox` input that the key `vue-dynamic-filters` will loop in to display the values that inside the option value and by default `options`

_Default:_ `options`

#### displayType

This property allows you to control the filter is collapsed or open, you can check the second example for more clarification.

_Default:_ `true`

#### checkboxCheckName

This property allows you to control the validation on the `checkbox` name and this value operates with `filterTypeKey` property, in other words, is used for validation to check if the `filterTypeKey == checkboxCheckName` if true will display the filter.

_Default:_ `checkbox`

#### checkboxLabelKey

This property is the key for the title of the checkbox object and this `checkboxLabelKey` will be in the label of the input key.

_Default:_ `title`

#### checkboxValueKey

This property is to let you control the name of the returned key to the selected values.

_Default:_ `checkbox`

#### checkboxValue

This property is let you control checkbox value, for example, you want the `id` to return so you will pass this property and in `checkboxValueKey` will return the `id` check example two for more clarification and by default `vue-dynamic-filters` return the full object, the `checkboxValue` act like this `checkbox[checkboxValue]` .

_Default:_ `` `an empty string that means you want to return the full object not key inside of it`

#### selectCheckName

This property allows you to control the validation on the `select` name and this value operates with `filterTypeKey` property, in other words, is used for validation to check if the `filterTypeKey == selectCheckName` if true will display the filter.

_Default:_ `select`

#### selectValueKey

This property is to let you control the name of the returned key to the selected values.

_Default:_ `select`

#### selectDisplayNameKey

This property is the key to the title of the select option that will display in the select filter.

_Default:_ `title`

#### selectValue

This property is let you control select value, for example, you want the `id` to return so you will pass this property and in `selectValue` will return the `id` check example two for more clarification and by default `vue-dynamic-filters` return the full object, the `selectValue` act like this `select[selectValue]` .

_Default:_ `` `an empty string that means you want to return the full object not key inside of it`

#### searchCheckName

This property allows you to control the validation on the `search` name and this value operates with `filterTypeKey` property, in other words, is used for validation to check if the `filterTypeKey == searchCheckName` if true will display the filter.

_Default:_ `text`

#### searchValueKey

This property is to let you control the name of the returned key to the selected values.

_Default:_ `search`

#### searchButtonName

This property is simply the text inside the button.

_Default:_ `Search`

#### priceCheckName

This property allows you to control the validation on the `price` name and this value operates with `filterTypeKey` property, in other words, is used for validation to check if the `filterTypeKey == priceCheckName` if true will display the filter.

_Default:_ `price`

#### minLabel

This property is simply the text inside the key for the title of the price object and this `minLabel` will be in the label of the input.

_Default:_ `min`

#### maxLabel

This property is simply the text inside the key for the title of the price object and this `maxLabel` will be in the label of the input.

_Default:_ `max`

#### minPriceValueKey

This property is to let you control the name of the returned key to the selected values.

_Default:_ `min`

#### maxPriceValueKey

This property is to let you control the name of the returned key to the selected values.

_Default:_ `max`

#### pricebuttonName

This property is simply the text inside the button.

_Default:_ `Search`

#### vueFilterClassMethodOne

This property is a class that holds filters.

_Default:_ `vue-filter__method-one`

#### vueFilterClassMethodTwo

This property is a class that holds every filters.

_Default:_ `vue-filter__method-two`

#### filterHolderClass

This property is a class that holds only one filter.

_Default:_ `vue-filter__filter-holder`

#### filterInputHolderClass

This property is a class that holds only one input.

_Default:_ `vue-filter__input-holder`

#### checkboxHolderClass

This property is a class for the holder of all the checkboxes.

_Default:_ `vue-filter__checkboxes-holder`

#### checkboxClass

This property is a class that holds input and the label of the every checkbox.

_Default:_ `vue-filter__checkbox`

#### checkboxLabelClass

This property is a class for checkbox label.

_Default:_ `vue-filter__checkbox-label`

#### checkboxInputClass

This property is a class for checkbox input.

_Default:_ `vue-filter__checkbox-input`

#### searchInputClass

This property is a class for the search input.

_Default:_ `vue-filter__search`

#### searchFormClass

This property is a class for the search form.

_Default:_ `vue-filter__search-form`

#### searchBtnClass

This property is a class for the search button.

_Default:_ `vue-filter__search-btn`

#### selectClass

This property is a class for the select input.

_Default:_ `vue-filter__select`

#### priceFormClass

This property is a class for the search form.

_Default:_ `vue-filter__price-form`

#### minHolderClass

This property is a class for the holder min price label and the input.

_Default:_ `vue-filter__min-holder`

#### maxHolderClass

This property is a class for the holder max price label and the input.

_Default:_ `vue-filter__max-holder`

#### priceLabelClass

This property is a class for price label.

_Default:_ `vue-filter__price-label`

#### priceInputClass

This property is a class for price input `min` & `max`.

_Default:_ `vue-filter__price-input`

#### priceBtnClass

This property is a class for price button.

_Default:_ `vue-filter__price-btn`
