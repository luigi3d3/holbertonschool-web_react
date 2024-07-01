import React from 'react';
import './Login.css';

function Login() {
  return (
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
  );
}

export default Login;
