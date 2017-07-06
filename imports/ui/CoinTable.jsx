import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableRow, TableHead } from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('BasicTable', () => ({
  paper: {
    width: '100%',
    overflowX: 'auto',
  },
}));

class CoinTable extends React.Component {
  render() {
    return (
      <Paper className={this.props.classes.paper}>
        <Toolbar>
          <Typography type="title">Trade provision</Typography>
        </Toolbar>

        <Table>
          <TableHead>
            <TableRow>
              <TableCell numeric>Price/Share</TableCell>
              <TableCell numeric>Amount</TableCell>
              <TableCell numeric>Fee Total</TableCell>
              <TableCell numeric>Amount - Fee</TableCell>
              <TableCell numeric>1% / 0.5% (Draw)</TableCell>
              <TableCell numeric>2% / 0.5%  (Price)</TableCell>
              <TableCell numeric>Draw</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={0}>
              <TableCell numeric>0.11500000</TableCell>
              <TableCell numeric>0.43588052</TableCell>
              <TableCell numeric>0.00065382 ETH (0.15%)</TableCell>
              <TableCell numeric>0.05012625 BTC</TableCell>
              <TableCell numeric>0.43522670</TableCell>
              <TableCell numeric>0.11661529</TableCell>
              <TableCell numeric>0.11546069</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

CoinTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(CoinTable);
