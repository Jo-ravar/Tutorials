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
    alert('Hello! Current emailID submitted is : ' + this.state.name);
    event.preventDefault();

   fetch('https://miete-api.herokuapp.com/api/login',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.name,
        password: this.state.password,
       })
    })
    .then((response) => response.json())
    .then(function(data){
      var final = `${data.success}`;
      console.log('success returns: ' + final);
      if(final == "true")
      {
        window.location.href="localhost:3000/dashboard";       
      }
      else{
        alert('Please check your credentials! Login Failed!');
      }
    })
    .catch(function(error) {
      console.log(JSON.stringify(error));
    });
  }

  render(){
    return (
      <div>
        <p>This page is for checking login API...</p>
        <form onSubmit={this.handleSubmit}>
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
        <p><b>  </b></p>
      </div>
    );
  }
}