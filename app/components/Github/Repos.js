var React = require('react');

var Repos = React.createClass({
  propTypes:{
    username: React.PropTypes.string.isRequired,
    repos: React.PropTypes.array.isRequired
  },
  render: function(){
    console.log("repos: ", this.props.repos);
    return (
      <div>
        <p>REPOSSSS</p>
      </div>
    )
  }
});

module.exports = Repos;