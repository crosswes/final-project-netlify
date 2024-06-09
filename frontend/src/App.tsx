// * Base
import { coffeeContext } from './helpers/coffeeContext';
import { cartContext } from './helpers/cartContext';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';

// * Components
import Header from './Components/Header/Header';

function App() {
  const [quantity, setQuantity] = useState(1);
  const [cartQuantity, setCartQuantity] = useState(0);
  //
  const [coffeeName, setCoffeeName] = useState('');
  const [coffeeNameContext, setCoffeeNameContext] = useState('initial value');

  return (
    <>
      <cartContext.Provider
        value={{ quantity, setQuantity, cartQuantity, setCartQuantity }}
      >
        <coffeeContext.Provider
          value={{
            coffeeName,
            setCoffeeName,
            coffeeNameContext,
            setCoffeeNameContext,
          }}
        >
          <Header />
          <Outlet />
        </coffeeContext.Provider>
      </cartContext.Provider>
    </>
  );
}

export default App;
