import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';
import i18n from 'meteor/universe:i18n';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from '../imports/ui/App.jsx';

// eslint-disable-next-line import/prefer-default-export
export const displayError = (error) => {
  if (error) {
    // eslint-disable-next-line no-console
    console.log(i18n.__(error.error));
  }
};

Meteor.startup(() => {
  injectTapEventPlugin();
  document.title = i18n.__('title');
  render(<MuiThemeProvider><App /></MuiThemeProvider>, document.getElementById('main'));
});
