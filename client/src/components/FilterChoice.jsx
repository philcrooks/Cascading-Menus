var React = require('react');

var FilterChoice = React.createClass({
  getInitialState: function() {
    return({selectedIndex: 0, dropDown: []});
  },

  menuChanged: function(newMenu) {
    if (this.state.dropDown.length !== newMenu.length) {
      return true;
    }
    for(var i = 0; i < newMenu.length; i++) {
      if(newMenu[i] !== this.state.dropDown[i]) return true;
    }
    return false;
  },

  componentWillReceiveProps: function(newProps) {
    if (this.menuChanged(newProps.values)) {
      this.setState({selectedIndex: 0, dropDown: newProps.values});
    }
  },

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState({selectedIndex: newIndex});
    this.props.handleChange(newIndex);
  },

  render: function() {
    // console.log("Rendering FilterChoice...");
    if (this.props.values.length === 0) {
      return(
        <div className="filter-choice">
          <select id="filter-choice">
            <option>No filter selected</option>
          </select>
        </div>
      )
    }

    var options = this.state.dropDown.map(function(filterValue, index){
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
