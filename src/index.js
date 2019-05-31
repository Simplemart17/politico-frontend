import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './state/store';
import App from './pages/App';
import './assets/css/index.css';
import { USER_TOKEN } from './utils/usersToken';
import { decodeToken } from './utils/auth';
import { signInSuccess } from './state/authentication/actions';

if (USER_TOKEN) {
  const decode = decodeToken(USER_TOKEN);
  store.dispatch(signInSuccess(decode));
}

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, 
  document.getElementById('root')
);
