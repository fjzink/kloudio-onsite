import React, { Component } from 'react';

import '../styles.scss';

export default class Postman extends Component {
  constructor(props) {
    super(props);

    this.state = {
      apiUrl: '',
      apiResult: 'JSON Data',
    };
  }

  handleChange = () => {};

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { apiUrl, apiResult } = this.state;
    return (
      <div className="Postman">
        <h1>Postman</h1>
        <form>
          <label htmlFor="apiurl">
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
          <div>{apiResult}</div>
        </form>
      </div>
    );
  }
}
