import React from 'react';
import Avatar from 'material-ui/Avatar';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import {
    blue300,
    pink400,
} from 'material-ui/styles/colors';

const style = { margin: 5 };

class UserProfileAvatar extends Component {
    render() {
        return (
            <List>
                <ListItem
                    disabled={true}
                    leftAvatar={
                        <Avatar
                            color={pink400}
                            backgroundColor={blue300}
                            size={50}
                            style={style}
                        >
                            SM
        </Avatar>
                    }
                >
                    Hello, Shivani!
    </ListItem>
            </List>
        );
    }
}

export default UserProfileAvatar;