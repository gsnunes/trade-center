import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui/Table';

class MarketTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: [] };
  }

  componentDidMount() {
    this.setTicker();
  }

  setTicker() {
    this.props.session.subscribe('ticker', (ev) => {
      this.setState({ ticker: ev });
    });
  }

  render() {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderColumn>Coin</TableHeaderColumn>
            <TableHeaderColumn>Price</TableHeaderColumn>
            <TableHeaderColumn>Volume</TableHeaderColumn>
            <TableHeaderColumn>Change</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody>
          {this.state.ticker.length > 0 &&
            <TableRow>
              <TableRowColumn>{this.state.ticker[0]}</TableRowColumn>
              <TableRowColumn>{this.state.ticker[1]}</TableRowColumn>
              <TableRowColumn>{this.state.ticker[2]}</TableRowColumn>
              <TableRowColumn>{this.state.ticker[3]}</TableRowColumn>
            </TableRow>}
        </TableBody>
      </Table>
    );
  }
}

MarketTable.propTypes = {
  session: PropTypes.object.isRequired,
};

export default MarketTable;
