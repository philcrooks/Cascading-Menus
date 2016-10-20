var React = require('react');

var Menus = require('./menus/menus.jsx');
var Details = require('./details/details.jsx')

var Container = React.createClass({

  getInitialState: function() {
    return ({characters: [], selectedCharacter: null});
  },

  componentDidMount: function() {
    var request = new XMLHttpRequest();
    request.open('GET', this.props.url);
    request.onload = function() {
      var HPData = JSON.parse(request.responseText);
      this.setState({characters: HPData, selectedCharacter: HPData[0]});
      // console.log("Data received from API");
    }.bind(this);
    request.send();
  },

  characterSelected: function(character) {
    this.setState({selectedCharacter: character});
  },

  render: function() {
    return (
      <div className="container">
        <Menus
          menuValues={this.state.characters}
          handleChange={this.characterSelected}>
        </Menus>
        <Details
          character={this.state.selectedCharacter}
          handleChange={this.characterSelected}>
        </Details>
      </div>
    )
  }
});

module.exports = Container;