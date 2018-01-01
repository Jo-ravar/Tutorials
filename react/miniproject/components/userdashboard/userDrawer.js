import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import ListItem from 'material-ui/List/ListItem';

class UserDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: true };
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
                        title="Shivani Mulay"
                        onLeftIconButtonTouchTap={this.handleToggle}
                    />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={this.handleToggle}
                    >
                    <List>
                        <Subheader><font color="#006064" size="4"><b>My Account</b></font></Subheader>
                        <MenuItem onClick={this.handleClose}>My Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>Update Profile</MenuItem>
                        </List>
                        <Divider />
                        <List>
                        <Subheader><font color="#006064" size="4"><b>Other Options</b></font></Subheader>
                        <MenuItem onClick={this.handleClose}>Previous Interviews</MenuItem>
                        <MenuItem onClick={this.handleClose}>My History</MenuItem>
                        <MenuItem onClick={this.handleClose}>Home</MenuItem>
                        <MenuItem onClick={this.handleClose}>Feedback</MenuItem>
                        <MenuItem onClick={this.handleClose}>Logout</MenuItem>
                        </List>
                    </Drawer>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default UserDrawer;