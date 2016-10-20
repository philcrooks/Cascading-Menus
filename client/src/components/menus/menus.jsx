var React = require('react');

var MenuTop = require('./menu_top.jsx');
var MenuMid = require('./menu_mid.jsx');
var MenuBottom = require('./menu_bottom.jsx')

var Menus = React.createClass({

  makeMidMenu: function(chosenField) {
    var midMenuValues = [];
    for (var character of this.props.menuValues) {
      var value = character[chosenField];
      if (value) {
        var index = midMenuValues.indexOf(value);
        if (index < 0) midMenuValues.push(value);
      }
    }
    return midMenuValues;
  },

  makeBottomMenu: function(topChoice, midChoice) {
    var characterList = this.props.menuValues.filter(function(character) {
      return (character[topChoice] === midChoice);
    }.bind(this))
    console.log(characterList)
    return characterList;
  },

  getZeroCharacter: function(topChoice, midChoice) {
    var midMenu = this.makeMidMenu(topChoice);
    var bottomMenu = this.makeBottomMenu(topChoice, midMenu[midChoice]);
    return bottomMenu[0]; 
  },

  getInitialState: function() {
    return({
      topChoice: "",
      midChoice: 0,
      bottomChoice: 0
    })
  },

  setTopChoice: function(chosenItem) {
    // THe top-level menu has been changed. The children must be reset.
    this.setState({
      topChoice: chosenItem,
      midChoice: 0,
      bottomChoice: 0
    });
    this.props.handleChange(this.getZeroCharacter(chosenItem, 0));
  },

  setMidChoice: function(index) {
    this.setState({midChoice: index, bottomChoice: 0});
    this.props.handleChange(this.getZeroCharacter(this.state.topChoice, index));
  },

  setBottomChoice: function(index, character) {
    // Have a new list of filtered characters
    this.setState({bottomChoice: index})
    this.props.handleChange(character);
  },

  render: function() {

    var midMenu = this.makeMidMenu(this.state.topChoice);
    var bottomMenu = this.makeBottomMenu(this.state.topChoice, midMenu[this.state.midChoice]);
    return(
      <div className="menus">
        <MenuTop
          menuIndex={this.state.topChoice}
          handleChange={this.setTopChoice}>
        </MenuTop>
        <MenuMid
          menuIndex={this.state.midChoice}
          menuValues={midMenu}
          handleChange={this.setMidChoice}>
        </MenuMid>
        <MenuBottom
          menuIndex={this.state.bottomChoice}
          menuValues={bottomMenu}
          handleChange={this.setBottomChoice}>
        </MenuBottom>
      </div>
    )
  }
})

module.exports = Menus;