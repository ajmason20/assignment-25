import React from 'react';
import {ACTIONS} from '../actions.js';

export const NavComponent = React.createClass({

    _getMenuOptions: function(currentUserOnStore){
      let routeList = []
      if (typeof currentUserOnStore._id === 'undefined'){
        routeList = [
          {appRouteName: 'home', showText: 'home', hashRoute: ''},
          {appRouteName: 'chirps', showText: 'chirps', hashRoute: 'chirps'},
          {appRouteName: 'login', showText: 'login', hashRoute: 'login'},
          {appRouteName: 'register', showText: 'register', hashRoute: 'register'}
        ]
      } else {
        routeList = [
          {appRouteName: 'home', showText: 'home', hashRoute: ''},
          {appRouteName: 'chirps', showText: 'chirps', hashRoute: 'chirps'},
          {appRouteName: 'logout', showText: 'logout', hashRoute: 'login'}
        ]
      }
      return routeList
    },

    _showNavBarJSX: function(currentNavRoute, currentUser){
      let menuOptions = this._getMenuOptions(currentUser)

      let componentsList = menuOptions.map(function(routeObj, i){
        return <RouteOption {...routeObj} key={i} _currentNavRoute={currentNavRoute}/>
      })

      return componentsList
    },

    render: function(){
      return (
        <div className="nav-bar">
          {this._showNavBarJSX(this.props.currentNavRoute, this.props.currentUser)}
        </div>
      )
    }
  })

  const RouteOption = React.createClass({

  _handleNavClick: function(evt){
    console.log(this.props)
    ACTIONS.changeCurrentNav(this.props.appRouteName, this.props.hashRoute)
  },

  render: function(){

    return (

        <button data-text={this.props.showText} onClick={this._handleNavClick}>
          {this.props.appRouteName}
        </button>
    )
  }
})
