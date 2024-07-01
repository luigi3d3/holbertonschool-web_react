import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppContext, user as defaultUser } from '../App/AppContext';

describe('Header component', () => {
  it('does not render logoutSection when not logged in', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(0);
  });

  it('renders logoutSection when logged in', () => {
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut: jest.fn() }}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find('#logoutSection').length).toBe(1);
  });

  it('calls logOut function on click', () => {
    const logOut = jest.fn();
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user, logOut }}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find('#logoutSection a').simulate('click');
    expect(logOut).toHaveBeenCalled();
  });
});
