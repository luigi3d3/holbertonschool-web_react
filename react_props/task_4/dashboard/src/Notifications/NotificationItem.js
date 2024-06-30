import React from 'react';
import PropTypes from 'prop-types';

function NotificationItem({ type = 'default', html, value }) {
  return (
    <li data-notification-type={type} dangerouslySetInnerHTML={html ? { __html: html.__html } : null}>
      {value}
    </li>
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string.isRequired,
};

export default NotificationItem;
