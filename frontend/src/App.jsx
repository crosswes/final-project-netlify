// * Base
import { cartContext } from './cartContext';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// * Component
import Header from './Components/Header/Header';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [coffeeName, setCoffeeName] = useState('');
  const [coffeeImage, setCoffeeImage] = useState({ src: '', alt: 'Coffe' });
  const [cartItems, setCartItems] = useState([]);
  const [price, setPrice] = useState(0);

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
  const updateCartItemQuantity = (name, newQuantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.name === name) {
          const quantityDifference = newQuantity - item.quantity;
          setCartQuantity((prev) => prev + quantityDifference);
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
    });
  };

  // // * Remove coffee from cart
  // const removeCoffeeFromCart = (name) => {
  //   setCartItems((prevItems) => {
  //     const coffee = prevItems.find((item) => item.name === name);
  //     if (coffee) {
  //       setCartQuantity((prev) => prev - coffee.quantity);
  //     }
  //     return prevItems.filter((item) => item.name !== name);
  //   });
  // };
  // * Remove coffee from cart
  const removeCoffeeFromCart = (name, quantityToRemove) => {
    setCartItems((prevItems) => {
      const item = prevItems.find((item) => item.name === name);
      if (!item) return prevItems; // item not found, return unchanged list

      if (item.quantity <= quantityToRemove) {
        // Remove item completely if quantity to remove is more or equal
        return prevItems.filter((item) => item.name !== name);
      } else {
        // Reduce item quantity
        return prevItems.map((item) =>
          item.name === name
            ? { ...item, quantity: item.quantity - quantityToRemove }
            : item
        );
      }
    });
    setCartQuantity((prev) => prev - quantityToRemove);
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
          price,
          setPrice,
        }}
      >
        <Header />
        <Outlet />
      </cartContext.Provider>
    </>
  );
}

export default App;
