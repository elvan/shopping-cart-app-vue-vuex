import { createStore } from 'vuex';
import cartModule from './modules/cart.js';
import productsModule from './modules/products.js';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule,
  },
});

export default store;
