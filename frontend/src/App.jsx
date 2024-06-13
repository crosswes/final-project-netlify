// * Base
import { cartContext } from './cartContext';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// * Component
import Header from './Components/Header/Header';
import { set } from 'mongoose';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [coffeeName, setCoffeeName] = useState('');
  const [coffeeImage, setCoffeeImage] = useState({ src: '', alt: 'Coffe' });
  const [cartItems, setCartItems] = useState([]);

  // * Add coffee to cart
  const addCoffeeToCart = (coffee) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.name === coffee.name);
      if (existingItem) {
        return prevItems.map((item) =>
          item.name === coffee.name
            ? { ...item, quantity: item.quantity + coffee.quantity }
            : item
        );
      }
      return [...prevItems, coffee];
    });
  };

  // * Update cart item quantity
  const updateCartItemQuantity = (name) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.name === name ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
    setCartQuantity((prev) => prev + 1);
  };

  // * Remove coffee from cart
  const removeCoffeeFromCart = (name) => {
    setCartItems((prevItems) => {
      const coffee = prevItems.find((item) => item.name === name);
      if (coffee) {
        setCartQuantity((prev) => prev - coffee.quantity);
      }
      return prevItems.filter((item) => item.name !== name);
    });
  };

  return (
    <>
      <cartContext.Provider
        value={{
          quantity,
          setQuantity,
          cartQuantity,
          setCartQuantity,
          coffeeName,
          setCoffeeName,
          coffeeImage,
          setCoffeeImage,
          cartItems,
          setCartItems,
          addCoffeeToCart,
          updateCartItemQuantity,
          removeCoffeeFromCart,
        }}
      >
        <Header />
        <Outlet />
      </cartContext.Provider>
    </>
  );
}

export default App;
