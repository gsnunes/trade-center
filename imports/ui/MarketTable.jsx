import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('BasicTable', () => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
}));

class MarketTable extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell numeric>Price</TableCell>
              <TableCell numeric>Volume</TableCell>
              <TableCell numeric>Change</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={0}>
              <TableCell>LTC</TableCell>
              <TableCell numeric>0.10160703</TableCell>
              <TableCell numeric>24571.112</TableCell>
              <TableCell numeric>-2.66</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

MarketTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(MarketTable);
