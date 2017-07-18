import React, { Component } from 'react';

export default class Landing extends Component {
  render() {
    return (
      <div>
        <h1>Landing</h1>
        <button onClick={() => console.log('hi')} className="block">
          Hi
        </button>
      </div>
    );
  }
}
