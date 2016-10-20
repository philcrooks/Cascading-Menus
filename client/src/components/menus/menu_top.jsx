var React = require('react');

var MenuTop = React.createClass({

  handleChange: function(event) {
    event.preventDefault();
    var newValue = event.target.value;
    this.props.handleChange( newValue );
  },

  render: function() {
    // console.log("Rendering FilterList...");
    return (
      <div className="menu-top">
        <select id="menu-top" value={this.props.menuIndex} onChange={this.handleChange}>
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

module.exports = MenuTop;

