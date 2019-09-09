import React from 'react';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';
import {
  render, cleanup, fireEvent, getByTestId
} from 'react-testing-library';
import LoginForm from '../LoginForm';

const mockStore = reduxStore();

const store = mockStore({
  auth: {
    signin: {}
  }
});

const props = {
  auth: { signin: {} },
};

afterEach(cleanup);

describe('LOGIN', () => {
  test('<Login /> component', () => {
    const LoginPage = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    expect(LoginPage).toBeTruthy();
    expect(LoginPage.getByText('Sign In').tagName).toBe('BUTTON');
    expect(LoginPage).toMatchSnapshot();
  });

  test('renders the Form', () => {
    const { getByPlaceholderText, getByText } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );

    expect(getByPlaceholderText('Email Address')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByText('Enter Your Login Details').tagName).toBe('DIV');
  });

  test('fill login form', () => {
    const { container } = render(
      <Provider store={store}>
        <BrowserRouter>
          <LoginForm />
        </BrowserRouter>
      </Provider>
    );
    const loginForm = getByTestId(container, 'login-form');
    const emailInput = getByTestId(container, 'email-input');
    const passwordInput = getByTestId(container, 'password-input');
    const submitBtn = getByTestId(container, 'submit-btn');
    const newEmail = 'test@email.com';
    const newPassword = 'password';

    fireEvent.change(emailInput, { target: { value: newEmail } });
    fireEvent.change(passwordInput, { target: { value: newPassword } });
    fireEvent.click(submitBtn);

    expect(loginForm.textContent).toEqual('Sign In');
  });
});
