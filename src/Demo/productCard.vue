<template>
  <div class="product-card">
    <img :src="product.image" alt="" />
    <p>
      {{ product.title }}
    </p>
  </div>
</template>
<script>
export default {
  name: "product-card",
  props: {
    product: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
<style scoped>
.product-card {
  width: 11rem;
}
</style>
