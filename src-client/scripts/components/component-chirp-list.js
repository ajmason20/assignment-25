import React from 'react';

export const ChirpListComponent = React.createClass({

  _makeChirpList: function(chirpList){
    let arrayOfChirps = chirpList.map( function(chirpMod, i){
      return (
        <ChirpItem chirpData={chirpMod} key={i}/>
      )
    }).reverse()

    return arrayOfChirps
  },

  render: function(){
    console.log(this.props)
    let allChirpList = this.props.chirpPost

    return (
      <div className="chirps-container">
        <h2>Chirps</h2>
        {this._makeChirpList(allChirpList)}
      </div>
    )
  }
})

export const ChirpItem = React.createClass({
  render: function(){
    return (
    <div className="single-chirp">
      <p>{this.props.chirpData.msg}</p>
      <img src={this.props.chirpData.imgLink}/>
    </div>
  )
  }
})
