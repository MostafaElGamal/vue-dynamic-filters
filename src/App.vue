<template>
  <div id="app">
    {{ test }}
    <vue-filter :filters="filters" @test="testMethod"></vue-filter>
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
      test: {},
    };
  },
  methods: {
    testMethod(value) {
      this.test = value;
    },
  },
};
</script>

<style scoped>
h1 {
  text-align: center;
}
</style>
