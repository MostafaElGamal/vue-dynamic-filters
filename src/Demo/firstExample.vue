<template>
  <div>
    -> Filter One :{{ filterValues }}
    <div class="demo">
      <div class="filters">
        <vue-dynamic-filters
          :filters="filters"
          :displayType="false"
          checkboxValue="id"
          selectValue="id"
          v-model="filterValues"
          @change="changeMethod"
        ></vue-dynamic-filters>
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
      filterValues: {},
      filteredProducts: [],
      filters: [
        {
          title: "Search",
          filter_type: "text",
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
      ],
    };
  },
  methods: {
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
