var React = require('react');

var CharacterAncestry = require('./CharacterAncestry.jsx');
var CharacterHouse = require('./CharacterHouse.jsx');
var CharacterPatronus = require('./CharacterPatronus.jsx');
var CharacterWand = require('./CharacterWand.jsx');
var CharacterSelector = require('./CharacterSelector.jsx');
var CharacterDetail = require('./CharacterDetail.jsx');

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
      this.setState({focusCharacter: index});
    },

    render: function() {
      return (
        <div className="char-box">
          <CharacterSelector
            characters={this.state.characters}
            selectCharacter={this.setFocusCharacter}>
          </CharacterSelector>
          <CharacterDetail
            character={this.state.characters[this.state.focusCharacter]}>
          </CharacterDetail>
        </div>
        )
    }



});

module.exports = CharacterBox;