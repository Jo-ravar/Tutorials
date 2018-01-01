import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import UserScorePaper from './userScorePaper';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const style = {
    margin: 22,
    alignItems: 'flex-end',
};

class UserScoreCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const paper = {
            profileScore: '78%',
            profileViews: 18,
            interviewsTaken: 6,
            lastInterview: 'Infotree',
            reviews: '3.25/5',
        };

        return (
            <MuiThemeProvider>
                <div className="cardDiv">
                    <Card style={{ padding: 5, height: '70%', margin: 10 }}>
                        <CardText style={{ padding: 2 }}>
                            <div>
                                <div className="scorecardHead">
                                    <p> Your Profile in Brief... </p>
                                </div>
                                <UserScorePaper data={paper} />
                            </div>
                        </CardText>
                    </Card>
                </div>
                <style jsx global>{`
          .cardDiv {
            padding: 10px;
          }
          .scorecardHead{
            text-align: center;
            font-size: 2.5em;
            font-weight: bold;
            font-family: Brush Script MT;
            }
        `}</style>
            </MuiThemeProvider>
        );
    }
}

export default UserScoreCard;