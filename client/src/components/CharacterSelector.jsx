var React = require('react');

var CharacterSelector = React.createClass({

  getInitialState: function() {
    return ({selectedIndex: 0, dropDown: []});
  },

  menuChanged: function(newMenu) {
    if (newMenu.length !== this.state.dropDown.length) return true;
    for(var i = 0; i < newMenu.length; i++) {
      if(newMenu[i] !== this.state.dropDown[i]) return true;
    }
    return false;
  },

  componentWillReceiveProps: function(newProps) {
    if (this.menuChanged(newProps.characters)) {
      this.setState({selectedIndex: 0, dropDown: newProps.characters});
    }
  },

  handleChange: function(event) {
    event.preventDefault();
    var newIndex = event.target.value;
    this.setState( { selectedIndex: newIndex } );
    this.props.handleChange( newIndex );
  },

  render: function() {
    // console.log("Rendering CharacterSelector...");
    if (!this.props.characters) {
      return(
        <div className="char-selector">
          <select id="char-selector">
            <option>No characters available</option>
          </select>
        </div>
      )
    }

    var options = this.state.dropDown.map(function(character, index){
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