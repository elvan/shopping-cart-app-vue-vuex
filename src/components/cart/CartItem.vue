<template>
  <li>
    <div>
      <img :src="image" :alt="title" />
    </div>
    <div>
      <h3>{{ title }}</h3>
      <div class="item__data">
        <div>
          Price per Item:
          <strong>${{ price }}</strong>
        </div>
        <div>
          Quantity:
          <strong>{{ qty }}</strong>
        </div>
      </div>
      <div class="item__total">Total: ${{ itemTotal }}</div>
      <button @click="remove">Remove</button>
    </div>
  </li>
</template>

<script>
export default {
  props: ['prodId', 'title', 'image', 'price', 'qty'],
  computed: {
    itemTotal() {
      return (this.price * this.qty).toFixed(2);
    },
  },
  methods: {
    remove() {
      this.$store.dispatch('cart/removeFromCart', { productId: this.prodId });
    },
  },
};
</script>

<style scoped>
li {
  max-width: 25rem;
  margin: 1rem auto;
  padding: 1rem;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

img {
  object-fit: cover;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
}

.item__data {
  display: flex;
  justify-content: space-between;
}

.item__total {
  width: auto;
  margin: 1rem 0;
  padding: 0.25rem 0;
  border-top: 1px solid #474747;
  border-bottom: 2px solid #474747;
  font-weight: bold;
}

button {
  padding: 0.5rem 1.5rem;
  border: 1px solid #8f0030;
  border-radius: 30px;
  color: white;
  font: inherit;
  cursor: pointer;
  background-color: #8f0030;
}

button:hover,
button:active {
  border-color: #53001c;
  background-color: #53001c;
}
</style>
