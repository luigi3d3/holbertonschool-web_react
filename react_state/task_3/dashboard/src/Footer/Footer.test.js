import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';
import { AppContext, user as defaultUser } from '../App/AppContext';

describe('Footer component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.exists()).toBe(true);
  });

  it('does not display the contact link when user is logged out', () => {
    const wrapper = shallow(
      <AppContext.Provider value={{ user: defaultUser }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(0);
  });

  it('displays the contact link when user is logged in', () => {
    const user = { email: 'test@test.com', password: 'password', isLoggedIn: true };
    const wrapper = shallow(
      <AppContext.Provider value={{ user }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').length).toBe(1);
  });
});
