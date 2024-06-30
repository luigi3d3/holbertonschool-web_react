import React from 'react';
import NotificationItem from './NotificationItem';

function Notifications({ displayDrawer }) {
  return (
    <div>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && (
        <div className="Notifications">
          <NotificationItem type="default" value="New course available" />
          <NotificationItem type="urgent" value="New resume available" />
          <NotificationItem type="default" value="New data available" />
        </div>
      )}
    </div>
  );
}

Notifications.defaultProps = {
  displayDrawer: false,
};

export default Notifications;
