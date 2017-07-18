import React, { Component } from 'react';

export default class Gallery extends Component {
  render() {
    return (
      <div>
        <h1>Gallery</h1>
        <button onClick={() => console.log('hi')} className="block">
          Gallery
        </button>
      </div>
    );
  }
}
