import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './pages/App';

ReactDOM.render(
    <Provider>
      <App />
    </Provider>, 
  document.getElementById('root')
);
