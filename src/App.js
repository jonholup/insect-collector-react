import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { auth } from '../src/config/firebase';
import Nav from './Nav';
import SignIn from './pages/SignIn/SignIn';
import CurrentUser from './CurrentUser';
import './App.css';
import logo from './logo.jpg';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      user: null
    };
  }

  componentWillMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ user });
    });
  }

  render() {
    const { user } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Insect Collector</h2>
          </div>
          {user
            ? <div>
                <Nav />
                <hr />

                <CurrentUser user={user} />
              </div>
            : <SignIn />}
        </div>
      </Router>
    );
  }
}

export default App;
