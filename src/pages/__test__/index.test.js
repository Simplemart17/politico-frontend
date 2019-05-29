import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from 'react-testing-library';
import Index from '../Index';

afterEach(cleanup);

test('should renders <Index /> component', () => {
  const { getByText } = render(<BrowserRouter><Index /></BrowserRouter>);

  expect(getByText('Register').tagName).toBe('A');
  expect(getByText('Sign In').tagName).toBe('A');
  expect(getByText).toBeTruthy();
});

test(' should renders Index page snapshot', () => {
  const IndexPage = render(<BrowserRouter><Index /></BrowserRouter>);

  expect(IndexPage).toBeTruthy();
  expect(IndexPage).toMatchSnapshot();
});
