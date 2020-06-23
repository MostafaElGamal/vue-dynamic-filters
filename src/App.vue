<template>
  <div id="app">
    <h1>Vue Filter</h1>
    <vue-filter :filters="filters"></vue-filter>
  </div>
</template>

<script>
import vueFilter from "@/vue-filter";
import filters from "./filters";
export default {
  name: "App",
  components: {
    vueFilter,
  },
  data() {
    return {
      filters: filters,
    };
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
