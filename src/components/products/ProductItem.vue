<template>
  <li class="product">
    <div class="product__data">
      <div class="product__image">
        <img :src="image" :alt="title" />
      </div>
      <div class="product__text">
        <h3>{{ title }}</h3>
        <base-badge mode="highlight" :no-margin-left="true">
          <h4>${{ price }}</h4>
        </base-badge>
        <p>{{ description }}</p>
      </div>
    </div>
    <div class="product__actions">
      <button @click="addToCart">Add to Cart</button>
    </div>
  </li>
</template>

<script>
export default {
  inject: ['addProductToCart'],
  props: ['id', 'image', 'title', 'price', 'description'],
  methods: {
    addToCart() {
      this.addProductToCart({
        id: this.id,
        image: this.image,
        title: this.title,
        price: this.price,
      });
    },
  },
};
</script>

<style scoped>
li {
  margin: 1.5rem auto;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

.product__data {
  display: flex;
}

.product__image {
  margin-right: 1rem;
}

.product__image img {
  object-fit: cover;
  width: 10rem;
  height: 10rem;
}

.product__text h3 {
  margin: 0 0 0.5rem 0;
}

.product__text h4 {
  margin: 0;
}

.product__actions {
  text-align: center;
}

button {
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  border-radius: 30px;
  color: white;
  font: inherit;
  cursor: pointer;
  background-color: #45006d;
}

button:hover,
button:active {
  border-color: #760ab4;
  background-color: #760ab4;
}
</style>
