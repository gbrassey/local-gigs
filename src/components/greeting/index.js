import React from 'react';
import './index.scss';

export default class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
}

Greeting.propTypes = {
  name: React.PropTypes.string.isRequired,
};
