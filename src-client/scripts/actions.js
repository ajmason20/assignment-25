import Backbone from 'backbone';
import {STORE} from './store.js';
import {UserModel} from './models/model-user.js';
import {ChirpModel, ChirpCollection} from './models/model-chirps.js';

export const ACTIONS = {

  saveNewChirp: function(newChirpEntry){
    let newChirpInstance = new ChirpModel()
    newChirpInstance.set(newChirpEntry)
    newChirpInstance.save().then( function(serverRes){
      ACTIONS.fetchAllChirps
    })
  },

  fetchAllChirps: function(){
    let chirpCollInstance = new ChirpCollection()
    chirpCollInstance.fetch().then( function(serverRes){
      STORE.setStore('chirpPost', serverRes)
    })
  },

  changeCurrentNav: function(selectedAppRoute, urlRoute){
    STORE.setStore('currentNavRoute', selectedAppRoute)
    window.location.hash = urlRoute
  },

  registerNewUser: function(newUserObj){
    UserModel.register(newUserObj).then( function(serverRes){
      console.log(serverRes)
      ACTIONS.changeCurrentNav('register', 'register')
    })
  },

  userLogIn: function(user, password){
    UserModel.logIn(user, password).then( function(serverRes){
      STORE.setStore('currentUser', serverRes)
      ACTIONS.changeCurrentNav('login', 'login')
    })
  }

}
