global.jQuery = require('jquery');
require('bootstrap-sass!../bootstrap-sass.config.js');
import './app.scss';

import React from 'react';
import Login from './components/login';
import Dashboard from './components/dashboard';
import UserStore from './stores/UserStore';
import UserActions from './actions/UserActions';
import { compileAccess } from './libs/urlInterpreter';

function getUser() {
  return UserStore.getUser();
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

    const access = this.props.access;
    if (access.accessToken) {
      UserActions.create(access);
    }
  }

  componentWillUnmount() {
    UserStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      user: getUser(),
    });
  }

  render() {
    const markup = (Object.keys(this.state.user).length) ? (
        <Dashboard user={this.state.user} /> ) : <Login />;
    return (
      <div className="container">
        <div className="col-sm-12">
          {markup}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  access: React.PropTypes.object,
};

React.render(
  <App access={compileAccess()} />,
  document.getElementById('mount-node')
);
