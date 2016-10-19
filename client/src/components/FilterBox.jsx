var React = require('react');

var FilterChoice = require('./FilterChoice.jsx');
var FilterList = require('./FilterList.jsx');

var FilterBox = React.createClass({

  getInitialState: function() {
    return({filterValues: null})
  },

  setFilterValues: function(filterString) {
    if (filterString === "none") {
      this.setState({filterBy: "none", filterValues: null});
      this.props.handleChange(this.props.characters);
      return;
    }

    var filterValues = [];
    for (var character of this.props.characters) {
      var value = character[filterString];
      if (value) {
        var index = filterValues.indexOf(value);
        if (index < 0) filterValues.push(value);
      }
    }
    this.setState({filterBy: filterString, filterValues: filterValues});
    // this.setCharacterChoice(0);
  },

  setCharacterChoice: function(index) {
    var filterValue = this.state.filterValues[index];
    var characters = this.props.characters.filter(function(character) {
      return (character[this.state.filterBy] === filterValue)
    }.bind(this))
    this.props.handleChange(characters);
  },

  render: function() {
    console.log("Rendering FilterBox...");
    return(
      <div className="filter-box">
        <FilterList
          handleChange={this.setFilterValues}>
        </FilterList>
        <FilterChoice
          values={this.state.filterValues}
          handleChange={this.setCharacterChoice}>
        </FilterChoice>
      </div>
    )
  }
})

module.exports = FilterBox;