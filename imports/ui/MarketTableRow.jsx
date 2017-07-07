import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';

class MarketTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: props.ticker };
  }

  componentDidMount() {
    this.bindEvents();
  }

  bindEvents() {
    this.context.session.subscribe('ticker', (ev) => {
      if (this.props.currencyPair === ev[0]) {
        this.setState({ ticker: {
          last: ev[1],
          baseVolume: ev[5],
          percentChange: ev[4],
        } });
      }
    });
  }

  render() {
    const { ticker, currencyPair, ...other } = this.props;

    return (
      <TableRow {...other}>
        {other.children[0]}
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
