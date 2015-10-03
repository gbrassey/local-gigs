global.jQuery = require('jquery');
require('bootstrap-sass!../bootstrap-sass.config.js');
import './app.scss';

import React from 'react';
import Login from './components/login';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <Login />
        </div>
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('mount-node')
);
