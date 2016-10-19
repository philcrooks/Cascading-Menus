var React = require('react');

var CharacterPatronus = function(props) {
  console.log(props.data)
  if(!props.data) 
      {return <h4>This character has no known patronus.</h4>}
    return(
        <div>
          <h4>Patronus: {props.data}</h4>
        </div>
          )
        }

module.exports = CharacterPatronus;