import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import MarketTable from './MarketTable.jsx';

const TabContainer = props =>
  (<div style={{ padding: 24 }}>
    {props.children}
  </div>);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class MarketTabs extends React.Component {
  constructor(props) {
    super(props);

    this.state = { index: 0 };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
  }

  handleChange(event, index) {
    this.setState({ index });
  }

  handleChangeIndex(index) {
    this.setState({ index });
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="default">
          <Tabs
            index={this.state.index}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            scrollable
            scrollButtons="auto"
          >
            <Tab label="BTC" />
            <Tab label="ETH" />
            <Tab label="XMR" />
            <Tab label="USDT" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer><MarketTable /></TabContainer>
          <TabContainer>{'Item Two'}</TabContainer>
          <TabContainer>{'Item Three'}</TabContainer>
          <TabContainer>{'Item Four'}</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

export default MarketTabs;
