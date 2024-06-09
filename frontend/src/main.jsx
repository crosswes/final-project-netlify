// * Base
import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';
import './i18n.js';

// * Styles
import './styles/index.css';
import './styles/base.css';

// * Router
import router from './routes.jsx';

// * Render
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
