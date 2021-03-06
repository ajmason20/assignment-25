import React from 'react';
import {STORE} from '../store.js'
import {ACTIONS} from '../actions.js'


export const UserLoginComponent = React.createClass({

  _handleLogIn: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let userVal = formEl.userNameField.value
    let pwVal = formEl.passwordField.value
    ACTIONS.userLogIn(userVal, pwVal)
  },

  render: function(){
    return (
      <div>
        <div className="login-page">
          <div className="login-container">
            <form onSubmit={this._handleLogIn}>
              <h2>Log in to Chirp</h2>
              <input type="text" placeholder="User Name" name="userNameField"/>
              <input type="password" placeholder="Password" name="passwordField"/>
              <button type="submit">Log In</button>
            </form>
          </div>
        </div>
      </div>
    )
  }

})
