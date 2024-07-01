import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.exists()).toBe(true);
  });

  it('calls markNotificationAsRead on notification click', () => {
    const markNotificationAsRead = jest.fn();
    const listNotifications = [{ id: 1, value: 'New course available', type: 'default' }];
    const wrapper = shallow(
      <Notifications
        displayDrawer={true}
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />
    );
    wrapper.find('NotificationItem').simulate('markAsRead', { id: 1 });
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
  });
});
