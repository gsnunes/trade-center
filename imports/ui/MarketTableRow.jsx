import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TableRowColumn } from 'material-ui/Table';

const styles = {
  numericColumn: {
    textAlign: 'right',
  },
};

class MarketTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ticker: props.ticker, color: 'inherit' };
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentDidUpdate() {
    // setTimeout(() => {
    //   this.setState({ color: 'inherit' });
    // }, 2000);
  }

  getColor(last) {
    let color = 'inherit';

    if (last) {
      if (last > this.state.ticker.last) {
        color = '#ceebd3';
      } else if (last < this.state.ticker.last) {
        color = '#f6d4d1';
      }
    }

    return color;
  }

  getPercentChange(percentChange) {
    let color = '#27892f';

    if (percentChange.substr(0, 1) === '-') {
      color = '#c02a1d';
    }

    return <span style={{ color }}>{(percentChange * 100).toFixed(2)}</span>;
  }

  bindEvents() {
    this.context.session.subscribe('ticker', (ev) => {
      if (this.state.ticker.currencyPair === ev[0]) {
        this.setState({ ticker: {
          last: ev[1],
          baseVolume: ev[5],
          currencyPair: ev[0],
          percentChange: ev[4],
        },
        color: 'inherit' });
      }
    });
  }

  render() {
    const { ticker, ...other } = this.props;

    return (
      <TableRow {...other} style={{ backgroundColor: this.state.color }} selectable={false}>
        {other.children[0]}
        <TableRowColumn>{this.state.ticker.currencyPair}</TableRowColumn>
        <TableRowColumn style={styles.numericColumn}>{this.state.ticker.last}</TableRowColumn>
        <TableRowColumn style={styles.numericColumn}>{Number(this.state.ticker.baseVolume).toFixed(3)}</TableRowColumn>
        <TableRowColumn style={styles.numericColumn}>{this.getPercentChange(this.state.ticker.percentChange)}</TableRowColumn>
      </TableRow>
    );
  }
}

MarketTableRow.propTypes = {
  ticker: PropTypes.object.isRequired,
};

MarketTableRow.contextTypes = {
  session: PropTypes.object,
};

export default MarketTableRow;
