var React = require('react');

var MenuMid = React.createClass({

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.props.handleChange(newIndex);
  },

  render: function() {
    // console.log("Rendering TopLevelMenu...");
    if (this.props.menuValues.length === 0) {
      return(
        <div className="filter-choice">
          <select id="filter-choice">
            <option>No filter selected</option>
          </select>
        </div>
      )
    }

    var options = this.props.menuValues.map(function(filterValue, index){
      return <option value={index} key={index}>{filterValue}</option>
    });

    return(
      <div className="menu-mid">
        <select id="menu-mid" value={this.props.menuIndex} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
})

module.exports = MenuMid;
