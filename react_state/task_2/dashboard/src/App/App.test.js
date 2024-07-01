import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App component', () => {
  it('logIn function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    expect(wrapper.state().user).toEqual({ email: 'test@test.com', password: 'password', isLoggedIn: true });
  });

  it('logOut function updates the state correctly', () => {
    const wrapper = shallow(<App />);
    wrapper.instance().logIn('test@test.com', 'password');
    wrapper.instance().logOut();
    expect(wrapper.state().user).toEqual({ email: '', password: '', isLoggedIn: false });
  });
});
