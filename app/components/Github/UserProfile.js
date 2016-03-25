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
        {this.props.bio.avatar_url && <li className="list-group-item"> <img width="100%" src={this.props.bio.avatar_url} /> </li>}
        {this.props.bio.location && <li className="list-group-item"> Location: {this.props.bio.location} </li>}
        {this.props.bio.name && <li className="list-group-item"> Name: {this.props.bio.name} </li>}
        {this.props.bio.email && <li className="list-group-item"> Email: {this.props.bio.email} </li>}
        {this.props.bio.blog && <li className="list-group-item"> Blog: {this.props.bio.blog} </li>}
        <li className="list-group-item"><p>Username: {this.props.username}</p></li>
      </div>
    )
  }
});

module.exports = UserProfile;