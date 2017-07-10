import React from 'react';
import _ from 'underscore';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import Toolbar from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

import MarketTable from './MarketTable.jsx';

class MarketTabs extends React.Component {
  constructor(props) {
    super(props);

    this.markets = ['BTC'];
    this.state = { value: 'BTC' };
    this.handleChange = this.handleChange.bind(this);
  }

  getMarketTickers(market) {
    const tickers = _.map(this.context.tickers, ((data, key) => {
      const ticker = data;
      ticker.currencyPair = key;
      ticker.baseVolume = Number(data.baseVolume);

      return ticker;
    }));

    return _.filter(tickers, (data) => {
      return data.currencyPair.substr(0, 3) === market;
    });
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <Paper>
        <Toolbar>
          <p>Markets</p>
        </Toolbar>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.markets.map(market => (
            <Tab label={market} value={market} key={market}>
              <MarketTable tickers={this.getMarketTickers(market)} />
            </Tab>))}
        </Tabs>
      </Paper>
    );
  }
}

MarketTabs.contextTypes = {
  tickers: PropTypes.object,
};

export default MarketTabs;
