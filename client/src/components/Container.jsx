var React = require('react');

var CharacterBox = require('./CharacterBox.jsx');
var FilterBox = require('./FilterBox.jsx')

var Container = React.createClass({

  getInitialState: function() {
    return ({allCharacters: [], filteredCharacters: []});
  },

  componentDidMount: function() {
      var request = new XMLHttpRequest();
      request.open('GET', this.props.url);
      request.onload = function() {
        var HPData = JSON.parse(request.responseText);
        this.setState({allCharacters: HPData, filteredCharacters: HPData});
        // console.log("Data received from API");
      }.bind(this);
      request.send();
    },

  filterCharacters: function(characterList) {
    // Have a new list of filtered characters
    // CharacterBox should reset its index
    this.setState({filteredCharacters: characterList});
  },

  render: function() {
    return (
      <div className="char-box">
        <FilterBox
          characters={this.state.allCharacters}
          handleChange={this.filterCharacters}>
        </FilterBox>
        <CharacterBox
          characters={this.state.filteredCharacters}>
        </CharacterBox>
      </div>
    )
  }
});

module.exports = Container;