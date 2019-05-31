import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import { render, cleanup } from 'react-testing-library';
import RegisterForm from '../RegisterForm';

const mockStore = reduxStore();

const store = mockStore({
  auth: {
    signin: {}
  }
});

const props = {
  auth: {
    registering: true,
  },
};

afterEach(cleanup);

test('<Login /> component', () => {
  const RegisterPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(RegisterPage).toBeTruthy();
  expect(RegisterPage.getByText('Submit').tagName).toBe('BUTTON');
  expect(RegisterPage.getByText('Reset').tagName).toBe('BUTTON');
});

test('renders the Form', () => {
  const { getByPlaceholderText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(getByPlaceholderText('First Name')).toBeTruthy();
  expect(getByPlaceholderText('Last Name')).toBeTruthy();
  expect(getByPlaceholderText('Email Address')).toBeTruthy();
  expect(getByPlaceholderText('Password')).toBeTruthy();
  expect(getByPlaceholderText('Confirm Password')).toBeTruthy();
});

test('renders the Header tag', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(getByText('Register Here').tagName).toBe('H1');
});

test('renders the Component', () => {
  const RegisterPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <RegisterForm {...props } />
      </BrowserRouter>
    </Provider>
  );
  expect(RegisterPage).toMatchSnapshot();
});
