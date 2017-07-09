import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeader, TableRow, TableHeaderColumn } from 'material-ui/Table';

import MarketTableRow from './MarketTableRow.jsx';

class MarketTable extends React.Component {
  shouldComponentUpdate() {
    return true;
  }

  getMarketTickers(tickers) {
    return _.filter(tickers, (data) => {
      return data.currencyPair.substr(0, 3) === this.props.market;
    });
  }

  sort() {
    const tickers = _.map(this.props.tickers, ((data, key) => {
      const ticker = data;
      ticker.currencyPair = key;
      ticker.baseVolume = Number(data.baseVolume);

      return ticker;
    }));

    return _.sortBy(this.getMarketTickers(tickers), ((data) => {
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
  tickers: PropTypes.object.isRequired,
  market: PropTypes.string.isRequired,
};

export default MarketTable;
