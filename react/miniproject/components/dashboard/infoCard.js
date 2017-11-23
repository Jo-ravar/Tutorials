import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

class InfoCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
        this.handleToggle = this.handleToggle.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle = () => {
        this.setState({ open: !this.state.open })
    };

    handleClose = () => {
        this.setState({ open: false })
    };

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <AppBar title="COMPANY NAME" onLeftIconButtonTouchTap={this.handleToggle} />
                    <Drawer
                        docked={false}
                        width={200}
                        open={this.state.open}
                        onRequestChange={this.handleToggle}
                    >
                        <MenuItem onClick={this.handleClose}> Interview</MenuItem>
                        <MenuItem onClick={this.handleClose}> Representative</MenuItem>
                    </Drawer>
                    <br></br>
                    <b>This is sample for card:-- </b>
                    <br></br>
                    <Card className="card">
                        <CardHeader title="Company Info" />
                        <CardText>
                            JP Morgan<br />
                            California<br />
                            U.S.A<br />
                            78125<br />
                        </CardText>
                    </Card>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default InfoCard;
