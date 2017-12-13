import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from './paper';
import { Tabs, Tab } from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import { Card, CardHeader, CardText } from 'material-ui/Card';

const style = {
  margin: 22,
  alignItems: 'flex-end',
};

class AnalyticsCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const paper1 = {
      total: 50,
      selected: 87,
      rejected: 743,
      avgSalary: '3.5 Lakhs',
    };
    const paper2 = {
      total: 39,
      selected: 75,
      rejected: 181,
      avgSalary: '5.8 Lakhs',
    };
    return (
      <MuiThemeProvider>
        <div className="cardDiv">
          <Card style={{ padding: 5, height: '70%' }}>
            <CardText style={{ padding: 2 }}>
              <Tabs style>
                <Tab label="CURRENT MONTH">
                  <div>
                    <Paper data={paper1} />
                    <div className="row">
                      <div className="col-xs-8" />
                      <div className="col-xs-4">
                        <RaisedButton
                          label="View Analysis"
                          primary={true}
                          style={style}
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
                <Tab label="LAST MONTH">
                  <div>
                    <Paper data={paper2} />
                    <div className="row">
                      <div className="col-xs-8" />
                      <div className="col-xs-4">
                        <RaisedButton
                          label="View Analysis"
                          primary={true}
                          style={style}
                        />
                      </div>
                    </div>
                  </div>
                </Tab>
              </Tabs>
            </CardText>
          </Card>
        </div>
        <style jsx global>{`
          .cardDiv {
            padding: 10px;
          }
          .header {
            font-family: monospace;
            font-size: 2.5em;
            font-style: bold;
            text-align: center;
          }
          .headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
          }
          .paper:{
            height: 100,
            width: 100,
            margin: 20,
            textAlign: 'center',
            display: 'inline-block'
          }
        `}</style>
      </MuiThemeProvider>
    );
  }
}

export default AnalyticsCard;
