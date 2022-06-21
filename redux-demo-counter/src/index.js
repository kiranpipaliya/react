import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import storeCounter from './stor/index';

console.log(storeCounter);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={storeCounter}> <App /> </Provider>);
