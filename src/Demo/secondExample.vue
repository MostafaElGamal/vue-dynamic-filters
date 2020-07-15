<template>
  <div>
    -> Filter Two {{ filterValues }}
    <div class="demo">
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
import products from "./products";
import productCard from "./productCard";

export default {
  name: "first-example",
  components: {
    vueDynamicFilters,
    productCard,
  },
  data() {
    return {
      products: products,
      filterValues: {
        textKey: "acc",
      },
      filteredProducts: [],
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
      this.changeMethod(value);
    },
    changeMethod(value) {
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
