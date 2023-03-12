<template>
  <the-header></the-header>
  <router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader,
  },
  data() {
    return {
      isLoggedIn: false,
      products: [
        {
          id: 'p1',
          image:
            'https://images.unsplash.com/photo-1524578271613-d550eacf6090?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Ym9vayUyMGNvbGxlY3Rpb258ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
          title: 'Book Collection',
          description:
            'A collection of must-read books. All-time classics included!',
          price: 99.99,
        },
        {
          id: 'p2',
          image:
            'https://images.pexels.com/photos/1687845/pexels-photo-1687845.jpeg?auto=compress&cs=tinysrgb&w=600',
          title: 'Mountain Tent',
          description: 'A tent for the ambitious outdoor tourist.',
          price: 129.99,
        },
        {
          id: 'p3',
          image:
            'https://images.pexels.com/photos/5852329/pexels-photo-5852329.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
          title: 'Food Box',
          description:
            'May be partially expired when it arrives but at least it is cheap!',
          price: 6.99,
        },
      ],
      cart: { items: [], total: 0, qty: 0 },
    };
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    addProductToCart(productData) {
      const productInCartIndex = this.cart.items.findIndex(
        (ci) => ci.productId === productData.id
      );

      if (productInCartIndex >= 0) {
        this.cart.items[productInCartIndex].qty++;
      } else {
        const newItem = {
          productId: productData.id,
          title: productData.title,
          image: productData.image,
          price: productData.price,
          qty: 1,
        };
        this.cart.items.push(newItem);
      }
      this.cart.qty++;
      this.cart.total += productData.price;
    },

    removeProductFromCart(prodId) {
      const productInCartIndex = this.cart.items.findIndex(
        (cartItem) => cartItem.productId === prodId
      );
      const prodData = this.cart.items[productInCartIndex];
      this.cart.items.splice(productInCartIndex, 1);
      this.cart.qty -= prodData.qty;
      this.cart.total -= prodData.price * prodData.qty;
    },
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
