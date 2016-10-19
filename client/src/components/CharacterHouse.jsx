var React = require('react');

var CharacterHouse = function(props) {
  // console.log(props.data)
  if(!props.data) 
      {return <h4>This character has no known house.</h4>}
    return(
        <div>
          <h4>House: {props.data}</h4>
        </div>
          )
        }

module.exports = CharacterHouse;