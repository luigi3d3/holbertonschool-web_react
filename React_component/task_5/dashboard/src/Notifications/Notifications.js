import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    // Only update if the length of listNotifications in nextProps is greater than current props
    return nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className="Notifications">
        {displayDrawer && (
          <div className="menuItem">
            Your notifications
          </div>
        )}
        <div className="Notifications">
          {listNotifications.length === 0 ? (
            <p>No new notification for now</p>
          ) : (
            <ul>
              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  type={notification.type}
                  html={notification.html}
                  value={notification.value}
                  markAsRead={() => console.log(`Notification ${notification.id} has been marked as read`)}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool.isRequired,
  listNotifications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    html: PropTypes.shape({
      __html: PropTypes.string,
    }),
    value: PropTypes.string.isRequired,
  })).isRequired,
};

export default Notifications;
