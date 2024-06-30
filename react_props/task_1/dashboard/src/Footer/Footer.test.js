// Import necessary modules
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Component', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBeTruthy();
  });

  it('should render at least the text "Copyright"', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toContain('Copyright');
  });
});
