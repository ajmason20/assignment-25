import Backbone from 'backbone';
import React from 'react';
import ReactDOM from 'react-dom';
import {HomeView} from './views/HomePageView.js';
import {ChirpsView} from './views/ChirpsView.js';
import {LoginView} from './views/LoginView.js';
import {SignUpView} from './views/SignUpView.js';
import {ViewController} from './ViewController.js'

const AppRouter = Backbone.Router.extend({

  initialize: function(){
    Backbone.history.start()
  },

  routes: {
    'chirps' : 'showChirps',
    'login' : 'showLoginComponent',
    'register' : 'showRegisterComponent',
    '' : 'showWelcomePageComponent'
  },

  showWelcomePageComponent: function(){
    ReactDOM.render(<ViewController fromRoute={"home"} />, document.querySelector('#app-container'));
  },

	showChirps: function(){
		ReactDOM.render(<ViewController fromRoute={"chirps"} />, document.querySelector('#app-container'))
	},

	showLoginComponent: function(){
		ReactDOM.render(<ViewController fromRoute={"login"}/>, document.querySelector('#app-container'))
	},

	showRegisterComponent: function(){
		ReactDOM.render(<ViewController fromRoute={"register"} />, document.querySelector('#app-container'))
	}

})

new AppRouter()
