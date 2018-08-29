import React from 'react';
import { render } from 'react-dom';
import App from './app';
import { Provider } from 'react-redux';
import store from './store';

const rootEl = document.getElementById('root');

window.addEventListener('onbeforeunload', () => alert(124));

// store.subscribe(() => console.log(store.getState()));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
);
