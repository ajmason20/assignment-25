import React from 'react';
import {NavComponent} from '../components/component-nav.js'
import {NewChirpComponent} from '../components/component-new-chirp.js'
import {ChirpListComponent} from '../components/component-chirp-list.js'
import {ACTIONS} from '../actions.js';
import {STORE} from '../store.js';

export const ChirpsView = React.createClass({

  getInitialState: function(){
    return STORE.getStoreData()
  },

  componentDidMount: function(){
    let component = this;

    console.log('fetch')
    ACTIONS.fetchAllChirps()
  },

  render: function(){

    return (
      <div className="chirps-page-container">
        <NewChirpComponent/>
        <ChirpListComponent {...this.props}/>
      </div>
    )

  }
})
