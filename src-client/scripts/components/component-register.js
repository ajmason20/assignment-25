import React from 'react';
import Backbone from 'backbone';
import {UserModel} from '../models/model-user.js';
import {ACTIONS} from '../actions.js';
import {NavComponent} from '../components/component-nav.js'

export const RegisterComponent = React.createClass({

  _handleNewUser: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    let formValObj = {
      username : formEl.userName.value,
      personalName : formEl.personalName.value,
      password : formEl.password.value,
      avatarUrl : formEl.avatarUrl.value
    }
    ACTIONS.registerNewUser(formValObj)
  },
  
  render: function(){
    return (
      <div>
        <form onSubmit={this._handleNewUser}>
        <div className="signup-page">
           <div className="signup-container">
             <h2>Join Chirp Today</h2>
             <input type="text" name="userName"  placeholder="Username"/>
             <input type="text" name="personalName" placeholder="Full Name"/>
             <input type="text" name="password" placeholder="Password"/>
             <input type="text" name="avatarUrl" placeholder="Upload Picture"/>
             <button type="submit">Sign Up</button>
           </div>
        </div>
      </form>
      </div>
    )
  }


})
