// * Base
import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';

// * Components
import Element from './Components/Element/Element';
import App from './App';

// * Lazy components
const Main = lazy(() => import('./pages/Main'));
const Form = lazy(() => import('./pages/Form'));
const Delivery = lazy(() => import('./pages/Delivery'));

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Main />} />,
      },
      {
        path: '/form',
        element: <Element component={<Form />} />,
      },
      {
        path: '/delivery',
        element: <Element component={<Delivery />} />,
      },
      {
        path: '*',
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

export default routes;
