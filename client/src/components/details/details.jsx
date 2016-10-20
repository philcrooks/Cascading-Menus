var React = require('react');

var DetailAncestry = require('./detail_ancestry.jsx');
var DetailHouse = require('./detail_house.jsx');
var DetailPatronus = require('./detail_patronus.jsx');
var DetailWand = require('./detail_wand.jsx');

var Details = React.createClass({
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
        <DetailHouse data={character.house}></DetailHouse>
        <DetailAncestry data={character.ancestry}></DetailAncestry>
        <DetailWand data={character.wand}></DetailWand>
        <DetailPatronus data={character.patronus}></DetailPatronus>
        <img src={character.image} width={200} height={300} mode='fit'/>
      </div>
    )
  }
})

module.exports = Details;
