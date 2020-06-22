<template>
  <div id="app">
    <vue-filter
      :filters="filters"
      :filterValues="filterValues"
      @update="update"
    ></vue-filter>
  </div>
</template>

<script>
import data from "./data";
import vueFilter from "@/components/vueFilter";
export default {
  name: "App",
  data() {
    return {
      filters: data.filters,
      filterValues: {},
    };
  },
  components: {
    vueFilter,
  },
  methods: {
    update(data) {
      this.filterValues = data;
    },
  },
};
</script>
<style scoped>
.vue-filter {
  border: solid 1px black;
  padding: 1rem 3rem;
}
</style>
