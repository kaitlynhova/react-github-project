var React = require('react');

var Repos = React.createClass({
  render: function(){
    return (
      <div>
        <p>REPOSSSS</p>
        <p>REPOS: {this.props.repos}</p>
      </div>
    )
  }
});

module.exports = Repos;