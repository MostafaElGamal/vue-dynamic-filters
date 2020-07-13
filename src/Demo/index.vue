<template>
  <div id="app">
    <div class="demo">
      <div class="filters">
        Filter One :{{ filterOneValues }}
        <vue-dynamic-filters
          :filters="filters"
          :displayType="false"
          checkboxValue="id"
          v-model="filterOneValues"
          @change="test"
        ></vue-dynamic-filters>
        <hr />

        Filter Two {{ filterTwoValues }}
        <div v-for="filter in filters" :key="filter.id">
          <vue-dynamic-filters
            selectValue="id"
            checkboxValue="id"
            methodType="m2"
            :displayType="false"
            :filter="filter"
            :singleFilterValue="filterTwoValues"
            @methodTwoValueChaned="changeValue"
          ></vue-dynamic-filters>
        </div>
      </div>
      <div class="products">
        <product-card
          :product="product"
          v-for="product in products"
          :key="product.id"
        ></product-card>
      </div>
    </div>
  </div>
</template>

<script>
import vueDynamicFilters from "../vue-dynamic-filters";
import filters from "./filters";
import products from "./products";
import productCard from "./productCard";
export default {
  name: "demo",
  components: {
    vueDynamicFilters,
    productCard,
  },
  data() {
    return {
      filters: filters,
      products: products,
      filterOneValues: {},
      filterTwoValues: {},
      filteredProducts: [],
    };
  },
  methods: {
    changeValue(value) {
      this.filterTwoValues = value;
    },
    test(value) {
      if (value.search) {
        const newArr = this.products.filter((ele) =>
          ele.title.indexOf(value.search) >= 0 ? true : false,
        );
        console.log(newArr);
      }
    },
  },
};
</script>
<style>
.filters {
  width: 17%;
}
.demo {
  display: flex;
}
.products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 4rem;
}
</style>
