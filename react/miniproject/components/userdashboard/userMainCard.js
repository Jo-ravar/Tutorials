import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardHeader, CardText, CardActions } from 'material-ui/Card';
import UserTable from './userTable';

const elligibleInterviewData = [
    {
        companyName: 'TCS',
        profile:'Associate Software Developer',
        location: 'Chennai',
        experience: 'B.E./B.Tech. Graduate',
        startDate: '5 Jan',
        endDate:'15 Jan',
      },
    {
        companyName: 'Amdocs',
        profile:'Software Developer',
        location: 'Pune',
        experience: 'B.E./B.Tech. Graduate',
        startDate: '8 Jan',
        endDate:'23 Jan',
    },
    {
        companyName: 'GGK Technology',
        profile:'System Developer',
        location: 'Mumbai',
        experience: '2 years',
        startDate: '5 Jan',
        endDate:'15 Feb',
    },
    {
        companyName: 'Gyrix',
        profile: 'Software Developer',
        location: 'Noida',
        experience: '3 years',
        startDate: '25 Dec',
        endDate:'15 Jan',
    },
    {
        companyName: 'Infotree',
        profile:'Database Administrator',
        location: 'Bangalore',
        experience: 'B.E./B.Tech. Graduate',
        startDate: '9 Jan',
        endDate:'18 Jan',
    },
    {
        companyName: 'ArthTech',
        profile:'Tester',
        location: 'Gurgaon',
        experience: '1.5 years',
        startDate: '9 Jan',
        endDate:'18 Jan',
    },
  ];
  const appliedInterviewData = [
    {
        companyName: 'Noob Games Pvt. Ltd.',
        profile:'Software Developer',
        location: 'Indore',
        experience: 'B.E./B.Tech. Graduate',
        startDate: '5 Feb',
        endDate:'15 Feb',
      },
    {
        companyName: 'MindTree',
        profile:'Associate System Developer',
        location: 'Hyderabad',
        experience: '2.5 years',
        startDate: '15 Jan',
        endDate:'3 Feb',
    },
    {
        companyName: 'Syntel',
        profile:'Project Manager',
        location: 'Indore',
        experience: '3 years',
        startDate: '15 Dec',
        endDate:'25 Feb',
    },
  ];

const style = {
    margin: 22,
    alignItems: 'flex-end',
};

class UserMainCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="cardDiv">
                    <Card style={{  padding: 5, height: '70%', margin: 10  }}>
                        <CardText style={{ padding: 2 }}>
                        <div className="scorecardHead">
                                <p>Your Interview List...</p>
                                </div>
                            <Tabs>
                                <Tab label="ELLIGIBLE INTERVIEWS">
                                    <div>
                                    <UserTable interviewData={elligibleInterviewData} />
                                    </div>
                                </Tab>
                                <Tab label="APPLIED INTERVIEWS">
                                    <div>
                                    <UserTable interviewData={appliedInterviewData} />
                                    </div>
                                </Tab>
                            </Tabs>
                        </CardText>
                        <CardActions>
                            <div className="row">
                                <div className="col-xs-9" />
                                <div className="col-xs-3">
                                    <RaisedButton
                                        label="ALL INTERVIEWS"
                                        primary={true}
                                        style={style}
                                    />
                                </div>
                            </div>
                        </CardActions>
                    </Card>
                </div>
                <style jsx global>{`
          .cardDiv {
            padding: 10px;
          }
        `}</style>
            </MuiThemeProvider>
        );
    }
}

export default UserMainCard;