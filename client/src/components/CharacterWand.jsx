var React = require('react');

var CharacterWand = function(props) {
  // console.log(props.data)
  if(!props.data) return (<h4>This character has no known wand.</h4>);
  var wood = props.data.wood;
  if (wood === "") wood = "unknown";
  
  var core = props.data.core;
  if (core === "") core = "unknown";

  var length = props.data.length;
  if (length === "") length = "unknown"
      
      return(
            <div>
            <h4>Wand: </h4>
              <ul>
                <li> { wood } </li>
                <li> { core } </li>
                <li> { length } </li>
              </ul>
            </div>
            )
          }

module.exports = CharacterWand;