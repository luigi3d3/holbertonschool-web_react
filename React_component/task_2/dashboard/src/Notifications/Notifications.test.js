import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('calls markAsRead with the right message', () => {
    console.log = jest.fn();

    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    instance.markAsRead(1);

    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    console.log.mockRestore();
  });
});
