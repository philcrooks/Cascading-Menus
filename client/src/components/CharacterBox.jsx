var React = require('react');

var CharacterAncestry = require('./CharacterAncestry.jsx');
var CharacterHouse = require('./CharacterHouse.jsx');
var CharacterPatronus = require('./CharacterPatronus.jsx');
var CharacterWand = require('./CharacterWand.jsx');
var CharacterSelector = require('./CharacterSelector.jsx');
var Character = require('./Character.jsx');

var CharacterBox = React.createClass({

  getInitialState: function() {
    return ({characters: [], focusCharacter: 0});
  },

  componentDidMount: function() {

      var request = new XMLHttpRequest();
      request.open('GET', this.props.url);
      request.onload = function() {
        var HPData = JSON.parse(request.responseText);
        this.setState({characters: HPData, focusCharacter: 0});
      }.bind(this);
      request.send();
    },

    setFocusCharacter: function(index) {
      console.log(index);
    },

    render: function() {
      return (
        <div>
        <CharacterSelector characters={this.state.characters} selectCharacter={this.setFocusCharacter}></CharacterSelector>
        <Character character={this.state.characters[this.state.focusCharacter]}></Character>
        </div>
        )
    }



});

module.exports = CharacterBox;