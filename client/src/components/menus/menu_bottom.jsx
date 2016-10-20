var React = require('react');

var MenuBottom = React.createClass({

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.props.handleChange( newIndex, this.props.menuValues[newIndex] );
  },

  render: function() {
    // console.log("Rendering CharacterSelector...");
    if (!this.props.menuValues) {
      return(
        <div className="menu-bottom">
          <select id="menu-bottom">
            <option>No characters available</option>
          </select>
        </div>
      )
    }

    var options = this.props.menuValues.map(function(character, index){
      return <option value={index} key={index}>{character.name}</option>; 
    });
    return(
      <div className="menu-bottom">
        <select id="menu-bottom" value={this.props.menuIndex} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
});

module.exports = MenuBottom;