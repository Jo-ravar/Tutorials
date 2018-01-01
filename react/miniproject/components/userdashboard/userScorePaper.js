import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: '15%',
  margin: 25,
  padding: 0,
  textAlign: 'center',
  display: 'inline-block',
  background: '#b2ebf2',
};

class UserScorePaper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Paper style={style} zDepth={3} circle={true}>
          <div className="paperDiv">PROFILE SCORE</div>
          <div className="paperDiv2">{this.props.data.profileScore}</div>
        </Paper>
        <Paper style={style} zDepth={3} circle={true}>
          <div className="paperDiv">PROFILE VIEWS</div>
          <div className="paperDiv2">{this.props.data.profileViews}</div>
        </Paper>
        <Paper style={style} zDepth={3} circle={true}>
          <div className="paperDiv">INTERVIEWS TAKEN</div>
          <div className="paperDiv2">{this.props.data.interviewsTaken}</div>
        </Paper>
        <Paper style={style} zDepth={3} circle={true}>
          <div className="paperDiv">LAST INTERVIEW</div>
          <div className="paperDiv2">{this.props.data.lastInterview}</div>
        </Paper>
        <Paper style={style} zDepth={3} circle={true}>
          <div className="paperDiv">REVIEW RATING</div>
          <div className="paperDiv2">{this.props.data.reviews}</div>
        </Paper>
        <style jsx global>{`
          .paperDiv {
            text-align: center;
            font-size: 1.5em;
            padding: 20px 20px;
          }
          .paperDiv2 {
            text-align: center;
            font-size: 2em;
            padding: 5px 5px;
            font-weight: bold;
          }
        `}</style>
      </div>
    );
  }
}

export default UserScorePaper;