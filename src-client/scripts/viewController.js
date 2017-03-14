import React from 'react';
import {NavComponent} from './components/component-nav.js';
import {STORE} from './store.js';
import {ACTIONS} from './actions.js';

import {HomeView} from './views/HomePageView.js';
import {SignUpView} from './views/SignUpView.js';
import {ChirpsView} from './views/ChirpsView.js';
import {LoginView} from './views/LoginView.js';

export const ViewController = React.createClass({

  getInitialState: function(){
    ACTIONS.changeCurrentNav(this.props.fromRoute, window.location.hash)
    let storeObject = STORE.getStoreData()
    return storeObject
  },

  componentDidMount: function(){
    let component = this;
    STORE.onStoreChange(function(){
      console.log('STATE CHANGE')
      let newStoreObj = STORE.getStoreData()
      component.setState(newStoreObj)
    })
  },

  render: function(){

    let componentToRender

    switch(this.state.currentNavRoute){
      case "chirps":
        componentToRender = <ChirpsView {...this.state}/>
        break;
      case "login":
        componentToRender = <LoginView {...this.state}/>
        break;
      case "register":
        componentToRender = <SignUpView {...this.state}/>
        break;
      case "home":
        componentToRender = <HomeView {...this.state}/>
        break;
        default:
      }

      return(
        <div>
          <NavComponent {...this.state}/>
          {componentToRender}
        </div>
      )
    }

  })
