import React from 'react';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TargetStopForm extends React.Component {
  componentDidMount() {
    // return true;
  }

  render() {
    return (
      <Paper style={{ marginTop: 20, padding: 10 }}>
        <form>
          <TextField
            id="targetResult"
            defaultValue={0}
            floatingLabelText="Target"
          />
          <TextField
            id="stopResult"
            defaultValue={0}
            floatingLabelText="Stop"
          />
          <TextField
            id="amount"
            defaultValue={0}
            floatingLabelText="Amount"
          />
          <TextField
            id="total"
            defaultValue={0}
            floatingLabelText="Total"
          />
          <RaisedButton label="Trade now" primary />
        </form>
      </Paper>
    );
  }
}

TargetStopForm.propTypes = {
  tradeNow: PropTypes.object,
};

TargetStopForm.defaultProps = {
  tradeNow: {
    amount: 0,
    total: 0,
    targetResult: 0,
    stopResult: 0,
  },
};

export default TargetStopForm;
