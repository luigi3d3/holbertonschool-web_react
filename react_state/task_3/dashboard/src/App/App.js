import React, { Component } from 'react';
import { AppContext, user as defaultUser, logOut as defaultLogOut } from './AppContext';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
      listNotifications: [
        { id: 1, value: 'New course available', type: 'default' },
        { id: 2, value: 'New resume available', type: 'urgent' },
        { id: 3, value: 'New project available', type: 'urgent' },
      ],
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  logIn(email, password) {
    this.setState({
      user: { email, password, isLoggedIn: true },
    });
  }

  logOut() {
    this.setState({
      user: { ...defaultUser },
    });
  }

  markNotificationAsRead(id) {
    this.setState({
      listNotifications: this.state.listNotifications.filter(notification => notification.id !== id),
    });
  }

  render() {
    const { user, listNotifications } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <Notifications 
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
          listNotifications={listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
        <Footer />
      </AppContext.Provider>
    );
  }
}

export default App;
