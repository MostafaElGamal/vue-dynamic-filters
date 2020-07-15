<template>
  <div id="app">
    <first-example></first-example>
    <hr />
    <second-example></second-example>
  </div>
</template>

<script>
import firstExample from "./firstExample";
import secondExample from "./secondExample";

export default {
  name: "demo",
  components: {
    firstExample,
    secondExample,
  },
};
</script>
<style>
.filters {
  width: 17%;
}
.demo {
  display: flex;
  margin-top: 1rem;
}
.products {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 4rem;
}
</style>
