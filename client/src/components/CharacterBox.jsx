var React = require('react');

var CharacterSelector = require('./CharacterSelector.jsx');
var CharacterDetail = require('./CharacterDetail.jsx');

var CharacterBox = React.createClass({

  getInitialState: function() {
    return ({focusCharacter: 0});
  },

  // menuChanged: function(newMenu) {
  //   if (this.state.dropDown.length !== newMenu.length) {
  //     return true;
  //   }
  //   for(var i = 0; i < newMenu.length; i++) {
  //     if(newMenu[i] !== this.state.dropDown[i]) return true;
  //   }
  //   return false;
  // },

  // componentWillReceiveProps: function(newProps) {
  //   if (this.menuChanged(newProps.values)) {
  //     this.setState({selectedIndex: 0, dropDown: newProps.values});
  //   }
  // },

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