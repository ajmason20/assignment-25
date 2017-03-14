import React from 'react';
import {NewUserComponent} from '../components/component-new-user.js'



export const HomeView = React.createClass({
  render: function(){
    return (
      <div className="home-container">
        <div className="jumbotron home-page">
          <div className="home-text">
            <h1>Welcome to Chirp</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="login-comps">
            <div className="user-login-container">
              <h3>User Log In</h3>
              <input type="text" placeholder="username"/>
              <div className="password-submit">
                <input type="text" placeholder="password"/>
                <button>Log In</button>
              </div>
            </div>
            <NewUserComponent/>
          </div>
        </div>
      </div>
    )
  }
})
