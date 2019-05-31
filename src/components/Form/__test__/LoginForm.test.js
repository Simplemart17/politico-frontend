import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import LoginForm from '../LoginForm';

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

test('<Login /> component', () => {
  const LoginPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(LoginPage).toBeTruthy();
  expect(LoginPage.getByText('Sign In').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
});

test('renders the Header tag', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(getByText('Enter Your Login Details').tagName).toBe('DIV');
});

test('renders the Component', () => {
  const LoginPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <LoginForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(LoginPage).toMatchSnapshot();
});
