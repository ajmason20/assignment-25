import React from 'react';
import Backbone from 'backbone';
import {UserModel} from '../models/model-user.js';
import {ACTIONS} from '../actions.js';

export const NewChirpComponent = React.createClass({

  _handleNewChirp: function(evt){
    evt.preventDefault();
    let formEl = evt.target
    if (formEl.newChirpEl.value.length > 170){
      throw new Error('Chirp can only be 170 characters.')
      new alert('Chirp can only be 170 characters.')
    }
    let chirpValObj = {
      msg : formEl.newChirpEl.value,
      imgLink : formEl.imgInputEl.value
    }

    ACTIONS.saveNewChirp(chirpValObj)
  },

  render: function(){
    return (
      <div className="new-chirp-container">
        <h3>Post Your Chirp</h3>
        <form onSubmit={this._handleNewChirp} >

        <input type="text" placeholder="Your Chirp Here" name="newChirpEl"/>
        <input type="text" placeholder="Image Link" name="imgInputEl"/>
        <button type="submit">Post</button>

        </form>
      </div>
    )
  }
})
