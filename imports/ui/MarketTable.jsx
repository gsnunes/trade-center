import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

import MarketTableRow from './MarketTableRow.jsx';

class MarketTable extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <Table
        fixedHeader
        height="300px"
      >
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Coin</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Volume</TableHeaderColumn>
            <TableHeaderColumn>Change</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover>
          {Object.keys(this.props.tickers).map(key =>
            ((key).substr(0, 3) === this.props.market &&
              <MarketTableRow
                ticker={this.props.tickers[key]}
                currencyPair={key}
                key={key}
              />))}
        </TableBody>
      </Table>
    );
  }
}

MarketTable.propTypes = {
  tickers: PropTypes.object.isRequired,
  market: PropTypes.string.isRequired,
};

export default MarketTable;
