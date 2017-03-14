import React from 'react';
import {NavComponent} from '../components/component-nav.js'
import {NewUserComponent} from '../components/component-new-user.js'
import {RegisterComponent} from '../components/component-register.js'

export const SignUpView = React.createClass({
  render: function(){
    return (
      <div>
        {/* <NavComponent/> */}
        <RegisterComponent/>
        {/* <div className="signup-page">
           <div className="signup-container">
             <h2>Join Chirp Today</h2>
             <input type="text" placeholder="Username"/>
             <input type="text" placeholder="Full Name"/>
             <input type="text" placeholder="Password"/>
             <input type="text" placeholder="Upload Picture"/>
             <button>Sign Up</button>
           </div>
        </div> */}
      </div>
    )
  }

})
