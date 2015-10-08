import React from 'react';

class Dashboard extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome {this.props.user.display_name}</h1>
      </div>
    );
  }
}

Dashboard.propTypes = {
  user: React.PropTypes.object.isRequired,
};

export default Dashboard;
