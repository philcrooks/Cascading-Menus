var React = require('react');

var CharacterDetail = React.createClass({
  render: function() {
    var character = this.props.character;
    if (!character) {
      return(
        <div className="character">
          <p>Loading...</p>
        </div>
      )
    }
    return(
      <div className="character">
        <p>Name: {character.name}</p>
        <p>Gender: {character.gender}</p>
      </div>
    )

  }
})

module.exports = CharacterDetail;
