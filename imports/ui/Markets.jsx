import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

const TabContainer = props =>
  (<div style={{ padding: 24 }}>
    {props.children}
  </div>);

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

class Markets extends React.Component {
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
            fullWidth
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.index} onChangeIndex={this.handleChangeIndex}>
          <TabContainer>{'Item One'}</TabContainer>
          <TabContainer>{'Item Two'}</TabContainer>
          <TabContainer>{'Item Three'}</TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

Markets.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Markets;
