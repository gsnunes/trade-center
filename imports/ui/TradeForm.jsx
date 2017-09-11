import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'LIMIT' };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // return true;
  }

  handleChange(event, index, value) {
    this.setState({ value });
  }

  render() {
    const selected = this.context.selected.split('_');

    return (
      <div>
        <h3>{this.props.action === 'BUY' ? i18n.__('buy', [selected[1]]) : i18n.__('sell', [selected[1]])}</h3>
        {this.props.type === 'STOP' &&
          <div><TextField
            id="stop"
            defaultValue="0.00"
            floatingLabelText={i18n.__('stopPrice')}
          /></div>
        }
        <div><TextField
          id="value1"
          defaultValue="0.00"
          floatingLabelText={this.props.action === 'BUY' ? i18n.__('toSpend', [selected[0]]) : i18n.__('toSell', [selected[1]])}
        /></div>
        <div><TextField
          id="value2"
          defaultValue="0.00007088"
          floatingLabelText={i18n.__('btcPricePer', [selected[1]])}
        /></div>
        <div><TextField
          id="value3"
          defaultValue="0"
          floatingLabelText={this.props.action === 'BUY' ? i18n.__('toBuy', [selected[1]]) : i18n.__('toReceive', [selected[0]])}
        /></div>
        <RaisedButton label={this.props.action === 'BUY' ? i18n.__('buyNow') : i18n.__('sellNow')} primary />
      </div>
    );
  }
}

TradeForm.propTypes = {
  type: PropTypes.oneOf(['LIMIT', 'STOP']),
  action: PropTypes.oneOf(['BUY', 'SELL']),
};

TradeForm.defaultProps = {
  type: 'LIMIT',
  action: 'BUY',
};

TradeForm.contextTypes = {
  selected: PropTypes.string,
};

export default TradeForm;
