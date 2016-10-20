var React = require('react');

var FilterList = React.createClass({

  getInitialState: function() {
    return {selectedValue: "none"}; 
  },

  handleChange: function(event) {
    event.preventDefault();
    var newValue = event.target.value;
    this.setState( { selectedValue: newValue } );
    console.log("FilterList: tx selectedValue", newValue);
    this.props.handleChange( newValue );
  },

  render: function() {
    // console.log("Rendering FilterList...");
    return (
      <div className="filter-list">
        <select id="filter-list" value={this.state.selectedValue} onChange={this.handleChange}>
          <option value="none">No filter</option>
          <option value="ancestry">Ancestry</option>
          <option value="gender">Gender</option>
          <option value="house">House</option>
          <option value="species">Species</option>
        </select>
      </div>
    )
  }

})

module.exports = FilterList;

