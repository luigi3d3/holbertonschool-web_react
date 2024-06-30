import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

describe('Notifications Component', () => {
  it('renders correctly if you pass an empty array or no listNotifications property', () => {
    let wrapper = shallow(<Notifications />);
    expect(wrapper.find(NotificationItem).length).toEqual(0);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');

    wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find(NotificationItem).length).toEqual(0);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
  });

  it('renders correctly with the right number of NotificationItem when you pass a list of notifications', () => {
    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
    ];
    const wrapper = shallow(<Notifications listNotifications={listNotifications} />);
    expect(wrapper.find(NotificationItem).length).toEqual(2);
  });

  it('displays No new notification for now when listNotifications is empty', () => {
    const wrapper = shallow(<Notifications listNotifications={[]} />);
    expect(wrapper.find('.Notifications p').text()).toEqual('No new notification for now');
    expect(wrapper.find('.Notifications p').length).toEqual(1);
  });
});
