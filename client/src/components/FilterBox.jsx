var React = require('react');

var FilterChoice = require('./FilterChoice.jsx');
var FilterList = require('./FilterList.jsx');

var FilterBox = React.createClass({

  getInitialState: function() {
    return({filterString: null, filterValues: []})
  },

  setFilterString: function(filterString) {
    var filterValues = [];
    for (var character of this.props.characters) {
      var value = character[filterString];
      if (value) {
        var index = filterValues.indexOf(value);
        if (index < 0) filterValues.push(value);
      }
    }
    // console.log("filterValues", filterValues)
    this.setState({filterString: filterString, filterValues: filterValues});
    console.log("FilterBox: rx filterString ", filterString);
  },

  setCharacterChoice: function(index) {
    var characterList = this.props.characters.filter(function(character) {
      return (character[this.state.filterString] === this.state.filterValues[index]);
    }.bind(this))
    console.log("FilterBox: tx filterString ", this.state.filterString);
    this.props.handleChange(this.state.filterString, characterList);
  },

  render: function() {
    return(
      <div className="filter-box">
        <FilterList
          handleChange={this.setFilterString}>
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