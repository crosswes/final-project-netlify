import { createContext } from 'react';

export const coffeeContext = createContext({
  coffeeNameContext: '',
  setCoffeeNameContext: () => {},
});
