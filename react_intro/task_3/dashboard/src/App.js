import React from 'react';
import logo from './holberton-logo.jpg';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="login-container">
          <div className="input-group">
            <label htmlFor="email">Email: </label>
            <input type="email" id="email" name="email" className="small-input" />
          </div>
          <div className="input-group-r">
            <label htmlFor="password">Password: </label>
            <input type="password" id="password" name="password" className="small-input" />
          </div>
          <button>OK</button>
        </div>
      </div>
      <div className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
}

export default App;

