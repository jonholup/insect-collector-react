import React, { Component } from 'react';
import { database } from '../../config/firebase';
import Progress from 'antd/lib/progress';

export default class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      newData: '',
      user: this.user
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    database.ref().on('value', snapshot => {
      this.setState({
        data: snapshot.val()
      });
    });
  }

  handleChange(event) {
    const newData = event.target.value;
    this.setState({
      newData
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    database.ref().child('images/').set(this.state.newData);
  }
  render() {
    return (
      <div>
        <h1>Upload</h1>
        <Progress id="uploader" />
        <div>
          {JSON.stringify(this.state.data, null, 2)}
          {this.state.user}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input type="file" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
