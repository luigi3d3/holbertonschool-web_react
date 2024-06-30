import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders without crashing', () => {
    shallow(<Notifications />);
  });

  it('renders NotificationItem elements', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem)).toHaveLength(3);
  });

  it('renders the correct html in the first NotificationItem', () => {
    const wrapper = shallow(<Notifications />);
    const firstNotification = wrapper.find(NotificationItem).first();
    expect(firstNotification.html()).toContain('data-notification-type="default"');
    expect(firstNotification.text()).toEqual('New course available');
  });
});
