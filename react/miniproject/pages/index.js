/**
 * This page wiil be used to create login form
 * and use components and actions related to login
 */
import Link from 'next/link';
import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import Footer from '../components/footer';

const style = {
  margin: 15,
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  /** 
   * This method is used to handle the changes performed to the
   * credentials and sets the state to the current values in the field
   */
  handleChange(event) {
    if (event.currentTarget.dataset.name === 'userName') {
      this.setState({ name: event.currentTarget.value });
    } else if (event.currentTarget.dataset.name === 'passWord') {
      this.setState({ password: event.currentTarget.value });
    }
  }

  /**
   * This method is used to call the login api
   * on the submit button click event
   */
  handleSubmit(event) {
    alert('Hello! Current emailID submitted is : ' + this.state.name);
    event.preventDefault();

    /** fetch() is used in making the request and fetching the data */
    fetch('https://miete-api.herokuapp.com/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.name,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(function(data) {
        var final = `${data.success}`;
        console.log('success returns: ' + final);
        if (final == 'true') {
          window.location.href = '/dashboard';
        } else {
          alert('Please check your credentials! Login Failed!');
        }
      })
      .catch(function(error) {
        console.log(JSON.stringify(error));
      });
    }

  render(){
    return (
      /**
       * Two textfields are used to get the credentials
       * and the api is called on submit button click
       */
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login" />
            <TextField
            type="text"
            data-name="userName"
              hintText="Enter your Username"
              floatingLabelText="Username"
              value={this.state.name}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              type="password"
              data-name="passWord"
              hintText="Enter your Password"
              floatingLabelText="Password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={event => this.handleSubmit(event)}
            />
            <Footer/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}