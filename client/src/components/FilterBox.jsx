var React = require('react');

var FilterChoice = require('./FilterChoice.jsx');
var FilterList = require('./FilterList.jsx');

var FilterBox = React.createClass({

  getInitialState: function() {
    return({filterString: null, filteredChoice: null})
  }

  setFilterString: function(filterString) {
    var filterValues = [];
    for (var character of this.props.characters) {
      var value = character[filterString];
      if (value) {
        var index = filerValues.indexOf(value);
        if (index < 0) filterValues.push(value);
      }
    }
    this.setState({filterString: filterString, filterValues: filterValues});
  },

  setCharacterChoice: function(index) {
    this.setState({filteredChoice: filteredChoice});
  },

  render: function() {
    return(
      <div className="filter-box">
        <FilterList handleChange={this.setFilterString}></FilterList>
        <FilterChoice characters={this.props.filtercharacters} handleChange={this.setCharacterChoice}</FilterChoice>
      </div>
    )
  }
})

module.exports = FilterBox;