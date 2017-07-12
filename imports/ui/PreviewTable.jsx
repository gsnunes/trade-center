import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeaderColumn, TableRowColumn, TableRow, TableHeader } from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

import Utils from '../utils.js';

class PreviewTable extends React.Component {
  constructor(props, context) {
    super(props);
    this.state = { ticker: context.tickers[context.selected], total: 0.05012625 };
  }

  componentDidMount() {
    this.bindEvents();
  }

  getAmount() {
    return this.state.total / this.state.ticker.last;
  }

  getFee() {
    return (this.getAmount() * Utils.getFee(this.context.selected, 'buy')) / 100;
  }

  getRealAmount() {
    return this.getAmount() - this.getFee();
  }

  getDraw() {
    const drawBuy = (this.state.ticker.last * this.getAmount()) / this.getRealAmount();
    return (drawBuy * (this.state.total + ((Utils.getFee(this.context.selected, 'sell') * this.state.total) / 100))) / this.state.total;
  }

  bindEvents() {
    this.context.session.subscribe('ticker', (ev) => {
      if (this.context.selected === ev[0]) {
        document.title = i18n.__('market-title', [`${ev[1]} ${ev[0]}`]);

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
              <TableHeaderColumn>Real Amount</TableHeaderColumn>
              <TableHeaderColumn>Fee</TableHeaderColumn>
              <TableHeaderColumn>Draw</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody displayRowCheckbox={false}>
            <TableRow>
              <TableRowColumn>{this.state.ticker.last}</TableRowColumn>
              <TableRowColumn>{Number(this.getAmount()).toFixed(8)}</TableRowColumn>
              <TableRowColumn>{Number(this.getRealAmount()).toFixed(8)}</TableRowColumn>
              <TableRowColumn>{Number(this.getFee()).toFixed(8)} ETH (0.15%)</TableRowColumn>
              <TableRowColumn>{Number(this.getDraw()).toFixed(8)}</TableRowColumn>
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
