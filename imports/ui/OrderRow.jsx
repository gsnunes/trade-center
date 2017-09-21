import React from 'react';
import PropTypes from 'prop-types';
import { TableRowColumn, TableRow } from 'material-ui/Table';

class OrderRow extends React.Component {
  componentDidMount() {
    // this.bindEvents();
  }

  render() {
    const data = this.props.order;

    return (
      <TableRow>
        <TableRowColumn>{data.market}</TableRowColumn>
        <TableRowColumn>{`${data.action} - ${data.type}`}</TableRowColumn>
        <TableRowColumn>{data.qty}</TableRowColumn>
        <TableRowColumn>{data.price}</TableRowColumn>
        <TableRowColumn>{data.status}</TableRowColumn>
        <TableRowColumn>{0}</TableRowColumn>
      </TableRow>
    );
  }
}

OrderRow.propTypes = {
  order: PropTypes.object.isRequired,
};

export default OrderRow;
