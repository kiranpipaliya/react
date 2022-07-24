import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import ProductContentProvider from "./context/product-context"
import { configureStore } from './hook-store/product-store';
import './index.css';
import App from './App';

configureStore();

ReactDOM.render(
  // <ProductContentProvider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  // </ProductContentProvider>,
  document.getElementById('root')
);
