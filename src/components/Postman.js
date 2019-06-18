import React, { Component } from 'react';
import ReactJson from 'react-json-view';

import axios from 'axios';

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
        <form>
          <label className="input-label" htmlFor="apiurl">
            API URL:
            <input
              id="apiurl"
              className="form-input"
              type="text"
              value={apiUrl}
              onChange={this.handleChange}
            />
          </label>
          <button type="button" onClick={this.handleSubmit}>
            Submit
          </button>
          <div className="json-data">{apiResult ? <ReactJson src={apiResult} /> : null}</div>
        </form>
      </div>
    );
  }
}
