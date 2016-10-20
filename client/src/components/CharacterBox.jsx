var React = require('react');

var CharacterSelector = require('./CharacterSelector.jsx');
var CharacterDetail = require('./CharacterDetail.jsx');

var CharacterBox = React.createClass({

  getInitialState: function() {
    return ({focusCharacter: 0});
  },

  valuesChanged: function(newCharacters) {
    if (!this.props.characters || !newCharacters ||
      (newCharacters.length !== this.props.characters.length)) return true;
    for(var i = 0; i < newCharacters.length; i++) {
      if(newCharacters[i] !== this.props.characters[i]) return true;
    }
    return false;
  },

  componentWillReceiveProps: function(nextProps) {
    if (this.valuesChanged(nextProps.characters)) this.setState({focusCharacter: 0});
  },

  setFocusCharacter: function(index) {
    this.setState({focusCharacter: index});
  },

  render: function() {
    // console.log("Rendering CharacterBox...");
    var character = (this.props.characters) ? this.props.characters[this.state.focusCharacter] : null;
    return (
      <div className="char-box">
        <CharacterSelector
          characters={this.props.characters}
          handleChange={this.setFocusCharacter}>
        </CharacterSelector>
        <CharacterDetail
          character={character}>
        </CharacterDetail>
      </div>
    )
  }
});

module.exports = CharacterBox;