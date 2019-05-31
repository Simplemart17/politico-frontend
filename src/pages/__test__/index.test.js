import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import reduxStore from 'redux-mock-store';
import { cleanup, render } from 'react-testing-library';
import Index from '../Index';

const mockStore = reduxStore();

const store = mockStore({
  auth: {
    signin: {}
  }
});

afterEach(cleanup);

test('should renders <Index /> component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  );

  expect(getByText('Register').tagName).toBe('A');
  expect(getByText('Sign In').tagName).toBe('A');
  expect(getByText).toBeTruthy();
});

test(' should renders Index page snapshot', () => {
  const IndexPage = render(
    <Provider store={store}>
      <BrowserRouter>
        <Index />
      </BrowserRouter>
    </Provider>
  );

  expect(IndexPage).toBeTruthy();
  expect(IndexPage).toMatchSnapshot();
});
