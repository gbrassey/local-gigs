global.jQuery = require('jquery');
require('bootstrap-sass!../bootstrap-sass.config.js');
import './app.scss';

import React from 'react';
import Login from './components/login';
import UserStore from './stores/UserStore';
import UserActions from './actions/UserActions';

function getUser() {
  return {
    user: UserStore.getUser(),
  };
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: getUser(),
    };
  }

  componentDidMount() {
    UserStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState(getUser());
  }

  _test() {
    UserActions.create('timmy');
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-12">
          <Login user={this.state.user} />
        </div>
        <button onClick={this._test}>Click Me</button>
      </div>
    );
  }
}

React.render(
  <App />,
  document.getElementById('mount-node')
);
