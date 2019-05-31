import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import Register from '../Register';

const mockStore = reduxStore();

const store = mockStore({
  auth: {
    signin: {}
  }
});

const props = {
  auth: {
    signin: {}
  }
};

afterEach(cleanup);

test('should renders <Login /> component', () => {
  const RegisterComponent = render(
    <Provider store={store}>
      <BrowserRouter>
        <Register { ...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(RegisterComponent).toBeTruthy();
});
