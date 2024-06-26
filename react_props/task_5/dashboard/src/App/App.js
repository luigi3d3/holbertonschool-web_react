import React from 'react';
import PropTypes from 'prop-types';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

function App({ isLoggedIn }) {
  const listCourses = [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ];

  const listNotifications = [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'default', value: 'New data available' },
  ];

  return (
    <div className="App">
      <Notifications listNotifications={listNotifications} />
      {isLoggedIn ? (
        <CourseList listCourses={listCourses} />
      ) : (
        <Login />
      )}
    </div>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
