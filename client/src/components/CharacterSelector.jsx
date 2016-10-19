var React = require('react');

var CharacterSelector = React.createClass({
  getInitialState: function() {
    return {selectedIndex: 0};
  },

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState( { selectedIndex: newIndex } );
    this.props.handleChange( newIndex );
  },

  render: function() {
    console.log("Rendering CharacterSelector...");
    if (!this.props.characters) {
      return;
    }
    var options = this.props.characters.map(function(character, index){
      return <option value={index} key={index}>{character.name}</option>; 
    });
    return(
      <div className='char-selector'>
        <select id="char-selector" value={this.state.selectedIndex} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    )
  }
})

module.exports = CharacterSelector;