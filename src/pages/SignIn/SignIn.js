import React, { Component } from 'react';
import { auth, googleAuthProvider } from '../../config/firebase';
import Button from 'antd/lib/button';

export default class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <Button
          type="primary"
          onClick={() => auth.signInWithPopup(googleAuthProvider)}
        >
          Sign In
        </Button>
      </div>
    );
  }
}
