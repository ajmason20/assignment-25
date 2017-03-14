import React from 'react';

export const NewUserComponent = React.createClass({

  render: function(){
    return (
      <div className="new-user-container">
        <h3>New to Chirp? Sign Up</h3>
        <input type="text" placeholder="Full Name"/>
        <input type="text" placeholder="Email"/>
        <button>Sign Up for Chirp</button>
      </div>
    )
  }

})
