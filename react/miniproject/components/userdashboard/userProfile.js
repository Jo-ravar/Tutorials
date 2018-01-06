import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';

import {
  blue300,
  white,
} from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const style = {margin: 5};

const UserProfile = () => (
    <MuiThemeProvider>
        <Avatar
          color={white}
          backgroundColor={blue300}
          size={50}
          style={style}
        >
          SM
        </Avatar>
    <b>Hello, Shivani!</b>
  </MuiThemeProvider>
);

export default UserProfile;