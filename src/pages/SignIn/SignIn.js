import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../config/firebase';

export default class SignIn extends Component {
  render() {
    return (
      <div className="LogIn">
        <button onClick={() => auth.signInWithPopup(googleAuthProvider)}>
          Log In
        </button>
      </div>
    );
  }
}
