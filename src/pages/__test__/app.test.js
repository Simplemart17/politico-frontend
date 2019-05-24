import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { cleanup, render } from 'react-testing-library';
import Index from '../Index';

afterEach(cleanup);

test('renders <Index /> component', () => {
  const { getByText } = render(
      <BrowserRouter>
        <Index />
      </BrowserRouter>
  );
  expect(getByText('This is a Politico App.').tagName).toBe('H1');
});
