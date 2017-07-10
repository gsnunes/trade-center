import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeaderColumn, TableRowColumn, TableRow, TableHeader } from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

class PreviewTable extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = { ticker: context.tickers[context.selected] };
  }

  componentDidMount() {
    this.bindEvents();
  }

  bindEvents() {
    this.context.session.subscribe('ticker', (ev) => {
      if (this.context.selected === ev[0]) {
        this.setState({ ticker: {
          last: ev[1],
        } });
      }
    });
  }

  render() {
    return (
      <Paper>
        <Toolbar>
          <p>Trade preview</p>
        </Toolbar>

        <Table>
          <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
            <TableRow>
              <TableHeaderColumn>Price/Share</TableHeaderColumn>
              <TableHeaderColumn>Amount</TableHeaderColumn>
              <TableHeaderColumn>Fee Total</TableHeaderColumn>
              <TableHeaderColumn>Amount - Fee</TableHeaderColumn>
              <TableHeaderColumn>1% / 0.5% (Draw)</TableHeaderColumn>
              <TableHeaderColumn>2% / 0.5%  (Price)</TableHeaderColumn>
              <TableHeaderColumn>Draw</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{this.state.ticker.last}</TableRowColumn>
              <TableRowColumn>0.43588052</TableRowColumn>
              <TableRowColumn>0.00065382 ETH (0.15%)</TableRowColumn>
              <TableRowColumn>0.05012625 BTC</TableRowColumn>
              <TableRowColumn>0.43522670</TableRowColumn>
              <TableRowColumn>0.11661529</TableRowColumn>
              <TableRowColumn>0.11546069</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

PreviewTable.contextTypes = {
  tickers: PropTypes.object,
  session: PropTypes.object,
  selected: PropTypes.string,
};

export default PreviewTable;
