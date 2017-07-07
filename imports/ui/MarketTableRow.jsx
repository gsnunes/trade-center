import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class MarketTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: props.ticker };
  }

  bindEvents() {
    this.context.session.subscribe('ticker', (ev) => {
      if (this.state.ticker[0] === ev[0]) {
        this.setState({ ticker: ev });
      }
    });
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.currencyPair}</TableRowColumn>
        <TableRowColumn>{this.state.ticker.last}</TableRowColumn>
        <TableRowColumn>{this.state.ticker.baseVolume}</TableRowColumn>
        <TableRowColumn>{this.state.ticker.percentChange}</TableRowColumn>
      </TableRow>
    );
  }
}

MarketTableRow.propTypes = {
  ticker: PropTypes.object.isRequired,
  currencyPair: PropTypes.string.isRequired,
};

MarketTableRow.contextTypes = {
  session: PropTypes.object,
};

export default MarketTableRow;
