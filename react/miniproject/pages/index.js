/**
 * This page wiil be used to create login form
 * and use components and actions related to login
 */
import Link from 'next/link';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';

const Index = () => (
  <MuiThemeProvider>
    <div>
      <p>This will be our login page.</p>
      <RaisedButton
        href="/dashboard"
        label="DASHBOARD"
        secondary={true}
        labelPosition="before"
        containerElement="label"
        fullWidth={false}
      />
    </div>
  </MuiThemeProvider>
);


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }
  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            <AppBar title="Login"/>
            <TextField
              hintText="Enter your Username"
              floatingLabelText="Username"
              onChange=
              {(event,newValue) => this.setState({username:newValue})}/>
            <br/>
            <TextField
              type="password"
              hintText="Enter your Password"
              floatingLabelText="Password"
              onChange=
              {(event,newValue) => this.setState({password:newValue})}/>
            <br/>
            <RaisedButton
              label="Submit"
              primary={true}
              style={style}
              onClick={(event) => this.handleClick(event)}/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

  handleClick(event) {
    var apiBaseUrl = "http://smarthyre/";
    var self = this;
    var payload = {
      "email": this.state.username,
      "password": this.state.password
    }
    axios
      .post(apiBaseUrl + 'login', payload)
      .then(function (response) {
        console.log(response);
        if (response.data.code == 200) {
          console.log("Login successfull");
          // To Dashboard <<------------------------------------------------------------------------------------------
        } else if (response.data.code == 204) {
          console.log("Username password do not match");
          alert("username password do not match")
        } else {
          console.log("Username does not exists");
          alert("Username does not exist");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }

}

const style = {
  margin: 15
};
export default Index;
