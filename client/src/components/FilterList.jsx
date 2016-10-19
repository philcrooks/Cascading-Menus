var React = require('react');

var FilterList = React.createClass({

  getInitialState: function() {
    return {selectedIndex: 0}; 
  },

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState( { selectedIndex: newIndex } );
    this.props.selectFilter( newIndex );
  },

  render: function() {
    return (
      <div className="filter-selector">
        <select id="filter-selector" value={this.state.selectedIndex} onChange={this.handleChange}>
          <option value="ancestry">Ancestry</option>
          <option value="gender">Gender</option>
          <option value="house">House</option>
          <option value="alive">Living</option>
          <option value="species">Species</option>
          <option value="hogwartsStaff">Staff</option>
          <option value="hogwartsStudent">Student</option>
        </select>
      </div>
    )
  }

})

module.exports = FilterList;

