import React from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableHeaderColumn, TableRow, TableHeader } from 'material-ui/Table';
import Toolbar from 'material-ui/Toolbar';
import Paper from 'material-ui/Paper';

import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import { Orders } from '../api/orders.js';

import OrderRow from './OrderRow.jsx';

class OrderTable extends React.Component {
  renderOrders() {
    return this.props.orders.map(order => (
      <OrderRow key={order._id} order={order} />
    ));
  }

  render() {
    return (
      <div>
        <Paper>
          <Toolbar>
            <p>Orders</p>
          </Toolbar>
          <Table>
            <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
              <TableRow>
                <TableHeaderColumn>Market</TableHeaderColumn>
                <TableHeaderColumn>Type</TableHeaderColumn>
                <TableHeaderColumn>Qty</TableHeaderColumn>
                <TableHeaderColumn>Price</TableHeaderColumn>
                <TableHeaderColumn>Status</TableHeaderColumn>
                <TableHeaderColumn>Time</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody displayRowCheckbox={false}>
              {this.renderOrders()}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

OrderTable.propTypes = {
  orders: PropTypes.array.isRequired,
};

export default createContainer(() => {
  Meteor.subscribe('orders');

  return {
    orders: Orders.find({}).fetch(),
  };
}, OrderTable);
