import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '../imports/ui/App.jsx';

Meteor.startup(() => {
  injectTapEventPlugin();
  render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('main'));
});
