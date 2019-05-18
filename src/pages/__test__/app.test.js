
import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

function setup() {
  const wrapper = shallow(<App />);
  return { wrapper };
}

describe('Welcome Message Test', () => {
  it('Should render message', () => {
    const { wrapper } = setup();
    expect(wrapper.find('h1').exists()).toBe(true);
  });
});
