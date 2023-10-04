import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './store';

const root = createRoot(document.getElementById('root'));

// if (root) {
//   console.log('Root Created');
// } else if (!root) {
//   console.log('Root Not Created')
// }

root.render(
  // <Provider store={store}>
    <App />
  /* </Provider> */
);
