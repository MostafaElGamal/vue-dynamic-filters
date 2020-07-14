<template>
  <div id="app">
    <div class="demo">
      <div class="filters">
        Filter One :{{ filterOneValues }}
        <vue-dynamic-filters
          :filters="filters"
          :displayType="false"
          checkboxValue="id"
          selectValue="id"
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
      <div class="products" v-if="filteredProducts.length">
        <product-card
          :product="product"
          v-for="product in filteredProducts"
          :key="product.id"
        ></product-card>
      </div>
      <div class="products" v-else>
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
      const newArr = this.products.filter((ele) => {
        if (
          ele.title.indexOf(value.search) >= 0 ||
          value.min <= ele.price ||
          value.max >= ele.price ||
          ele.category_id == value.select ||
          ele.options.includes(value.checkbox ? value.checkbox[0] : 0)
        ) {
          return true;
        }
        return false;
      });
      this.filteredProducts = newArr;
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
