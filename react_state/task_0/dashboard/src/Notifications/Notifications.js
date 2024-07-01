import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from './NotificationItem';

class Notifications extends Component {
  shouldComponentUpdate(nextProps) {
    return nextProps.displayDrawer !== this.props.displayDrawer ||
           nextProps.listNotifications.length > this.props.listNotifications.length;
  }

  render() {
    const { displayDrawer, listNotifications, handleDisplayDrawer, handleHideDrawer } = this.props;

    return (
      <div>
        <div className="menuItem" onClick={handleDisplayDrawer}>
          Your notifications
        </div>
        {displayDrawer && (
          <div className="Notifications">
            <button style={{ float: 'right' }} aria-label="Close" onClick={handleHideDrawer}>
              <img src="close-icon.png" alt="close icon" />
            </button>
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
                  />
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  listNotifications: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      html: PropTypes.shape({
        __html: PropTypes.string,
      }),
      value: PropTypes.string.isRequired,
    })
  ),
};

Notifications.defaultProps = {
  displayDrawer: false,
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
  listNotifications: [],
};

export default Notifications;
