var React = require('react');

var CharacterSelector = require('./CharacterSelector.jsx');
var CharacterDetail = require('./CharacterDetail.jsx');
var FilterBox = require('./FilterBox.jsx')

var CharacterBox = React.createClass({

  getInitialState: function() {
    return ({allCharacters: [], filteredCharacters: [], focusCharacter: 0});
  },

  componentDidMount: function() {
      var request = new XMLHttpRequest();
      request.open('GET', this.props.url);
      request.onload = function() {
        var HPData = JSON.parse(request.responseText);
        this.setState({allCharacters: HPData, filteredCharacters: HPData, focusCharacter: 0});
        console.log("Data received from API");
      }.bind(this);
      request.send();
    },

  setFocusCharacter: function(index) {
    this.setState({focusCharacter: index});
  },

  filterCharacters: function(characterList) {
    this.setState({filteredCharacters: characterList});
  },

  render: function() {
    return (
      <div className="char-box">
        <FilterBox
          characters={this.state.allCharacters}
          handleChange={this.filterCharacters}>
        </FilterBox>
        <CharacterSelector
          characters={this.state.filteredCharacters}
          handleChange={this.setFocusCharacter}>
        </CharacterSelector>
        <CharacterDetail
          character={this.state.filteredCharacters[this.state.focusCharacter]}>
        </CharacterDetail>
      </div>
    )
  }
});

module.exports = CharacterBox;