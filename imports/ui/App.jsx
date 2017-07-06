import React from 'react';
import Autobahn from 'autobahn';
import Spinner from 'react-spinkit';
import AppBar from 'material-ui/AppBar';
import { Grid, Row, Col } from 'react-flexbox-grid';

import PreviewTable from './PreviewTable.jsx';
import MarketTabs from './MarketTabs.jsx';

const styles = {
  appBar: {
    marginBottom: '20px',
  },
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: true, session: null };
  }

  componentDidMount() {
    // this.connectionOpen();
  }

  connectionOpen() {
    const connection = new Autobahn.Connection({
      url: 'wss://api.poloniex.com',
      realm: 'realm1',
    });

    connection.onopen = (session) => {
      this.setState({ open: true, session });
    };

    connection.open();
  }

  render() {
    return (
      <div>
        {this.state.open ? (
          <div>
            <AppBar title="Trade Center" style={styles.appBar} />
            <Grid fluid>
              <Row>
                <Col md={8}>
                  <PreviewTable />
                </Col>
                <Col md={4}>
                  <MarketTabs session={this.state.session} />
                </Col>
              </Row>
            </Grid>
          </div>
        ) : (
          <Spinner name="line-scale" />
        )}
      </div>
    );
  }
}

export default App;
