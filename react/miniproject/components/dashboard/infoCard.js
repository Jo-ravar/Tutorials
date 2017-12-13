import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

const style = {
  margin: 2,
  alignItems: 'flex-end',
};
class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <MuiThemeProvider>
        <div className="cardDiv">
          <Card>
            <CardHeader style={{ padding: 5 }}>
              <p className="header">J.P MORGAN</p>
            </CardHeader>
            <CardText style={{ padding: 5, marginRight: 2 }}>
              <div className="row cardText">California, U.S.A</div>
              <div className="row cardText">(866) 467-8289.</div>
              <div className="row cardText">
                <a href="https://www.jpmorgan.com/">www.jpmorgan.com</a>
              </div>
            </CardText>
            <CardActions style={{ padding: 5 }}>
              <div className="row">
                <div className="col-xs-12">
                  <div className="col-xs-6">
                    <RaisedButton
                      label="DOCUMENTS"
                      primary={true}
                      style={style}
                    />
                  </div>
                  <div className="col-xs-6">
                    <RaisedButton label="UPDATE" primary={true} style={style} />
                  </div>
                </div>
              </div>
            </CardActions>
          </Card>
        </div>

        <style jsx global>{`
          .cardDiv {
            padding-top: 20px;
          }
          .header {
            font-family: monospace;
            font-size: 2.5em;
            font-style: bold;
            text-align: center;
          }
          .cardText {
            padding-left: 20px;
            font-family: Courier New;
            font-size: 1.5em;
            text-align: left;
          }
        `}</style>
      </MuiThemeProvider>
    );
  }
}

export default InfoCard;
