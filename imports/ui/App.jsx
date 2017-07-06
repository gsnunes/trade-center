import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Autobahn from 'autobahn';
import Spinner from 'react-spinkit';

import CoinTable from './CoinTable.jsx';
import MarketTabs from './MarketTabs.jsx';

const styleSheet = createStyleSheet('FullWidthGrid', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  componentDidMount() {
    this.connectionOpen();
  }

  connectionOpen() {
    const connection = new Autobahn.Connection({
      url: 'wss://api.poloniex.com',
      realm: 'realm1',
    });

    connection.onopen = function () {
      this.setState({ open: true });
    };

    connection.open();
  }

  render() {
    return (
      <div>
        {this.state.open ? (
          <div className="container">
            <header>
              <h1>Trade center</h1>
            </header>
            <div className={this.props.classes.root}>
              <Grid container gutter={16}>
                <Grid item xs={12} sm={8}>
                  <CoinTable />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <MarketTabs />
                </Grid>
              </Grid>
            </div>
          </div>
        ) : (
          <Spinner name="line-scale" />
        )}
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);
