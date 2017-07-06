import React from 'react';
import Table, { TableBody, TableHeader, TableRow, TableHeaderColumn, TableRowColumn } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

class MarketTable extends React.Component {
  componentDidMount() {
    // test
  }

  render() {
    return (
      <Paper>
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
            <TableRow>
              <TableRowColumn>LTC</TableRowColumn>
              <TableRowColumn>0.10160703</TableRowColumn>
              <TableRowColumn>24571.112</TableRowColumn>
              <TableRowColumn>-2.66</TableRowColumn>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default MarketTable;
