import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

describe('Login component', () => {
  it('submit button is disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });

  it('submit button is enabled after changing the value of the two inputs', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(false);
  });

  it('submit button is disabled if one input is empty', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input#email').simulate('change', { target: { value: '' } });
    wrapper.find('input#password').simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);

    wrapper.find('input#email').simulate('change', { target: { value: 'test@test.com' } });
    wrapper.find('input#password').simulate('change', { target: { value: '' } });
    expect(wrapper.find('input[type="submit"]').prop('disabled')).toBe(true);
  });
});
