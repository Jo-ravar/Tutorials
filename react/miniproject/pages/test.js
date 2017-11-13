/**
 * This page will be used to check functionality pf the login API
 * and use actions related to login
 */
import React, { Component } from 'react';

export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    if (event.currentTarget.dataset.name === 'userName') {
      this.setState({ name: event.currentTarget.value });
    } else if (event.currentTarget.dataset.name === 'passWord') {
      this.setState({ password: event.currentTarget.value });
    }
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <p>This is page is for checking login API...</p>
        <form>
          <label>
            Name:
            <input
              type="text"
              data-name="userName"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              data-name="passWord"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
