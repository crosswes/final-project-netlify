import { createContext } from 'react';

export const cartContext = createContext({
  quantity: 1,
  setQuantity: () => {},
  cartQuantity: 0,
  setCartQuantity: () => {},
  coffeeName: '',
  setCoffeeName: () => {},
  coffeeImage: '',
  setCoffeeImage: () => {},
  cartItems: [],
  setCartItems: () => {},
  addCoffeeToCart: () => {},
  updateCartItemQuantity: () => {},
  removeCoffeeFromCart: () => {},
  price: 9.9,
  setPrice: () => {},
});

// ! delete unnecessary code
// ! delete unnecessary code
// ! delete unnecessary code
// ! delete unnecessary code
// ! delete unnecessary code
