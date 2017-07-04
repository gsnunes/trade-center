import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';

import Markets from './Markets.jsx';

const styleSheet = createStyleSheet('FullWidthGrid', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 30,
  },
  paper: {
    padding: 16,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = ({ classes }) =>
  (<div className="container">
    <header>
      <h1>Trade center</h1>
    </header>
    <div className={classes.root}>
      <Grid container gutter={24}>
        <Grid item xs={12} sm={9}>
          <Paper className={classes.paper}>
            xs=12 sm=9
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Markets />
        </Grid>
      </Grid>
    </div>
  </div>);

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(App);
