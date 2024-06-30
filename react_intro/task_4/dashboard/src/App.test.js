//import React from 'react';
//import { render } from '@testing-library/react';
//import '@testing-library/jest-dom'; // Ensure jest-dom is imported
//import App from './App';

//test('renders School dashboard title', () => {
  //const { getByText } = render(<App />);
  //const titleElement = getByText(/School dashboard/i);
  //expect(titleElement).toBeInTheDocument();
//});

import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App Component', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('renders a div with the class App-header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').exists()).toBe(true);
  });

  it('renders a div with the class App-body', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').exists()).toBe(true);
  });

  it('renders a div with the class App-footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').exists()).toBe(true);
  });
});

