import React from 'react';
import Autobahn from 'autobahn';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import Request from 'browser-request';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PreviewTable from './PreviewTable.jsx';
import MarketTabs from './MarketTabs.jsx';

const styles = {
  appBar: {
    marginBottom: '20px',
  },
  spinnerAlign: {
    textAlign: 'center',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, session: null, tickers: {} };
  }

  getChildContext() {
    return { session: this.state.session, tickers: this.state.tickers };
  }

  componentDidMount() {
    this.connectionOpen();
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

  connectionOpen() {
    const connection = new Autobahn.Connection({
      url: 'wss://api.poloniex.com',
      realm: 'realm1',
      max_retries: 1,
    });

    connection.onopen = (session) => {
      this.setState({ open: true, session });
    };

    connection.open();
  }

  render() {
    return (
      <div>
        <AppBar title="Trade Center" style={styles.appBar} />

        {this.state.open ? (
          <Grid fluid>
            <Row>
              <Col md={8}>
                <PreviewTable />
              </Col>
              <Col md={4}>
                <MarketTabs />
              </Col>
            </Row>
          </Grid>
        ) : (
          <Grid fluid>
            <Row>
              <Col md={12} style={styles.spinnerAlign}>
                <Spinner name="line-scale" />
              </Col>
            </Row>
          </Grid>
        )}
      </div>
    );
  }
}

App.childContextTypes = {
  session: PropTypes.object,
  tickers: PropTypes.object,
};

export default App;
