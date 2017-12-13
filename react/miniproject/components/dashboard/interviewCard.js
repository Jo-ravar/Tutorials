import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import InterviewTable from './interviewTable';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const interviewData = [
  {
    sDate: '16 Dec',
    eDate: '20 Dec',
    position: 'Full stack Developer',
  },
  {
    sDate: '18 Dec',
    eDate: '21 Dec',
    position: 'Backend Developer',
  },
  {
    sDate: '25 Dec',
    eDate: '29 Dec',
    position: 'Content Writer',
  },
  {
    sDate: '5 Jan',
    eDate: '15 Jan',
    position: 'Data Analyst',
  },
  {
    sDate: '10 Jan',
    eDate: '13 Jan',
    position: 'Python/ML Developer',
  },
];
const style = {
  margin: 2,
};
class InterviewCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="cardDiv">
          <Card>
            <CardHeader style={{ padding: 5 }}>
              <p className="header">UPCOMING INTERVIEWS</p>
            </CardHeader>
            <CardText>
              <InterviewTable intData={interviewData} />
            </CardText>
            <CardActions>
              <div className="row">
                <div className="col-xs-6" />
                <div className="col-xs-3" />
                <RaisedButton label="VIEW ALL" primary={true} style={style} />
              </div>
            </CardActions>
          </Card>
        </div>
        <style jsx global>{`
          .header {
            padding-left: 20px;
            font-family: monospace;
            font-size: 1.5em;
            font-style: bold;
            text-align: left;
          }
        `}</style>
      </MuiThemeProvider>
    );
  }
}

export default InterviewCard;
