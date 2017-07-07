import React from 'react';
import Request from 'browser-request';
import Toolbar from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

import MarketTable from './MarketTable.jsx';

class MarketTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'BTC', tickers: {} };
    this.markets = ['BTC', 'ETH', 'XMR', 'USD'];
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getTicker();
  }

  getTicker() {
    const url = 'https://poloniex.com/public?command=returnTicker';

    Request({
      url,
      json: true,
    }, (error, response, body) => {
      if (!error && response.statusCode === 200) {
        this.setState({ tickers: body });
      }
    });
  }

  handleChange(value) {
    this.setState({ value });
  }

  render() {
    return (
      <div>
        <Toolbar>
          <p>Markets</p>
        </Toolbar>

        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
        >
          {this.markets.map(market => (
            <Tab label={market} value={market} key={market}>
              <MarketTable tickers={this.state.tickers} market={market} />
            </Tab>))}
        </Tabs>
      </div>
    );
  }
}

export default MarketTabs;
