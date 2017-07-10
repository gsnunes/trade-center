import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

import MarketTableRow from './MarketTableRow.jsx';

class MarketTable extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  sort() {
    return _.sortBy(this.props.tickers, ((data) => {
      return data.baseVolume;
    })).reverse();
  }

  render() {
    return (
      <Table
        fixedHeader
        height="300px"
      >
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Coin</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Volume</TableHeaderColumn>
            <TableHeaderColumn>Change</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody showRowHover deselectOnClickaway={false} displayRowCheckbox={false}>
          {this.sort().map(ticker =>
            <MarketTableRow ticker={ticker} key={ticker.currencyPair} />)}
        </TableBody>
      </Table>
    );
  }
}

MarketTable.propTypes = {
  tickers: PropTypes.array.isRequired,
};

export default MarketTable;
