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
import Info from 'react-icons/lib/md/info';

class InterviewTable extends React.Component {
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
                START DATE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '50%' }}>
                POSITION
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '20%' }}>
                END DATE
              </TableHeaderColumn>
              <TableHeaderColumn style={{ width: '10%' }}>
                INFO
              </TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            {this.props.intData.map((eachInterview, key) => (
              <TableRow>
                <TableRowColumn style={{ width: '20%' }}>
                  {eachInterview.sDate}
                </TableRowColumn>
                <TableRowColumn style={{ width: '50%' }}>
                  {eachInterview.position}
                </TableRowColumn>
                <TableRowColumn style={{ width: '20%' }}>
                  {eachInterview.eDate}
                </TableRowColumn>
                <TableRowColumn style={{ width: '10%' }}>
                  <Info />
                </TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </MuiThemeProvider>
    );
  }
}

export default InterviewTable;
