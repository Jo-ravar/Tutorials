/**
 * This page wiil be used to create login form
 * and use components and actions related to login
 */
import Link from 'next/link';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
const Index = () => (
  <MuiThemeProvider>
    <div>
      <p>This will be our login page.</p>
      <RaisedButton
        href="/dashboard"
        label="DASHBOARD"
        secondary={true}
        labelPosition="before"
        containerElement="label"
        fullWidth={false}
      />
    </div>
  </MuiThemeProvider>
);

export default Index;
