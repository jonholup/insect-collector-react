import React, { Component } from 'react';

export default class Upload extends Component {
  render() {
    return (
      <div>
        <h1>Upload</h1>
        <button onClick={() => console.log('hi')} className="block">
          Upload
        </button>
      </div>
    );
  }
}
