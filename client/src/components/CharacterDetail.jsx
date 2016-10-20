var React = require('react');

var CharacterAncestry = require('./CharacterAncestry.jsx');
var CharacterHouse = require('./CharacterHouse.jsx');
var CharacterPatronus = require('./CharacterPatronus.jsx');
var CharacterWand = require('./CharacterWand.jsx');

var CharacterDetail = React.createClass({
  render: function() {
    // console.log("Rendering CharacterDetail...");
    var character = this.props.character;
    if (!character) {
      return(
        <div className="char-detail">
          <p>Loading...</p>
        </div>
      )
    }
    return(
      <div className="char-detail">
        <p>Name: {character.name}</p>
        <p>Gender: {character.gender}</p>
        <CharacterHouse data={character.house}></CharacterHouse>
        <CharacterAncestry data={character.ancestry}></CharacterAncestry>
        <CharacterWand data={character.wand}></CharacterWand>
        <CharacterPatronus data={character.patronus}></CharacterPatronus>
        <img src={character.image} width={200} height={300} mode='fit'/>
      </div>
    )
  }
})

module.exports = CharacterDetail;
