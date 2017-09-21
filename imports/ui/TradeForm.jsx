import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import { Orders } from '../api/orders.js';

class TradeForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // return true;
  }

  handleSubmit(event) {
    event.preventDefault();

    const data = {
      market: this.context.selected,
      type: this.props.type,
      action: this.props.action,
      qty: this.qtyInput.value,
      price: this.priceInput.value,
      status: 'EXECUTED',
      createdAt: new Date(),
    };

    Orders.insert(data);

    // Clear form
    // this.qty.value = '';
  }

  render() {
    const selected = this.context.selected.split('_');

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>{this.props.action === 'BUY' ? i18n.__('buy', [selected[1]]) : i18n.__('sell', [selected[1]])}</h3>
        {this.props.type === 'STOP' &&
          <div><TextField
            defaultValue="0.00"
            floatingLabelText={i18n.__('stopPrice')}
            ref={(c) => { this.stopInput = c.input; }}
          /></div>
        }
        <div><TextField
          defaultValue="0.00"
          floatingLabelText={this.props.action === 'BUY' ? i18n.__('toSpend', [selected[0]]) : i18n.__('toSell', [selected[1]])}
          ref={(c) => { this.valueInput = c.input; }}
        /></div>
        <div><TextField
          defaultValue="0.00007088"
          floatingLabelText={i18n.__('btcPricePer', [selected[1]])}
          ref={(c) => { this.priceInput = c.input; }}
        /></div>
        <div><TextField
          defaultValue="0"
          floatingLabelText={this.props.action === 'BUY' ? i18n.__('toBuy', [selected[1]]) : i18n.__('toReceive', [selected[0]])}
          ref={(c) => { this.qtyInput = c.input; }}
        /></div>
        <RaisedButton type="submit" label={this.props.action === 'BUY' ? i18n.__('buyNow') : i18n.__('sellNow')} primary />
      </form>
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
