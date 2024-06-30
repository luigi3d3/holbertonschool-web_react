import React from 'react';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  return (
    <div className="Notifications">
      <p>Here are the notifications</p>
      <ul>
        <NotificationItem type="default" value="New course available" />
        <NotificationItem type="urgent" value="New resume available" />
        <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />
      </ul>
    </div>
  );
};

export default Notifications;
