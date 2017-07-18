import React, { Component } from 'react';

export default class Resources extends Component {
  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <button onClick={() => console.log('hi')} className="block">
          Resources...
        </button>
      </div>
    );
  }
}
