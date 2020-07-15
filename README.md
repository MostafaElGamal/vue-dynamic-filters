# vue-dynamic-filters

[![Vue](https://img.shields.io/badge/Vue-2.x-brightgreen.svg)](https://vuejs.org/)
[![npm](https://img.shields.io/npm/v/vue-dynamic-filters)](https://www.npmjs.com/package/vue-dynamic-filters)

[DEMO](https://mostafaelgamal.github.io/vue-dynamics-filters/) [Github](https://github.com/MostafaElGamal/vue-dynamics-filters)

Making dynamic filters was never this easy!

This is for `vue 2.x`+

## Installing

This package is available on npm.

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

you don't have to worry about looping and the output value the first method of the `vue-dynamic-filters` will handel that for you, you can see the first example code right here [First Method Code](https://github.com/MostafaElGamal/vue-dynamics-filters/blob/master/src/Demo/firstExample.vue) the products data is just for testing purpsoes

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

Second method let's you control in every input the `vue-daynamic-filters` and still have the same result, when I say conrtrol of the output keys on every input, you can also check the second method example [Second Method Code](https://github.com/MostafaElGamal/vue-dynamics-filters/blob/master/src/Demo/secondExample.vue)

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

as you can see in this example you can loop throw the `vue-dynamic-filters` and also you can control the output object key on every input if the filters are coming from some sort of api or something like that.

## Options

#### filters

That the array that include the inputs like the first examples above, only used by default for the first method.

_Default:_ `[]`

#### filter

That the object that include the input like the second examples above, only used by default for the second method.

_Default:_ `{}`

#### methodType

This proprty let the `vue-dynamic-filters` know that will work on the second method and the dev will loop throw the component and use the `@methodTwoValueChaned` event and by default use the first method.

_Default:_ `m1`

#### singleFilterValue

This is proprty only use in method `m2` only this proprty you can update and add like `v-model` but only used for `m2`.

_Default:_ `{}`

#### filterTitleKey

filter title key used for the text in the button for example `search` , `category`, etc..., you specife the key that inside the `filters` array or the `filter` object by default is

_Default:_ `title`

#### filterTypeKey

This allows you to control the key that check for the key that inside `filters` array or `filter` object for example `filter_type:'select'`, you can check the two example for more clarification.

_Default:_ `filter_type`

#### filterOptionsKey

This proprty only used for the `select` input and `checkbox` input that the key `vue-dynamic-filters` will loop in to display the values and by defalut `options`

_Default:_ `options`

#### displayType

This prorpty allow to control the if the filter is collapse or open, you can check the second example for more clarification.

_Default:_ `true`

#### checkboxCheckName

This proprty allows you to controll the validation on the `checkbox` name and this value oprate with `filterTypeKey` proprty, on other words you it is used for validation to check if the `filterTypeKey == checkboxCheckName` if true will display the filter if not will not display it.

_Default:_ `checkbox`

#### checkboxLabelKey

This proprty is the key for title of the checkbox object and this `checkboxLabelKey` will be the in the label of the input key.

_Default:_ `title`

#### checkboxValueKey

This proprty is let you to control the name of the returnd key to the selected values.

_Default:_ `checkbox`

#### checkboxValue

This proprty is let you to control checkbox value, for example you want the `id` in to return so you will pass this proprty and in `checkboxValueKey` will return the `id` check example two for more clarification and by default `vue-dynamic-filters` return the object.

_Default:_ `` `empty string that mean you want to return the full object not key inside of it`

#### selectCheckName

This proprty allows you to controll the validation on the `select` name and this value oprate with `filterTypeKey` proprty, on other words you it is used for validation to check if the `filterTypeKey == selectCheckName` if true will display the filter if not will not display it.

_Default:_ `select`

#### selectValueKey

This proprty is let you to control the name of the returnd key to the selected values.

_Default:_ `select`

#### selectDisplayNameKey

This proprty is the key for title of the select option that will display in the select filter.

_Default:_ `title`

#### selectValue

This proprty is let you to control checkbox value, for example you want the `id` in to return so you will pass this proprty and in `selectValueKey` will return the `id` check example two for more clarification and by default `vue-dynamic-filters` return the object.

_Default:_ `` `empty string that mean you want to return the full object not key inside of it`

#### searchCheckName

This proprty allows you to controll the validation on the `select` name and this value oprate with `filterTypeKey` proprty, on other words you it is used for validation to check if the `filterTypeKey == searchCheckName` if true will display the filter if not will not display it.

_Default:_ `search`

#### searchValueKey

This proprty is let you to control the name of the returnd key to the selected values.

_Default:_ `select`

#### searchButtonName

This proprty is simply the text inside the button.

_Default:_ `Search`

#### priceCheckName

This proprty allows you to controll the validation on the `price` name and this value oprate with `filterTypeKey` proprty, on other words you it is used for validation to check if the `filterTypeKey == priceCheckName` if true will display the filter if not will not display it.

_Default:_ `price`

#### minLabel

This proprty is the key for title of the checkbox object and this `minLabel` will be the in the label of the input key.

_Default:_ `min`

#### maxLabel

This proprty is the key for title of the checkbox object and this `maxLabel` will be the in the label of the input key.

_Default:_ `max`

#### minPriceValueKey

This proprty is let you to control the name of the returnd key to the selected values.

_Default:_ `min`

#### maxPriceValueKey

This proprty is let you to control the name of the returnd key to the selected values.

_Default:_ `max`

#### pricebuttonName

This proprty is simply the text inside the button.

_Default:_ `Search`

#### vueFilterClassMethodOne

This proprty is a class that holds the all filters.

_Default:_ `vue-filter__method-one`

#### vueFilterClassMethodTwo

This proprty is a class that holds the all filters.

_Default:_ `vue-filter__method-two`

#### filterHolderClass

This proprty is a class that holds only one filter.

_Default:_ `vue-filter__filter-holder`

#### filterInputHolderClass

This proprty is a class that holds only one input.

_Default:_ `vue-filter__input-holder`

#### checkboxHolderClass

This proprty is a class that for holder of all the checkboxes.

_Default:_ `vue-filter__checkboxes-holder`

#### checkboxClass

This proprty is a class that for holdes input and the label.

_Default:_ `vue-filter__checkbox`

#### checkboxClass

This proprty is a class that for checkbox lable.

_Default:_ `vue-filter__checkbox-label`

#### checkboxInputClass

This proprty is a class that for checkbox input.

_Default:_ `vue-filter__checkbox-input`

#### searchInputClass

This proprty is a class that for the search input.

_Default:_ `vue-filter__search`

#### searchFormClass

This proprty is a class that for the search form.

_Default:_ `vue-filter__search-form`

#### searchBtnClass

This proprty is a class that for the search button.

_Default:_ `vue-filter__search-form`

#### selectClass

This proprty is a class that for the select input.

_Default:_ `vue-filter__select`

#### priceFormClass

This proprty is a class that for the search form.

_Default:_ `vue-filter__price-form`

#### minHolderClass

This proprty is a class that for the holder min price label and the input.

_Default:_ `vue-filter__min-holder`

#### maxHolderClass

This proprty is a class that for the holder max price label and the input.

_Default:_ `vue-filter__max-holder`

#### priceLabelClass

This proprty is a class that for price lable.

_Default:_ `vue-filter__price-label`

#### priceInputClass

This proprty is a class that for price input `min` & `max`.

_Default:_ `vue-filter__price-input`

#### priceBtnClass

This proprty is a class that for price button.

_Default:_ `vue-filter__price-btn`
