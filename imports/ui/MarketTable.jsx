import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styleSheet = createStyleSheet('BasicTable', theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));

class MarketTable extends React.Component {
  constructor(props) {
    super(props);
    this.createData = this.createData.bind(this);
  }

  createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }

  render() {
    const data = [
      this.createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
      this.createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
      this.createData('Eclair', 262, 16.0, 24, 6.0),
      this.createData('Cupcake', 305, 3.7, 67, 4.3),
      this.createData('Gingerbread', 356, 16.0, 49, 3.9),
    ];

    return (
      <Paper className={this.props.classes.paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Dessert (100g serving)</TableCell>
              <TableCell numeric>Calories</TableCell>
              <TableCell numeric>Fat (g)</TableCell>
              <TableCell numeric>Carbs (g)</TableCell>
              <TableCell numeric>Protein (g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => {
              return (
                <TableRow key={n.id}>
                  <TableCell>{n.name}</TableCell>
                  <TableCell numeric>{n.calories}</TableCell>
                  <TableCell numeric>{n.fat}</TableCell>
                  <TableCell numeric>{n.carbs}</TableCell>
                  <TableCell numeric>{n.protein}</TableCell>
                </TableRow>
              );
            })}
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
