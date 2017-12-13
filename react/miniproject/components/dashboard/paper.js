import React from 'react';
import Paper from 'material-ui/Paper';

const style = {
  height: 150,
  width: '20%',
  margin: 20,
  padding: 0,
  textAlign: 'center',
  display: 'inline-block',
};

class PaperExample extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Paper style={style} zDepth={5}>
          <div className="paperDiv">TOTAL</div>
          <div className="paperDiv2">{this.props.data.total}</div>
        </Paper>
        <Paper style={style} zDepth={5}>
          <div className="paperDiv">SELECTED</div>
          <div className="paperDiv2">{this.props.data.selected}</div>
        </Paper>
        <Paper style={style} zDepth={5}>
          <div className="paperDiv">REJECTED</div>
          <div className="paperDiv2">{this.props.data.rejected}</div>
        </Paper>
        <Paper style={style} zDepth={5}>
          <div className="paperDiv">AVG.</div>
          <div className="paperDiv2">{this.props.data.avgSalary}</div>
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

export default PaperExample;
