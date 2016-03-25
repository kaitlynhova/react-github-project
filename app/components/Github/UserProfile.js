import React  from 'react';

var UserProfile = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    bio: React.PropTypes.object.isRequired
  },
  render: function(){
    return (
      <div>
        <p>User Profile</p>
        <p>Username: {this.props.username}</p>
      </div>
    )
  }
});

module.exports = UserProfile;