import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/css/index.css';
import App from './App';

import { store } from './store';

export const Root = () =>
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>;

ReactDOM.render(<Root />, document.getElementById('root'));
