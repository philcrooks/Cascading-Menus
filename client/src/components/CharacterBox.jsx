var React = require('react');

var CharacterSelector = require('./CharacterSelector.jsx');
var CharacterDetail = require('./CharacterDetail.jsx');

var CharacterBox = React.createClass({

  getInitialState: function() {
    return ({rootMenu: "", focusCharacter: 0});
  },

  componentWillReceiveProps: function(newProps) {
    if (newProps.rootMenu !== this.state.rootMenu) {
      console.log("CharacterBox: rx rootMenu", newProps.rootMenu)
      this.setState({rootMenu: newProps.rootMenu, focusCharacter: 0});
    }
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