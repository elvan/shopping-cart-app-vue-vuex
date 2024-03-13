<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :id="prod.id"
        :title="prod.title"
        :image="prod.image"
        :description="prod.description"
        :price="prod.price"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  computed: {
    products() {
      return this.$store.getters['prods/products'];
    },
  },
};
</script>

<style scoped>
ul {
  max-width: 40rem;
  margin: 2rem auto;
  padding: 0;
  list-style: none;
}
</style>
