<template>
  <header>
    <h1>
      <router-link to="/">VueShop</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Products</router-link>
        </li>
        <li>
          <router-link to="/cart">Cart</router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn" @click="login">Login</button>
      <button v-if="isLoggedIn" @click="logout">Logout</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5rem;
  margin: 0 10%;
  background-color: white;
}

ul {
  justify-self: center;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  margin: 0 1rem;
}

a {
  padding-bottom: 0.25rem;
  border-bottom: 2px solid transparent;
  color: #333;
  font-weight: bold;
  text-decoration: none;
}

a:hover,
a:active,
a.router-link-active {
  border-color: #45006d;
  color: #45006d;
}

button {
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  border-radius: 30px;
  color: #45006d;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
}

button:hover,
button:active {
  background-color: #f0d5ff;
}
</style>
