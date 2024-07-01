import React, { Component } from 'react';
import { AppContext, user as defaultUser, logOut as defaultLogOut } from './AppContext';
import Header from '../Header/Header';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      logOut: this.logOut,
    };
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
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

  render() {
    const { user } = this.state;
    return (
      <AppContext.Provider value={this.state}>
        <Notifications displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer} />
        <Header />
        {user.isLoggedIn ? <CourseList /> : <Login logIn={this.logIn} />}
      </AppContext.Provider>
    );
  }
}

export default App;
