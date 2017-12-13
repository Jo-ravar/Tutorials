import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="COMPANY NAME"
            onLeftIconButtonTouchTap={this.handleToggle}
          />
          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={this.handleToggle}
          >
            <MenuItem onClick={this.handleClose}> Interview</MenuItem>
            <MenuItem onClick={this.handleClose}> Representative</MenuItem>
          </Drawer>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default AppDrawer;
