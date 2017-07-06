import React from 'react';
import Toolbar from 'material-ui/Toolbar';
import { Tabs, Tab } from 'material-ui/Tabs';

import MarketTable from './MarketTable.jsx';

class MarketTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: 'BTC' };
    this.handleChange = this.handleChange.bind(this);
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
          <Tab label="BTC" value="BTC">
            <MarketTable />
          </Tab>
          <Tab label="ETH" value="ETH">
            <MarketTable />
          </Tab>
          <Tab label="XMR" value="XMR">
            <MarketTable />
          </Tab>
          <Tab label="USDT" value="USDT">
            <MarketTable />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default MarketTabs;
