import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton/RaisedButton';

class UserTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <Table selectable={false}>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn style={{ width: '20%' }}>
                COMPANY NAME
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20%' }}>
                PROFILE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10%' }}>
                LOCATION
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20%' }}>
                EXPERIENCE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10%' }}>
                START DATE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10%' }}>
                END DATE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10%' }}>
                APPLY
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.interviewData.map((eachInterview, key) => (
              <TableRow>
                <TableRowColumn style={{ width: '20%' }}>
                  {eachInterview.companyName}
                </TableRowColumn>
                <TableRowColumn style={{ width: '20%' }}>
                  {eachInterview.profile}
                </TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                  {eachInterview.location}
                </TableRowColumn>
                <TableRowColumn style={{ width: '20%' }}>
                {eachInterview.experience}
                </TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                {eachInterview.startDate}
                </TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                {eachInterview.endDate}
                </TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                <RaisedButton label="APPLY" primary={true}/>
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default UserTable;