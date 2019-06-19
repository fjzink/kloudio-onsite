import React, { Component } from 'react';
import axios from 'axios';

import PrettyJson from './PrettyJson';
import RequestForm from './RequestForm';

import '../styles.scss';

export default class Postman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: '',
      apiResult: null,
    };
  }

  handleChange = e => {
    const value = e.target.value;
    this.setState({ apiUrl: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { apiUrl } = this.state;
    axios.get(apiUrl).then(response => {
      this.setState({ apiResult: response.data });
    });
  };

  render() {
    const { apiUrl, apiResult } = this.state;
    return (
      <div className="Postman">
        <h1>Postman</h1>
        <RequestForm value={apiUrl} onChange={this.handleChange} onSubmit={this.handleSubmit} />
        <PrettyJson data={apiResult} />
      </div>
    );
  }
}
