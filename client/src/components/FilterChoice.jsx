var React = require('react');

var FilterChoice = React.createClass({
  getInitialState: function() {
    return({selectedIndex: 0})
  },

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.handleChange(newIndex);
  },

  render: function() {
    console.log("Rendering FilterChoice...");
    if (!this.props.values) {
      return(
        <div className="filter-choice">
          <select id="filter-choice">
            <option>No filter selected</option>
          </select>
        </div>
      )
    }

    var options = this.props.values.map(function(filterValue, index){
      return <option value={index} key={index}>{filterValue}</option>
    });
    return(
      <div className="filter-choice">
        <select id="filter-choice" value={this.state.selectedIndex} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
})

module.exports = FilterChoice;
