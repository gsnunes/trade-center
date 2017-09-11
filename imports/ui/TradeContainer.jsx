import React from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { Grid, Row, Col } from 'react-flexbox-grid';

import OrderTable from './OrderTable.jsx';
import TradeForm from './TradeForm.jsx';

const items = [
  <MenuItem key={1} value="LIMIT" primaryText="Limit" />,
  <MenuItem key={2} value="STOP" primaryText="Stop" />,
];

class TradeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { type: 'LIMIT' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, value) {
    this.setState({ type: value });
  }

  render() {
    return (
      <Paper style={{ marginTop: 20, padding: 10 }}>
        <Grid fluid>
          <Row>
            <Col md={9}>
              <h2>Trade</h2>
            </Col>
            <Col md={3}>
              <SelectField
                value={this.state.type}
                onChange={this.handleChange}
                floatingLabelText="Type"
              >
                {items}
              </SelectField>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <TradeForm type={this.state.type} action="BUY" />
            </Col>
            <Col md={6}>
              <TradeForm type={this.state.type} action="SELL" />
            </Col>
          </Row>
          <Row style={{marginTop: '20px'}}>
            <Col md={12}>
              <OrderTable total={0} />
            </Col>
          </Row>
        </Grid>
      </Paper>
    );
  }
}

export default TradeContainer;
