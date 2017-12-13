import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';

class UserInfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="cardDiv">
          <Card>
            <CardHeader>
              <p className="header">Ravi Joshi</p>
            </CardHeader>
            <CardText>
              <table className="table table-striped">
                <tbody>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>USERNAME</td>
                    <td>ravi22</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>EMAIL</td>
                    <td>
                      <a>ravijoshi0996@gmail.com</a>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>POSITION</td>
                    <td>Company Head</td>
                  </tr>
                  <tr>
                    <td style={{ fontWeight: 'bold' }}>MOBILE</td>
                    <td>7566962946</td>
                  </tr>
                </tbody>
              </table>
            </CardText>
            <CardActions>
              <div className="row">
                <div className="col-xs-6" />
                <div className="col-xs-4" />
                <RaisedButton label="UPDATE" primary={true} />
              </div>
            </CardActions>
          </Card>
        </div>
        <style jsx global>{`
          .cardDiv {
            padding: 10px;
          }
          .header {
            font-family: Rockwell;
            font-size: 2em;
            font-style: bold;
            text-align: left;
          }
        `}</style>
      </MuiThemeProvider>
    );
  }
}

export default UserInfoCard;
