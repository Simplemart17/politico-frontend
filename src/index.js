import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './state/store';
import ReactDOM from 'react-dom';
import App from './pages/App';
import './assets/css/index.css';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root')
);
