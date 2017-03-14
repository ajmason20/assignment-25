import React from 'react';
import {NavComponent} from '../components/component-nav.js'
import {STORE} from '../store.js';
import {ACTIONS} from '../actions.js';
import {UserLoginComponent} from '../components/component-login.js'

export const LoginView = React.createClass({
  render: function(){
    return (
    <UserLoginComponent/>
    )
  }
})
